import IranianPlate from "./IranianPlate";
import { FiChevronLeft, FiArrowLeft } from "react-icons/fi";
import { FaCar, FaShieldAlt } from "react-icons/fa";

const InsuranceStatus = ({ icon, title, status, label }: any) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2 text-gray-600">
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

const PlateCard = ({
  plate,
  isSelected = false,
  onDetailsClick,
}: any) => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center gap-6 justify-between">
      <div className="flex items-center gap-4">
        <div>
          <p className="font-bold text-gray-800">{plate.name}</p>
          <p className="text-xs text-gray-500 mt-1">صاحب پلاک: {plate.owner}</p>
          <div className="mt-4">
            <IranianPlate {...plate.plateNumbers} />
          </div>
        </div>
      </div>

      <div className="w-full md:w-56 space-y-3">
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

      <button
        onClick={() => onDetailsClick(plate)}
        className="flex items-center gap-1 text-primary font-semibold text-sm"
      >
        {isSelected ? (
          <>
            <span>بازگشت</span>
            <FiArrowLeft />
          </>
        ) : (
          <>
            <span>جزئیات</span>
            <FiChevronLeft />
          </>
        )}
      </button>
    </div>
  );
};

export default PlateCard;
