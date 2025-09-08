import BottomSheetModal from "../../general/bottomShitModal/BottomSheetModal.tsx";

interface IProps {
  onClose: (e:boolean) => void;
  open: boolean;
}
export default function LoginBottomSheetModal({onClose,open}:IProps) {


  return (
    <div className="p-4">
      <BottomSheetModal isOpen={open} onClose={() => onClose(false)}>
        <h2 className="text-lg font-bold">ورود / ثبت‌نام</h2>
        <p className="text-gray-600 mb-4">برای ورود یا ثبت‌نام شماره موبایل خود را وارد کنید.</p>
        <input
          type="text"
          placeholder="شماره موبایل"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <button className="bg-primary text-white w-full py-2 rounded-xl">
          ادامه
        </button>
      </BottomSheetModal>
    </div>
  );
}
