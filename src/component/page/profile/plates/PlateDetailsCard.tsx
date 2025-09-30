import { FiClipboard, FiEdit2, FiTrash2 } from "react-icons/fi";

const DetailRow = ({ label, value }: any) => (
  <div className="flex justify-between items-center py-3 border-b">
    <span className="text-gray-500">{label}</span>
    <span className="font-semibold text-gray-800">{value}</span>
  </div>
);

const PlateDetailsCard = ({ plate }: any) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <FiClipboard className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-gray-800">مشخصات پلاک</h2>
        </div>
        <div className="flex items-center gap-4 text-sm">
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

      <div className="space-y-2 text-sm">
        <DetailRow label="نام پلاک" value={plate.name} />
        <DetailRow label="نام صاحب پلاک" value={plate.ownerFirstName} />
        <DetailRow label="نام خانوادگی صاحب پلاک" value={plate.ownerLastName} />
        <DetailRow label="کد ملی صاحب پلاک" value={plate.nationalId} />
        <DetailRow label="تاریخ تولد صاحب پلاک" value={plate.birthDate} />
      </div>
    </div>
  );
};

export default PlateDetailsCard;
