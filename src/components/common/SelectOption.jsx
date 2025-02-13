import React, { useEffect, useRef, useState } from "react";
import { OPTION_ICON } from "./Icon";
import { MOVE_SIZE_DATA } from "../../utils/helper";

const SelectOption = ({
  name,
  value,
  placeholder,
  onChange,
  error,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef}>
      <div className={`relative ${className}`}>
        <div
          className={`h-10 py-2.5 px-[18px] cursor-pointer bg-white outline-none font-normal text-base leading-125 text-dark-blue text-opacity-70 w-full flex justify-between items-center`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{value || placeholder}</span>
          <span className="ml-2">
            <OPTION_ICON />
          </span>
        </div>
        {isOpen && (
          <div className="absolute mt-1 w-full border border-light-sky rounded-lg overflow-hidden bg-white shadow-lg z-10">
            {MOVE_SIZE_DATA.map((option, index) => (
              <div
                key={index}
                className={`pl-3 mb-[10px] cursor-pointer hover:bg-off-green duration-300 ease-linear flex flex-col ${
                  index === 0 ? "mt-[10px]" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                <p className="font-normal text-base leading-125 text-dark-blue text-opacity-70  max-sm:line-clamp-1 w-full">
                  {option}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectOption;
