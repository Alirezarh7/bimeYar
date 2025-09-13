import {useState, useEffect, useRef} from 'react';
import {IoMdArrowDropdown} from 'react-icons/io';
import {Link} from 'react-router-dom';
import type {Tprofile} from "../../../types/generalType.ts";
import {Info, LogOut, ShieldPlus, UserCog, Wallet} from "lucide-react";

interface IProps {
  profile: Tprofile
}

const CustomDropDown = ({profile}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const dataShow = [
    {icon: <Wallet className={'text-primary'}/>, title: 'کیف پول' , to: '/profile'},
    {icon: <ShieldPlus className={'text-primary'} />, title: 'تمدید بیمه', to: '/profile'},
    {icon: <Info className={'text-primary'} />, title: 'اطلاعات کاربری', to: '/profile'},
    {icon: <LogOut className={'text-primary'} />, title: 'خروج'},
  ]

  return (
    <div className="max-lg:hidden flex items-center justify-start mx-2">
      <div ref={dropdownRef}>
        <button
          type="button"
          className="w-fit   ml-1 h-10 items-center gap-x-2 text-sm font-medium rounded-lg border border-primary bg-[var(--card)] text-[var(--foreground)] shadow-sm"
          onClick={() => setIsOpen(!isOpen)}>
          <div className="flex justify-around w-full ">
            <strong className="font-weight-bold text-[var(--foreground)] px-2 ">
              {profile?.firstName} {profile?.lastName}
            </strong>
            <div className=" border-r border-primary p-1 ">
              <IoMdArrowDropdown className={''}/>
            </div>
          </div>
        </button>
        <div
          className={`${!isOpen ? 'hidden' : ''} w-48 mt-5 py-2 p-2 absolute left-20 rounded-md border border-[var(--primary)] shadow-lg bg-[var(--card)]`}>
          <div className='flex items-center justify-between border-b border-primary p-3'>
            <div className={'border border-[var(--primary)] rounded-full text-[var(--foreground)] p-2'}>
              <UserCog/>
            </div>
            <div className={'text-[var(--foreground)]'}>
              {profile?.firstName} {profile?.lastName}
            </div>
          </div>
          <div className={'mt-4'}>
            {dataShow.map((item,index) => {
              if (item.to) {
                return (
                  <Link
                    className="flex items-center mx-auto gap-x-5 py-2 px-3 rounded-lg text-sm text-[var(--foreground)] hover:bg-[var(--hover)] focus:outline-none focus:bg-gray-100"
                    to={item.to}
                    onClick={() => setIsOpen(!isOpen)}
                    title={item.title}>
                    {item.icon}
                    {item.title}
                    {index === 0 ?
                      <p>
                        { profile.wallet.balance + ' ' + 'ریال'}
                      </p>
                      :null}
                  </Link>
                )
              } else {
                return (
                  <button
                    className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-[var(--foreground)] hover:bg-[var(--hover)] focus:outline-none focus:bg-gray-100"
                    onClick={() => {
                      localStorage.clear()
                      window.dispatchEvent(new Event('auth:logout'));
                    }}>
                    {item.icon}
                    {item.title}
                  </button>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDropDown;
