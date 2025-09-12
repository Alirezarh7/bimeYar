import React from "react";
import {
  FiUsers,
  FiClock,
  FiCheckSquare,
  FiRefreshCw,
  FiClipboard,
  FiUser,
  FiFileText,
  FiCalendar,
  FiGift,
} from "react-icons/fi";

export type ChildItem = {
  name: string;
  icon: React.ReactNode;
  href: string;
  specialClass?: string;
};

export type ParentItem = {
  index: number;
  title: string;
  icon: React.ReactNode;
  href?: string;
  children?: ChildItem[];
  primaryLink?: string;
};

export const menuItems: ParentItem[] = [
  {
    index: 0,
    title: "بیمه‌های من",
    primaryLink: "/profile/insurances/purchased",
    icon: <FiUsers />,
    children: [
      {
        name: "در انتظار تمدید",
        icon: <FiClock />,
        href: "/profile/insurances/pending",
      },
      {
        name: "بیمه‌های خریداری‌شده",
        icon: <FiCheckSquare />,
        href: "/profile/insurances/purchased",
      },
      {
        name: "بیمه‌های ناتمام",
        icon: <FiRefreshCw />,
        href: "/profile/insurances/incomplete",
        // specialClass: "text-blue-600",
      },
    ],
  },
  {
    index: 1,
    title: "پلاک‌های من",
    icon: <FiClipboard />,
    href: "/profile/plates",
  },
  {
    index: 2,
    title: "مسافران من",
    icon: <FiUsers />,
    href: "/profile/travelers",
  },
  {
    index: 3,
    title: "خسارت‌ها",
    icon: <FiUser />,
    primaryLink: "/profile/claims",
    children: [
      {
        name: "خسارت جدید",
        icon: <FiUser />,
        href: "/profile/claims/supplementary",
      },
      {
        name: "لیست خسارت‌ها",
        icon: <FiUser />,
        href: "/profile/claims/vehicle-claims",
      },
    ],
  },
  {
    index: 4,
    title: "تراکنش‌ها",
    icon: <FiFileText />,
    href: "/profile/transactions",
  },
  {
    index: 5,
    title: "یادآوری‌ها",
    icon: <FiCalendar />,
    href: "/profile/reminders",
  },
  {
    index: 6,
    title: "تخفیف‌های من",
    icon: <FiGift />,
    href: "/profile/discounts",
  },
];
