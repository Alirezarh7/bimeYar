import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronLeft, FiCreditCard } from "react-icons/fi";
import { menuItems as sidebarMenuItems } from "./ProfileMenuItems";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const MobileHorizontalNav: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const horizontalMenuItems: NavItem[] = sidebarMenuItems.map((item) => {
    const href = item.href || item.primaryLink || "#";
    return {
      href: href,
      label: item.title,
      icon: item.icon,
    };
  });

  const isActive = (href: string): boolean => {
    return pathname.startsWith(href);
  };
  const personalInfoIsActive = pathname === "/profile/personal-info";

  return (
    <div
      dir="rtl"
      className="md:hidden w-full bg-white p-4 border-b border-gray-200"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gray-100 rounded-full shrink-0"></div>
          <div className="flex flex-col items-start">
            <p className="font-bold text-gray-800 text-base">علی قاسمی</p>
            <Link
              to="/profile/personal-info"
              className={`text-sm flex items-center transition-colors ${
                personalInfoIsActive
                  ? "text-blue-600 font-bold"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <span>اطلاعات شخصی</span>
              <FiChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-left">
          <div className="flex items-center justify-end gap-1.5 text-sm text-gray-600">
            <FiCreditCard />
            <span>کیف پول</span>
          </div>
          <p className="font-bold text-gray-800 mt-1">۰ تومان</p>
        </div>
      </div>

      {/* جدا کننده */}
      <hr className="my-4" />

      {/* نوار منوی افقی قابل اسکرول */}
      <div className="flex overflow-x-auto whitespace-nowrap space-x-4 space-x-reverse pb-2">
        {horizontalMenuItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              to={item.href}
              key={item.label}
              className={`flex flex-col items-center gap-2 min-w-[70px] py-1 transition-colors ${
                active
                  ? "text-blue-600 font-bold"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileHorizontalNav;
