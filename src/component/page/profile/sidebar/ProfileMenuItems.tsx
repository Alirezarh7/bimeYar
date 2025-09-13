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
    icon: <FiUsers className={'text-[var(--primary)]'} />,
    children: [
      {
        name: "در انتظار تمدید",
        icon: <FiClock className={'text-[var(--primary)]'} />,
        href: "/profile/insurances/pending",
      },
      {
        name: "بیمه‌های خریداری‌شده",
        icon: <FiCheckSquare className={'text-[var(--primary)]'} />,
        href: "/profile/insurances/purchased",
      },
      {
        name: "بیمه‌های ناتمام",
        icon: <FiRefreshCw className={'text-[var(--primary)]'} />,
        href: "/profile/insurances/incomplete",
        // specialClass: "text-blue-600",
      },
    ],
  },
  {
    index: 1,
    title: "پلاک‌های من",
    icon: <FiClipboard className={'text-[var(--primary)]'} />,
    href: "/profile/plates",
  },
  {
    index: 2,
    title: "مسافران من",
    icon: <FiUsers className={'text-[var(--primary)]'} />,
    href: "/profile/travelers",
  },
  {
    index: 3,
    title: "خسارت‌ها",
    icon: <FiUser className={'text-[var(--primary)]'} />,
    primaryLink: "/profile/claims",
    children: [
      {
        name: "خسارت جدید",
        icon: <FiUser className={'text-[var(--primary)]'} />,
        href: "/profile/claims/supplementary",
      },
      {
        name: "لیست خسارت‌ها",
        icon: <FiUser className={'text-[var(--primary)]'} />,
        href: "/profile/claims/vehicle-claims",
      },
    ],
  },
  {
    index: 4,
    title: "تراکنش‌ها",
    icon: <FiFileText className={'text-[var(--primary)]'} />,
    href: "/profile/transactions",
  },
  {
    index: 5,
    title: "یادآوری‌ها",
    icon: <FiCalendar className={'text-[var(--primary)]'} />,
    href: "/profile/reminders",
  },
  {
    index: 6,
    title: "تخفیف‌های من",
    icon: <FiGift className={'text-[var(--primary)]'} />,
    href: "/profile/discounts",
  },
];
