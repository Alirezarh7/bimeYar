import { useState, useRef, useEffect } from "react";
import SvgForSelect from "./SvgForSelect";
import { CiCircleRemove } from "react-icons/ci"; // فرض می‌کنم که آیکون شما از react-icons استفاده می‌کند
import ReactDOM from "react-dom";

interface IProps {
  options: Array<{ value: number | string; label: string }> | undefined;
  placeholder?: string;
  valueID?: number | undefined;
  onChange: any;
  value: string | number;
  important?: boolean;
  disabledInput?: boolean;
  className?: string;
}

const CustomSelect = ({ options, placeholder, valueID, onChange, important, disabledInput = false, className, value }: IProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dataValue = inputRef?.current?.value;
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Clear input function

  useEffect(() => {
    const selectedOption = options && options?.find((option) => option.value === valueID);
    if (selectedOption) {
      setSearchQuery(selectedOption.label);
    } else {
      setSearchQuery("");
    }
  }, [valueID, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (selectRef.current && !selectRef.current.contains(target) && dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectOption = (value: any) => {
    const selectedOption = options && options?.find((option) => option.value === value);
    if (selectedOption) {
      setSearchQuery(selectedOption.label);
      onChange(value);
    }
    setIsOpen(false);
  };

  // useEffect(() => {
  //   if (value) {
  //     handleSelectOption(value);
  //   }
  // });

  const normalizeString = (str: string) => {
    return str.replace(/ي/g, "ی").replace(/ك/g, "ک");
  };

  const filteredOptions = options && options.filter((option) => normalizeString(option.label).toLowerCase().includes(normalizeString(searchQuery).toLowerCase()));
  return (
    <div
      className={`w-full   relative   cursor-pointer  ${className}`}
      ref={selectRef}
      onClick={() => {
        !disabledInput ? setIsOpen(!isOpen) : setIsOpen(false);
      }}
    >
      <div className={`w-full flex my-auto`}>
        <input
          ref={inputRef}
          type="text"
          className={`border h-12  text-gray-800 rounded-lg ${
            isOpen ? "border-primary" : "border-gray-700"
          } peer px-1  appearance-none text-[11px] sm:text-sm w-full bg-input disabled:bg-input text-input-foreground disabled:text-gray-500 outline-none focus:outline-0 transition-all `}
          value={searchQuery}
          placeholder=""
          onChange={(e) => {
            if (!disabledInput) {
              setSearchQuery(e.target.value);
              setIsOpen(true);
            }
          }}
          disabled={disabledInput}
        />
        {searchQuery ? (
          <div
            className="absolute inset-y-3 left-2 flex items-center mx-1 mb-1 cursor-pointer"
            onClick={() => {
              onChange(null);
              setSearchQuery("");
            }}
          >
            {!disabledInput ? <CiCircleRemove className={"w-8 h-8 text-primary "} /> : null}
          </div>
        ) : (
          <div className="absolute inset-y-3 left-0 flex items-center pointer-events-none border-r !border-gray-600 px-3">
            <SvgForSelect />
          </div>
        )}
      </div>
      {/* Floating Label */}
      <label
        className={`absolute right-3  flex font-normal transition-all text-input-foreground ${
          isOpen || searchQuery || dataValue ? "!bg-input text-input-foreground rounded-sm -top-1.5 text-[9.5px] px-1 h-fit w-fit" : "py-0.5 top-2.5 text-[15px] !text-gray-500"
        } w-fit peer-focus:-top-1.5  peer-focus:text-[9px] peer-focus:px-1 peer-focus:bg-input peer-focus:text-gray-900`}
      >
        {placeholder}
        {important && <div className={"mx-[1px] text-red-500 text-sm"}>*</div>}
      </label>
      {isOpen &&
        inputRef.current &&
        ReactDOM.createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: inputRef.current?.getBoundingClientRect().bottom + window.scrollY,
              left: inputRef.current?.getBoundingClientRect().left,
              width: inputRef.current?.getBoundingClientRect().width,
              zIndex: 9999,
            }}
            className="absolute w-full text-sm bg-input  border border-gray-600 rounded-lg mt-1 max-h-32 overflow-y-auto"
          >
            {options &&
              filteredOptions?.map((option, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-secondary hover:text-secondary-foreground cursor-pointer border-b !border-input-foreground text-input-foreground font-medium"
                  onClick={() => handleSelectOption(option.value)}
                >
                  {option.label}
                </div>
              ))}
          </div>,
          document.body
        )}
    </div>
  );
};

export default CustomSelect;
