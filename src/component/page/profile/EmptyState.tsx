import React from "react";
// 1. ایمپورت آیکون‌های مورد نیاز
import { FiChevronUp, FiPlus } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";

// تعریف تایپ‌ها (بدون تغییر)
interface EmptyStateProps {
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  buttonText,
  onButtonClick,
  icon = <IoWalletOutline size={24} />, // 2. آیکون کیف پول به عنوان پیش‌فرض
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 rounded-lg bg-[var(--card)] text-[var(--card-foreground)] shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-x-3">
          {/* 3. استفاده از آیکون */}
          <span className="text-gray-500">{icon}</span>
          <h2 className="font-bold text-lg">{title}</h2>
        </div>
        <button className="text-gray-500">
          <FiChevronUp size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-6 py-10">
        <p className="text-md text-gray-500">{message}</p>

        <button
          onClick={onButtonClick}
          className="flex items-center justify-center gap-x-2 cursor-pointer rounded-lg border border-[var(--primary)] px-6 py-2 text-sm font-semibold text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300"
        >
          {/* آیکون + */}
          <FiPlus size={20} strokeWidth={3} />
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
