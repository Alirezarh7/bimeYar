"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiCreditCard, FiAward } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./ProfileMenuItems"; // مسیر فایل منو را چک کنید
import type { ParentItem } from "./ProfileMenuItems"; // مسیر فایل منو را چک کنید

const ProfileSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isActivePath = (href: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const personalInfoIsActive = pathname === "/profile/personal-info";

  const isParentActive = (item: ParentItem) => {
    if (!item.children) return false;
    return item.children.some((c) => isActivePath(c.href));
  };

  useEffect(() => {
    const activeParent = menuItems.find((item) => isParentActive(item));
    setExpanded((currentExpandedState) => {
      if (activeParent) {
        if (currentExpandedState[activeParent.index]) {
          return currentExpandedState;
        }
        return { [activeParent.index]: true };
      } else {
        if (Object.keys(currentExpandedState).length === 0) {
          return currentExpandedState;
        }
        return {};
      }
    });
  }, [pathname]);

  return (
    <div
      dir="rtl"
      className="w-[280px] bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col gap-1 text-gray-800"
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-2">
        <div className="w-20 h-20 bg-gray-100 rounded-full mb-3">
          {/* You can place an <img /> tag here */}
        </div>
        <h3 className="font-bold text-lg">علی قاسمی</h3>
        <Link
          to="/profile/personal-info"
          className={`flex items-center gap-1 text-sm transition-colors ${
            personalInfoIsActive
              ? "text-blue-700 font-semibold"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <span>اطلاعات شخصی</span>
          <FiChevronLeft />
        </Link>
      </div>

      <hr className="my-2" />

      {/* Wallet Section */}
      <div className="flex items-center justify-between px-2 py-2.5">
        <div className="flex items-center gap-3 font-medium">
          <FiCreditCard className="text-xl" />
          <span>کیف پول</span>
        </div>
        <span className="font-semibold">۰ تومان</span>
      </div>

      <hr className="my-2" />

      {/* Menu Items */}
      <div className="flex flex-col gap-1">
        {menuItems.map((item) =>
          item.children ? (
            <div key={item.index}>
              <div
                className={`flex items-center justify-between gap-3 px-2 py-2.5 rounded-lg cursor-pointer transition-colors ${
                  isParentActive(item) ? "font-bold" : "hover:bg-gray-100"
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
              <AnimatePresence>
                {expanded[item.index] && (
                  <motion.div
                    key={item.index}
                    initial={false}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="pr-6 overflow-hidden"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`flex items-center gap-3 text-sm py-2 px-3 rounded-md my-1 transition-colors ${
                          isActivePath(child.href)
                            ? "bg-gray-100 font-semibold"
                            : "text-gray-600 hover:bg-gray-100"
                        } ${child.specialClass || ""}`}
                      >
                        <span className="text-lg opacity-80">{child.icon}</span>
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={item.index}
              to={item.href || "#"}
              className={`flex items-center gap-3 px-2 py-2.5 rounded-lg transition-colors ${
                isActivePath(item.href || "")
                  ? "font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          )
        )}
      </div>

      <hr className="my-2" />

      {/* Azki Club Section */}
      <div className="flex items-center justify-between px-2 py-2.5 rounded-lg hover:bg-gray-100 cursor-pointer">
        <div className="flex items-center gap-3 font-medium">
          <FiAward className="text-xl" />
          <span>ازکی کلاب</span>
        </div>
        <div className="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-sm">💎</span>
          <span>۳۰۰</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
