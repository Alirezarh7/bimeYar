import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IranianPlate from "./IranianPlate";
import {
  FiChevronDown,
  FiChevronUp,
  FiEdit2,
  FiTrash2,
  FiClipboard,
} from "react-icons/fi";
import { FaCar, FaShieldAlt } from "react-icons/fa";

const InsuranceStatus = ({ icon, title, status, label }: any) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-500">
      {icon}
      <span>{title}</span>
    </div>
    <a
      href="#"
      className={`font-semibold ${
        status === "pending" ? "text-orange-500" : "text-primary"
      }`}
    >
      {label}
    </a>
  </div>
);

const DetailRow = ({ label, value }: any) => (
  <div className="flex justify-between items-center py-3">
    <span className="text-gray-500">{label}</span>
    <span className="font-semibold text-card-foreground">{value}</span>
  </div>
);

const ExpandablePlateCard = ({ plate }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div className="text-card-foreground  bg-[var(--card)] rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div>
              <p className="font-bold text-card-foreground">{plate.name}</p>
              <p className="text-xs text-gray-500 mt-1">
                صاحب پلاک: {plate.owner}
              </p>
              <div className="mt-4">
                <IranianPlate {...plate.plateNumbers} />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-56 space-y-3">
            <InsuranceStatus
              icon={<FaCar className="text-gray-400" />}
              title="بیمه شخص ثالث"
              {...plate.thirdPartyInsurance}
            />
            <hr />
            <InsuranceStatus
              icon={<FaShieldAlt className="text-gray-400" />}
              title="بیمه بدنه"
              {...plate.bodyInsurance}
            />
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 pt-3 border-t border-gray-200 cursor-pointer flex justify-center items-center gap-1 text-primary font-semibold text-sm"
        >
          <span>{isExpanded ? "بستن مشخصات" : "مشاهده مشخصات"}</span>
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.section
            key="content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[var(--card)]"
          >
            <div className="p-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <FiClipboard className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">
                  مشخصات پلاک
                </h3>
              </div>
              <div className="space-y-2 text-sm border-t pt-2">
                <DetailRow label="نام پلاک" value={plate.name} />
                <DetailRow label="نام صاحب پلاک" value={plate.ownerFirstName} />
                <DetailRow
                  label="نام خانوادگی صاحب پلاک"
                  value={plate.ownerLastName}
                />
                <DetailRow label="کد ملی صاحب پلاک" value={plate.nationalId} />
                <DetailRow
                  label="تاریخ تولد صاحب پلاک"
                  value={plate.birthDate}
                />
              </div>
              <div className="mt-4 pt-4 border-t flex items-center justify-end gap-6 text-sm">
                <button className="flex items-center gap-2 text-primary font-medium">
                  <FiEdit2 />
                  ویرایش
                </button>
                <button className="flex items-center gap-2 text-red-500 font-medium">
                  <FiTrash2 />
                  حذف پلاک
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandablePlateCard;
