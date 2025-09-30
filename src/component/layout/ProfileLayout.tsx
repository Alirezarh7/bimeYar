import React from "react";
import ProfileSidebar from "../page/profile/sidebar/ProfileSidebar";
import MobileHorizontalNav from "../page/profile/sidebar/MobileHorizontalNav";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

type ProfileLayoutProps = {
  children?: React.ReactNode;
  pageKey?: string; // ۱. یک پراپرتی برای دریافت کلید منحصر به فرد صفحه اضافه می‌کنیم
};

// ۲. همان Variants قبلی را اینجا تعریف می‌کنیم
const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    // انیمیشن خروج
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, pageKey }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="hidden shrink-0 md:block p-1 pb-1.5">
        <ProfileSidebar />
      </aside>

      <div className="flex flex-col w-full p-2">
        <div className="md:hidden">
          <MobileHorizontalNav />
        </div>

        {/* ۳. AnimatePresence را دور محتوای اصلی قرار می‌دهیم */}
        <AnimatePresence mode="wait">
          {/* - تگ main را به motion.main تبدیل می‌کنیم
            - کلید منحصر به فرد را به آن پاس می‌دهیم
            - Variants انیمیشن را اعمال می‌کنیم
          */}
          <motion.main
            key={pageKey}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex-1 p-2"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfileLayout;
