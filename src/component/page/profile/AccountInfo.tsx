import ProfileSectionWrapper from "./wrapper/ProfileSectionWrapper";
import { FiCreditCard } from "react-icons/fi";

const AccountInfo = () => {
  return (
    <ProfileSectionWrapper title="اطلاعات حساب کاربری">
      <p className="text-center text-gray-600 mb-6 max-w-md mx-auto">
        مقدار موجودی کیف پول شما در کادر زیر نمایش داده شده است.
      </p>
      <div className="max-w-xs mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-4 text-center">
        <FiCreditCard className="w-10 h-10 text-blue-500" />
        <div>
          <p className="text-sm text-gray-500">موجودی کیف پول</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">۰ تومان</p>
        </div>
      </div>
    </ProfileSectionWrapper>
  );
};

export default AccountInfo;
