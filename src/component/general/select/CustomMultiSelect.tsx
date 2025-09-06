import {useState, useRef, useEffect} from 'react';
import SvgForSelect from "./SvgForSelect.tsx";
import {MdDeleteOutline} from 'react-icons/md';

interface IProps {
    options: Array<{ value: number; label: string }> | undefined;
    placeholder?: string;
    Value?: number[];
    onChange: (value: number[]) => void;
    importantValue?: number[];
    important?: boolean;
}

const CustomMultiSelect = ({options, placeholder, Value, onChange, important, importantValue}: IProps) => {
    const [selectedOptions, setSelectedOptions] = useState<Array<{ value: number; label: string }>>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dataValue = inputRef?.current?.value;
    useEffect(() => {
        if (Value) {
            const selected = options?.filter(option => Value.includes(option.value)) || [];
            setSelectedOptions(selected);
        }
    }, [Value, options]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, []);

    const handleSelectOption = (option: { value: number; label: string }) => {
        if (importantValue && importantValue.includes(option.value)) {
            setSelectedOptions([option]);
            onChange([option.value]);
        } else {
            const newSelectedOptions = [...selectedOptions, option];
            setSelectedOptions(newSelectedOptions);
            onChange(newSelectedOptions.map(opt => opt.value));
        }
        setSearchQuery('');
    };

    const handleRemoveOption = (value: number) => {
        const newSelectedOptions = selectedOptions.filter(option => option.value !== value);
        setSelectedOptions(newSelectedOptions);
        onChange(newSelectedOptions.map(opt => opt.value));
    };

    // فیلتر کردن گزینه‌ها بر اساس اینکه آیا مقدار مهم انتخاب شده است یا خیر
    const filteredOptions = importantValue && selectedOptions.some(option => importantValue.includes(option.value))
        ? []
        : options?.filter(option => option.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !(importantValue && selectedOptions.some(selected => importantValue.includes(selected.value)) &&
                importantValue.includes(option.value)));

    return (
        <div className={`w-full `} ref={selectRef}>
            <div className='relative'>
                <div
                    className={`w-full flex flex-wrap h-12 bg-white border text-gray-800 rounded-lg cursor-pointer items-center ${
                        isOpen ? 'border-blue-500' : 'border-gray-600'
                    }`}
                    onClick={() => setIsOpen(!isOpen)}>
                    {selectedOptions.map(option => (
                        <div key={option.value} className='flex items-center bg-gray-200 rounded px-2 py-1 m-2'>
                            <span>{option.label}</span>
                            <MdDeleteOutline
                                className='ml-1 cursor-pointer'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveOption(option.value);
                                }}
                            />
                        </div>
                    ))}
                    <input
                        ref={inputRef}
                        type='text'
                        value={searchQuery}
                        onChange={e => {
                            setSearchQuery(e.target.value);
                            setIsOpen(true);
                        }}
                        className={`peer flex-grow bg-transparent border-none focus:outline-none cursor-pointer text-sm py-[11px] md:py-[12px]`}
                        placeholder=""
                    />
                    <div
                        className='absolute inset-y-0 left-0 flex items-center pointer-events-none border-r !border-gray-600 m-1 my-2 bg-white'>
                        <SvgForSelect/>
                    </div>
                </div>
                <label
                    className={`absolute right-1 flex pointer-events-none font-normal transition-all ${
                        isOpen || searchQuery || dataValue || selectedOptions.length > 0
                            ? '!bg-white -top-1.5 text-[10px] px-1'
                            : 'top-2.5 text-sm'
                    } peer-focus:!bg-white w-fit peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900`}>
                    {placeholder}
                    {important && <div className={'mx-2 text-red-500 text-md'}>*</div>}
                </label>
                {isOpen && (
                    <div
                        className='absolute z-50 w-full bg-white border !border-gray-400 rounded-lg mt-1 max-h-32 overflow-y-auto'>
                        {filteredOptions?.map((option, index) => (
                            <div
                                key={index}
                                className={`p-2 hover:bg-gray-200 cursor-pointer border-b !border-gray-200 ${
                                    selectedOptions.some(selected => selected.value === option.value) ? 'hidden' : ''
                                }`}
                                onClick={() => handleSelectOption(option)}>
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomMultiSelect;
