import React, { useState } from "react";
import { FiPlus, FiTruck, FiGitMerge } from "react-icons/fi";
import ExpandablePlateCard from "./ExpandablePlateCard";

import AddPlateForm from "./AddPlateForm"; // کامپوننت فرم را وارد کنید
import Drawer from "../../../general/drawer/Drawer";

const PlateSection = ({ title, plates, vehicleType }: any) => {
  const Icon = vehicleType === "car" ? FiTruck : FiGitMerge;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)} // با کلیک، Drawer باز می‌شود
            className="flex items-center gap-2 text-sm font-medium text-primary"
          >
            <FiPlus />
            <span>پلاک جدید</span>
          </button>
        </div>

        {plates.length > 0 ? (
          <div className="flex flex-col gap-4">
            {plates.map((plate: any) => (
              <ExpandablePlateCard key={plate.id} plate={plate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
            <p className="text-gray-500 mb-4">پلاکی برای نمایش وجود ندارد</p>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              + افزودن پلاک {vehicleType === "car" ? "خودرو" : "موتورسیکلت"}
            </button>
          </div>
        )}
      </div>

      {/* کامپوننت Drawer اینجا رندر می‌شود */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="پلاک جدید"
      >
        <AddPlateForm onClose={() => setIsDrawerOpen(false)} />
      </Drawer>
    </>
  );
};

export default PlateSection;
