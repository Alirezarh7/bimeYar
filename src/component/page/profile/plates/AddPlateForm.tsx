import React, { useState } from "react";
import CustomSelect from "../../../general/select/CustomSelect";

const PlateInput = () => (
  <div
    dir="ltr"
    className="flex items-center justify-center border-2 border-gray-300 rounded-md h-12 bg-white focus-within:border-primary transition-colors"
  >
    <input
      type="text"
      maxLength={2}
      className="w-10 text-center text-xl font-bold outline-none rounded-l-md  flex-1"
      placeholder="۳۰"
    />
    <select className="w-12 text-center text-xl font-bold outline-none appearance-none bg-transparent border-x-2 border-gray-300 h-full  flex-1">
      <option>ب</option>
      <option>ج</option>
      <option>د</option>
      <option>س</option>
      <option>ص</option>
      <option>ط</option>
      <option>ق</option>
      <option>ل</option>
      <option>م</option>
      <option>ن</option>
      <option>و</option>
      <option>ه</option>
      <option>ی</option>
    </select>
    <input
      type="text"
      maxLength={3}
      className="w-14 text-center text-xl font-bold outline-none flex-1"
      placeholder="۶۲۳"
    />
    <div className="h-full flex justify-around items-center px-2 text-white bg-blue-600 rounded-r-sm  flex-1">
      <span className="text-xs mt-1.5">ایران</span>
      <input
        type="text"
        maxLength={2}
        className="w-8 bg-transparent text-center text-xl font-bold outline-none mb-1"
        placeholder="۷۷"
      />
    </div>
  </div>
);

const PERSIAN_MONTHS = [
  { value: 1, label: "فروردین" },
  { value: 2, label: "اردیبهشت" },
  { value: 3, label: "خرداد" },
  { value: 4, label: "تیر" },
  { value: 5, label: "مرداد" },
  { value: 6, label: "شهریور" },
  { value: 7, label: "مهر" },
  { value: 8, label: "آبان" },
  { value: 9, label: "آذر" },
  { value: 10, label: "دی" },
  { value: 11, label: "بهمن" },
  { value: 12, label: "اسفند" },
];

const generateDays = () => {
  return Array.from({ length: 31 }, (_, i) => ({
    value: i + 1,
    label: (i + 1).toString(),
  }));
};

const generateYears = () => {
  const currentYear = 1404;
  return Array.from({ length: 100 }, (_, i) => ({
    value: currentYear - i,
    label: (currentYear - i).toString(),
  }));
};

const dayOptions = generateDays();
const monthOptions = PERSIAN_MONTHS;
const yearOptions = generateYears();

const AddPlateForm = ({ onClose }: { onClose: () => void }) => {
  const [birthDate, setBirthDate] = useState<{
    day?: number;
    month?: number;
    year?: number;
  }>({
    day: undefined,
    month: undefined,
    year: undefined,
  });

  const handleDateChange = (field: "day" | "month" | "year", value: number) => {
    setBirthDate((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="flex flex-col h-full">
      <div className="flex-1 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          <div>
            <label className="text-sm font-medium  text-card-foreground mb-1 block">
              پلاک
            </label>
            <PlateInput />
          </div>
          <div>
            <label
              htmlFor="plateName"
              className="text-sm font-medium  text-card-foreground mb-1 block"
            >
              نام پلاک
            </label>
            <input
              id="plateName"
              type="text"
              placeholder="مثال: پژو ۲۰۷ سفید"
              className="w-full p-3 h-12 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-[var(--muted)]"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium  text-card-foreground mb-1 block">
            صاحب پلاک
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="نام"
              className="p-3 h-12 border border-gray-300 text-card-foreground rounded-lg  placeholder:text-[var(--muted)]"
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              className="p-3 h-12 border border-gray-300 text-card-foreground rounded-lg placeholder:text-[var(--muted)]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="nationalId"
            className="text-sm font-medium  text-card-foreground mb-1 block"
          >
            کد ملی صاحب پلاک *
          </label>
          <input
            id="nationalId"
            type="text"
            className="w-full p-3 h-12 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="text-sm font-medium  text-card-foreground mb-1 block">
            تاریخ تولد
          </label>
          <div className="grid grid-cols-3 gap-4">
            <CustomSelect
              options={dayOptions}
              placeholder="روز *"
              valueID={birthDate.day}
              onChange={(value: number) => handleDateChange("day", value)}
            />
            <CustomSelect
              options={monthOptions}
              placeholder="ماه *"
              valueID={birthDate.month}
              onChange={(value: number) => handleDateChange("month", value)}
            />
            <CustomSelect
              options={yearOptions}
              placeholder="سال *"
              valueID={birthDate.year}
              onChange={(value: number) => handleDateChange("year", value)}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium  text-card-foreground">
            جنسیت
          </label>
          <div className="flex gap-6 mt-2 p-3">
            <label className="flex items-center gap-2 cursor-pointer   text-card-foreground">
              <input
                type="radio"
                name="gender"
                className="form-radio text-card-foreground h-4 w-4 focus:ring-primary"
              />{" "}
              زن
            </label>
            <label className="flex items-center gap-2 cursor-pointer   text-card-foreground">
              <input
                type="radio"
                name="gender"
                className="form-radio   text-card-foreground h-4 w-4 focus:ring-primary"
              />{" "}
              مرد
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 pb-8 border-t grid grid-cols-2 gap-4 sticky bottom-0 bg-card -mx-6 px-6 py-4">
        <button
          type="button"
          onClick={onClose}
          className="py-3 px-4 font-semibold text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
        >
          انصراف
        </button>
        <button
          type="submit"
          className="py-3 px-4 font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
        >
          تایید
        </button>
      </div>
    </form>
  );
};

export default AddPlateForm;
