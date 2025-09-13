import ProfileLayout from "../../../component/layout/ProfileLayout";
import AccountInfo from "../../../component/page/profile/AccountInfo";
import InvitationBanner from "../../../component/page/profile/InvitationBanner";
import PersonalInfo from "../../../component/page/profile/PersonalInfo";

const PersonalInfoPage = () => {
  return (
    <ProfileLayout>
      <div className="p-8">
        <InvitationBanner />
      </div>
      <div className="bg-gray-50 min-h-screen p-4 md:p-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <PersonalInfo />
          <AccountInfo />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default PersonalInfoPage;
