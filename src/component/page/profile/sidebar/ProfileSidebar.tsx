"use client";
import React, { useState } from "react";
import { FiChevronLeft, FiCreditCard, FiAward } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./ProfileMenuItems";
import type { ParentItem } from "./ProfileMenuItems";
import { ProfileIcon } from "../../../../icons/Icon.tsx";

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

  const isParentActive = (item: ParentItem) => {
    if (!item.children) return isActivePath(item.href || "");
    return item.children.some((c) => isActivePath(c.href));
  };
  const profile = JSON.parse(localStorage.getItem("profile") as any);
  return (
    <div
      dir="rtl"
      className="w-[280px] bg-[var(--card)] border border-[var(--primary)] rounded-xl p-4 shadow-sm flex flex-col gap-1 text-gray-800"
    >
      <div className="flex flex-col items-center">
        {/* <img
          src={"/new-profile.svg"}
          className="w-20 h-20 mb-3"
          alt="profile"
        /> */}
        {/* <div className="w-20 h-20 bg-gray-100 rounded-full mb-3"></div> */}
        <Link to={"/profile"}>
          <ProfileIcon />
        </Link>

        <h3 className="text-md text-[var(--foreground)]  my-2">
          {profile?.firstName + " " + profile?.lastName}
        </h3>
      </div>
      <div className="flex items-center justify-between px-2 py-2.5 text-[var(--foreground)]">
        <div className="flex items-center gap-2 font-medium">
          <FiCreditCard className="text-xl text-[var(--primary)] font-bold" />
          <span>کیف پول</span>
        </div>
        <span className="font-semibold">0{profile?.wallet?.balance} تومان</span>
      </div>
      <hr className="my-2 text-[var(--primary)]" />
      <div className="flex flex-col gap-1 text-[var(--foreground)]">
        {menuItems.map((item) => (
          <div key={`menu-${item.index}`}>
            {item.children ? (
              <>
                <div
                  className={`flex hover:bg-[var(--hover)] items-center justify-between gap-3 px-2 py-2.5 rounded-lg transition-colors text-[14px] font-medium cursor-pointer ${
                    isParentActive(item)
                      ? "font-bold bg-[var(--hover)]"
                      : "hover:bg-[var(--hover)]"
                  }`}
                  onClick={() => toggleExpand(item.index)}
                >
                  <div className="flex items-center gap-3 text-[var(--foreground)]">
                    <span className="text-xl ">{item.icon}</span> {item.title}
                  </div>
                  <FiChevronLeft
                    className={`transition-transform  ${
                      expanded[item.index] ? "-rotate-90" : ""
                    }`}
                  />
                </div>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                    expanded[item.index] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 pr-4">
                    {item.children.map((child) => (
                      <Link
                        key={`child-${child.name}-${child.href}`}
                        to={child.href}
                        className={`flex items-center gap-3 py-1.5 text-[12px] px-3 rounded-md my-1 transition-colors ${
                          isActivePath(child.href)
                            ? "text-primary"
                            : "text-[var(--foreground)] hover:bg-[var(--hover)]"
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
                    : "hover:bg-[var(--hover)]"
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
      <hr className="my-2 text-[var(--primary)]" />

      <div className="flex items-center justify-between px-2 py-2.5 rounded-lg hover:bg-[var(--hover)] text-foreground cursor-pointer">
        <div className="flex items-center gap-3 font-medium">
          <FiAward className="text-xl text-primary" />
          <span>بیمه یار کلاب</span>
        </div>
        <div className="text-foreground border border-primary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-sm">💎</span>
          <span>۳۰۰</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileSidebar);
