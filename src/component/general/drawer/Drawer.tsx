import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Drawer = ({ isOpen, onClose, children, title }: DrawerProps) => {
  const drawerVariants = {
    open: { x: "-60%" },
    closed: { x: "0" }, // از راست به چپ باز می‌شود
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            dir="rtl"
            className="fixed top-0 left-0 h-full w-full max-w-md bg-gray-50 z-50 shadow-2xl flex flex-col"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-white">
              <h2 className="text-lg font-bold text-gray-800">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <FiX className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
