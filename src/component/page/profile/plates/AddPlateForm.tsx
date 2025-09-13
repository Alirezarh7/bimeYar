import React from "react";
import IranianPlate from "./IranianPlate"; // کامپوننت پلاک

// کامپوننت ورودی سفارشی برای پلاک
const PlateInput = () => (
  <div
    dir="ltr"
    className="flex items-center justify-center border-2 border-gray-300 rounded-md h-12 bg-white focus-within:border-primary transition-colors"
  >
    <input
      type="text"
      maxLength={2}
      className="w-10 text-center text-xl font-bold outline-none"
    />
    <select className="w-12 text-center text-xl font-bold outline-none appearance-none bg-transparent">
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
      className="w-14 text-center text-xl font-bold outline-none"
    />
    <div className="h-full flex items-center px-2 text-white bg-blue-600 rounded-r-sm">
      <span className="text-xs self-start mt-1.5">ایران</span>
      <input
        type="text"
        maxLength={2}
        className="w-8 bg-transparent text-center text-xl font-bold outline-none self-end mb-1"
      />
    </div>
  </div>
);

const AddPlateForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <form className="flex flex-col h-full">
      <div className="flex-1 space-y-5">
        <div className="grid grid-cols-2 gap-4 items-end">
          <div>
            <label className="text-sm font-medium text-gray-700">پلاک</label>
            <PlateInput />
          </div>
          <div>
            <label
              htmlFor="plateName"
              className="text-sm font-medium text-gray-700"
            >
              نام پلاک
            </label>
            <input
              id="plateName"
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">صاحب پلاک</label>
          <div className="grid grid-cols-2 gap-4 mt-1">
            <input
              type="text"
              placeholder="نام صاحب پلاک"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="nationalId"
            className="text-sm font-medium text-gray-700"
          >
            کد ملی صاحب پلاک *
          </label>
          <input
            id="nationalId"
            type="text"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            تاریخ تولد
          </label>
          <div className="grid grid-cols-3 gap-4 mt-1">
            <select className="p-3 border border-gray-300 rounded-lg">
              <option>روز *</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg">
              <option>ماه *</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg">
              <option>سال *</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">جنسیت</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                className="form-radio text-primary"
              />{" "}
              زن
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                className="form-radio text-primary"
              />{" "}
              مرد
            </label>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-4 border-t grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={onClose}
          className="py-3 px-4 font-semibold text-primary border border-primary rounded-lg hover:bg-primary/5"
        >
          انصراف
        </button>
        <button
          type="submit"
          className="py-3 px-4 font-semibold text-white bg-primary rounded-lg hover:bg-primary/90"
        >
          تایید
        </button>
      </div>
    </form>
  );
};

export default AddPlateForm;
