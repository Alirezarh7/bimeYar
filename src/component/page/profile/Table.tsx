import React from "react";
import { FiChevronUp } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";
// تعریف تایپ‌ها برای ستون‌ها و پراپرتی‌های کامپوننت
export interface Column {
  key: string;
  label: string;
  flex?: number;
}

// استفاده از Generic Type برای داده‌ها
// هر آیتم داده باید حتما یک شناسه منحصر به فرد داشته باشد
interface TableProps<T extends { id: number | string }> {
  title: string;
  columns: Column[];
  data: T[];
  renderCell: (item: T, key: string) => React.ReactNode;
}

// کامپوننت‌های آیکون (بدون تغییر)

// تعریف کامپوننت به عنوان یک Generic Function Component
const Table = <T extends { id: number | string }>({
  title,
  columns,
  data,
  renderCell,
}: TableProps<T>) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 rounded-lg bg-[var(--card)] text-[var(--card-foreground)] shadow-sm">
      {/* بخش عنوان جدول */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-x-3">
          <span className="text-gray-500 dark:text-gray-400">
            <IoCarSportOutline fontSize={24} />
          </span>
          <h2 className="font-bold text-lg">{title}</h2>
        </div>
        <button className="text-[var(--muted)]">
          <FiChevronUp />
        </button>
      </div>

      {/* محتوای جدول */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* هدر ستون‌ها */}
          <div className="flex w-full text-right text-sm text-gray-500 border-b border-[var(--hover)] pb-3">
            {columns.map((col) => (
              <div
                key={col.key}
                style={{ flex: col.flex || 1 }}
                className="px-2"
              >
                {col.label}
              </div>
            ))}
          </div>

          {/* ردیف‌های داده */}
          <div>
            {data.map((item) => (
              <div
                key={item.id}
                className="flex w-full items-center text-right text-sm py-4 border-b border-[var(--hover)] last:border-b-0"
              >
                {columns.map((col) => (
                  <div
                    key={`${item.id}-${col.key}`}
                    style={{ flex: col.flex || 1 }}
                    className="px-2"
                  >
                    {renderCell(item, col.key)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
