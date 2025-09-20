import React, { useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
  title: string;
}

// ۱. تعریف Variants برای انیمیشن‌ها
// انیمیشن پس‌زمینه (سیاه)
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// انیمیشن خود مودال (حرکت از پایین و fade)
const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30, // شروع از ۳۰ پیکسل پایین‌تر
  },
  visible: {
    opacity: 1,
    y: 0, // حرکت به جای اصلی
    transition: {
      type: "spring", // افکت فنری برای حس بهتر
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    y: 30, // هنگام خروج به پایین برمی‌گردد
  },
};

const ModalAnimation = ({ isOpen, onDismiss, children, title }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onDismiss}
          />

          {/* Modal Panel */}
          <motion.div
            dir="rtl"
            className="relative mx-4 w-full max-w-lg rounded-2xl bg-[var(--card)] shadow-xl flex flex-col max-h-[90vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
              <h2 className="text-lg font-bold text-[var(--card-foreground)]">
                {title}
              </h2>
              <button
                onClick={onDismiss}
                className="p-2 rounded-full text-[var(--card-foreground)] hover:bg-[var(--hover)] transition-colors"
                aria-label="بستن مودال"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div
              className="p-6 flex-1 overflow-y-auto 
                         scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalAnimation;
