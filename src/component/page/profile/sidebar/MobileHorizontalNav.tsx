import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiCreditCard, FiGrid } from "react-icons/fi";
import { menuItems as sidebarMenuItems } from "./ProfileMenuItems";
import BottomSheetModal from "../../../general/bottomShitModal/BottomSheetModal";
import {ProfileIcon} from "../../../../icons/Icon.tsx";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const MobileHorizontalNav: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const horizontalMenuItems: NavItem[] = sidebarMenuItems.map((item) => {
    const href = item.href || item.primaryLink || "#";
    return {
      href: href,
      label: item.title,
      icon: item.icon,
    };
  });

  const visibleItems = horizontalMenuItems.slice(0, 4);
  const modalItems = horizontalMenuItems.slice(4);

  const isActive = (href: string): boolean => {
    if (href === "/profile/insurances/purchased") {
      return pathname.startsWith("/profile/insurances");
    }
    if (href === "/profile/claims") {
      return pathname.startsWith("/profile/claims");
    }
    return pathname.startsWith(href);
  };
  const profile = JSON.parse(localStorage.getItem('profile') as any)
  return (
    <>
      <div
        dir="rtl"
        className="md:hidden w-full bg-card p-4 border-b  rounded-lg shadow-sm ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <ProfileIcon />
            <div className="flex flex-col gap-1.5 items-start">
              <p className="text-base text-foreground">{profile?.firstName + ' ' + profile?.lastName}</p>
            </div>
          </div>

          <div className="text-left text-foreground">
            <div className="flex items-center justify-end gap-1.5 text-sm ">
              <FiCreditCard />
              <span>کیف پول</span>
            </div>
            <p className="font-bold mt-1">۰ تومان</p>
          </div>
        </div>

        <hr className="my-4 text-primary" />

        <div className="flex justify-around overflow-x-auto whitespace-nowrap space-x-4 space-x-reverse pb-2">
          {visibleItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                to={item.href}
                key={item.label}
                className={`flex flex-col items-center gap-2 min-w-[70px] py-1 transition-colors ${
                  active
                    ? "text-primary font-bold"
                    : "text-gray-500 hover:text-primary"
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <span className="text-xs text-foreground">{item.label}</span>
              </Link>
            );
          })}

          {modalItems.length > 0 && (
            <div
              onClick={() => setIsModalOpen(true)}
              className="flex flex-col items-center gap-2 min-w-[70px] py-1 cursor-pointer text-gray-500 hover:text-primary transition-colors"
            >
              <div className="text-2xl">
                <FiGrid />
              </div>
              <span className="text-xs">سایر</span>
            </div>
          )}
        </div>
      </div>

      <BottomSheetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div dir="rtl" className="grid grid-cols-4 gap-4 text-center">
          {modalItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                to={item.href}
                key={item.label}
                onClick={() => setIsModalOpen(false)}
                className={`flex flex-col items-center justify-center gap-2 p-2 rounded-lg transition-colors h-24 ${
                  active
                    ? "text-primary font-bold "
                    : "text-gray-600 "
                }`}
              >
                <div className="text-3xl">{item.icon}</div>
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </BottomSheetModal>
    </>
  );
};

export default MobileHorizontalNav;
