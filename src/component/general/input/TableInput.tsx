import React, {type ChangeEvent, useRef } from 'react';

interface IProps {
  value: number;
  onChange: (value: number) => void;
}

const NumberInput = ({ value, onChange }: IProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    } else {
      onChange(0); // یا مقدار دلخواه
    }
  };

  return (
      <div className="flex">
        <div className="flex flex-col">
          <button
              type="button"
              onClick={() => onChange(value + 1)}
              className="size-6 justify-center items-center gap-x-2 text-sm font-medium  border-t border-b border-r bg-white"
          >
            +
          </button>
          <button
              type="button"
              onClick={() => onChange(value - 1)}
              className="size-6 justify-center items-center gap-x-2 text-sm font-medium border-b border-r bg-white"
          >
            -
          </button>
        </div>
        <div className="w-fit min-w-16 pb-2 ">
        <input
            onKeyDown={handleKeyDown}
            ref={inputRef}
            className=" w-full h-12 text-black border border-gray-300 bg-transparent rounded-l-lg  text-center focus:ring-0 appearance-none "
            type="number"
            value={value}
            onChange={handleInputChange}
        />
        </div>
      </div>
  );
};

export default NumberInput;
