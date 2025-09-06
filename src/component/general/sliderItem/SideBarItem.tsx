import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface IProps {
  href?: string;
  icon?: any;
  title?: string;
  dropdownItems?: { href: string; title: string }[];
}

const SideBarItem = ({ href, icon, title, dropdownItems = [] }: IProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full">
      {href ? (
        <Link
          to={href}
          className="w-full cursor-pointer hover:bg-gray-400 py-3 border-b border-gray-200 grid grid-cols-5 items-center"
        >
          <div className="col-span-1 mx-auto">{icon}</div>
          <div className="col-span-4">{title}</div>
        </Link>
      ) : (
        <div className="w-full">
          {/* هدر دراپ‌داون */}
          <div
            className="cursor-pointer hover:bg-gray-400 py-3 border-b border-gray-300 w-full grid grid-cols-5 items-center"
            onClick={toggleDropdown}
          >
            <div className="col-span-1 mx-auto">{icon}</div>
            <div className="col-span-4 flex justify-between">
              {title}
              {isDropdownOpen ? (
                <RiArrowDropUpLine className="mx-2 h-6 w-6 border-r border-gray-500" />
              ) : (
                <RiArrowDropDownLine className="mx-2 h-6 w-6 border-r border-gray-500" />
              )}
            </div>
          </div>
          <div
            ref={dropdownRef}
            className={`transition-all duration-500 overflow-hidden ${
              isDropdownOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-1 flex flex-col bg-gray-200 ">
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="py-2 hover:bg-gray-400 border-b border-gray-300 pr-10 "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBarItem;
