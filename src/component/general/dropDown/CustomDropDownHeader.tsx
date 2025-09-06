import {useState, useEffect, useRef} from 'react';
import {TbLogout} from 'react-icons/tb';
import useManageUserData from "../../../hooks/useManageUserData.ts";

import {shareData} from "../../../service/SSO/shareData.ts";
import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri";



const CustomDropDownHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const {fullName} = useManageUserData()
  const automaticlyLogout = async () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'https://auth.haj.ir/Account/Logout?';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const Token = localStorage.getItem(shareData.ORGANIZATION_STORAGE_KEY2);
  const tokenObj = Token ? JSON.parse(Token) : null;
  const hasFetched = useRef(false);

  useEffect(() => {
    if (tokenObj && !hasFetched.current) {
      hasFetched.current = true;
    }
  }, [ tokenObj]);


  return (
    <>
      <div className="z-10 ">
        <div ref={dropdownRef}>
          <button
            type="button"
            className="w-fit h-10 items-center text-sm font-medium rounded-lg border border-goldColor bg-white text-gray-800 shadow-sm hover:bg-gray-50"
            onClick={toggleDropdown}>
            <div className="flex justify-around w-full items-center ">
              <strong className="font-weight-bold text-gray-800 px-4">
                {fullName}
              </strong>
              <div className="border-r p-1 border-goldColor">
                {isOpen ? (
                  <RiArrowDropUpLine className="h-6 w-6 text-goldColor "/>
                ) : (
                  <RiArrowDropDownLine className="h-6 w-6 text-goldColor "/>
                )}
              </div>
            </div>
          </button>
          <div
            className={`${!isOpen ? 'hidden' : ''} w-36 mt-2 py-2 p-2 absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
            <button
              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              onClick={automaticlyLogout}>
              <TbLogout className={'text-goldColor'}/>
              خروج
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDropDownHeader;
