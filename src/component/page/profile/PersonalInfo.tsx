import ProfileSectionWrapper from "./wrapper/ProfileSectionWrapper";
import DetailItem from "./wrapper/DetailItem";
import { FiEdit2 } from "react-icons/fi";

const PersonalInfo = () => {
  const profile = JSON.parse(localStorage.getItem("profile") as any);
  const user = {
    fullName: profile?.firstName + " " + profile?.lastName,
    mobile: profile?.phone,
    nationalId: profile?.nationalId,
    province: profile?.city,
  };

  return (
    <ProfileSectionWrapper title="اطلاعات شخصی">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3">
        <DetailItem label="نام و نام خانوادگی" value={user.fullName} />
        <DetailItem label="شماره موبایل" value={user.mobile} />
        <DetailItem label="کد ملی" value={user.nationalId} />
        <DetailItem label="استان" value={user.province} />
      </div>
      <hr className="my-6 border-[var(--primary)]" />
      <div className="flex justify-end">
        <button className="flex items-center gap-2 text-sm font-medium text-primary border border-primary/50 rounded-lg px-4 py-2 hover:bg-primary/5 transition-colors">
          <FiEdit2 className="w-4 h-4" />
          <span>ویرایش اطلاعات شخصی</span>
        </button>
      </div>
    </ProfileSectionWrapper>
  );
};

export default PersonalInfo;
