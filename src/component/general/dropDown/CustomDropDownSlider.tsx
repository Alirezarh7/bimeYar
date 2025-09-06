import {useRef, useEffect, type JSX} from "react";
import {useLocation, Link} from "react-router-dom";
import {RiArrowDropDownLine, RiArrowDropLeftLine, RiArrowDropUpLine} from "react-icons/ri";


interface IProps {
    id: string;
    href: string;
    icon: JSX.Element;
    title: string;
    dropdownItems: { href: string; title: string }[];
    setSidebarOpen: (isOpen: boolean) => void;
    openDropdownId: string | null;
    setOpenDropdownId: (id: string | null) => void;
}

const CustomDropDownSlider = ({href, icon, title, dropdownItems = [], setSidebarOpen , openDropdownId ,setOpenDropdownId ,id}: IProps) => {

    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const isDropdownOpen = openDropdownId === id;

    const toggleDropdown = () => {
        if (isDropdownOpen) {
            setOpenDropdownId(null);
        } else {
            setOpenDropdownId(id);
        }
    };

    useEffect(() => {
        const isInDropdown = dropdownItems.some(item => item.href === location.pathname);
        if (isInDropdown) {
            setOpenDropdownId(id);
        }
    }, [location.pathname]);

    return (
        <div className="w-full text-sm">
            {
                href ? (
                <Link
                    to={href}
                    className={`w-full  cursor-pointer ${  location.pathname === href ? 'bg-blue-100' : 'bg-white'} py-1 border-b border-goldColor flex justify-between items-center`}
                >
                    <div className="text-goldColor pr-3">{icon}</div>
                    <div className="text-goldColor">{title}</div>
                    <RiArrowDropLeftLine  className="h-6 w-6  text-goldColor border-r border-goldColor"/>
                </Link>
            ) : (
                <div className="w-full font-normal ">

                    <div
                        className={`w-full  cursor-pointer ${isDropdownOpen ? 'bg-blue-100' : 'bg-white'} py-1 border-b border-goldColor flex justify-between items-center`}
                        onClick={toggleDropdown}
                    >
                        <div className="text-goldColor pr-3">{icon}</div>
                        <div className="text-goldColor">{title}</div>
                        {isDropdownOpen ? (
                            <RiArrowDropUpLine className="h-6 w-6  text-goldColor border-r border-goldColor"/>
                        ) : (
                            <RiArrowDropDownLine className="h-6 w-6 text-goldColor border-r border-goldColor"/>
                        )}
                    </div>
                    {/* آیتم‌های داخل دراپ‌داون */}
                    <div
                        ref={dropdownRef}
                        className={` transition-all duration-500 overflow-hidden ${
                            isDropdownOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="flex flex-col  bg-white rounded-b-md">
                            {dropdownItems.map((item, index) => {
                                const isActive = location.pathname === item.href;
                                return (
                                    <Link
                                        key={index}
                                        to={item.href}
                                        className={` text-sm py-1 hover:bg-primary  border-b ${
                                            isActive ? 'bg-blue-200' : 'bg-white'
                                        } border-goldColor pr-10  text-gray-700`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomDropDownSlider;
