"use client";
import React, { useState } from "react";
import { FiChevronLeft, FiCreditCard, FiAward } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./ProfileMenuItems";
import type { ParentItem } from "./ProfileMenuItems";

const ProfileSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const initialExpanded: Record<number, boolean> = {};
  const activeParent = menuItems.find((item) => {
    if (!item.children) return false;
    return item.children.some((c) => c.href === pathname);
  });
  if (activeParent) {
    initialExpanded[activeParent.index] = true;
  }

  const [expanded, setExpanded] =
    useState<Record<number, boolean>>(initialExpanded);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isActivePath = (href: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const personalInfoIsActive = pathname === "/profile/personal-info";

  const isParentActive = (item: ParentItem) => {
    if (!item.children) return isActivePath(item.href || "");
    return item.children.some((c) => isActivePath(c.href));
  };

  return (
    <div
      dir="rtl"
      className="w-[280px] bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col gap-1 text-gray-800"
    >
      <div className="flex flex-col items-center">
        {/* <div className="w-20 h-20 bg-gray-100 rounded-full mb-3"></div> */}
        <img
          src={"/new-profile.svg"}
          className="w-28 h-28 mb-3"
          alt="profile"
        />

        <h3 className="text-md my-2">علی قاسمی</h3>
        <Link
          to="/profile/personal-info"
          className={`flex items-center gap-1 text-sm transition-colors ${
            personalInfoIsActive
              ? "text-primary font-semibold"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <span>اطلاعات شخصی</span>
          <FiChevronLeft />
        </Link>
      </div>

      {/* <hr className="my-2" /> */}

      <div className="flex items-center justify-between px-2 py-2.5">
        <div className="flex items-center gap-2 font-medium">
          <FiCreditCard className="text-xl text-green-500 font-bold" />
          <span>کیف پول</span>
        </div>
        <span className="font-semibold">۰ تومان</span>
      </div>

      <hr className="my-2 text-gray-200" />

      <div className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <div key={`menu-${item.index}`}>
            {item.children ? (
              <>
                <div
                  className={`flex items-center justify-between gap-3 px-2 py-2.5 rounded-lg transition-colors text-[14px] font-medium cursor-pointer ${
                    isParentActive(item)
                      ? "font-bold bg-gray-50"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => toggleExpand(item.index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span> {item.title}
                  </div>
                  <FiChevronLeft
                    className={`transition-transform text-gray-500 ${
                      expanded[item.index] ? "-rotate-90" : ""
                    }`}
                  />
                </div>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                    expanded[item.index] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 pr-6">
                    {item.children.map((child) => (
                      <Link
                        key={`child-${child.name}-${child.href}`}
                        to={child.href}
                        className={`flex items-center gap-3 text-[13px] py-0.5 px-3 rounded-md mt-3 mb-2 transition-colors ${
                          isActivePath(child.href)
                            ? "text-primary"
                            : "text-gray-600 hover:text-gray-800"
                        } ${child.specialClass || ""}`}
                      >
                        <span
                          className={`text-lg opacity-80 ${
                            isActivePath(child.href) ? "text-primary" : ""
                          }`}
                        >
                          {child.icon}
                        </span>
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Link
                to={item.href || "#"}
                className={`flex items-center justify-between gap-3 px-2 py-2.5 rounded-lg transition-colors text-[14px] font-medium ${
                  isParentActive(item)
                    ? "font-bold bg-gray-50 text-primary"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span> {item.title}
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <hr className="my-2" />

      <div className="flex items-center justify-between px-2 py-2.5 rounded-lg hover:bg-gray-100 cursor-pointer">
        <div className="flex items-center gap-3 font-medium">
          <FiAward className="text-xl" />
          <span>بیمه یار کلاب</span>
        </div>
        <div className="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-sm">💎</span>
          <span>۳۰۰</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileSidebar);
