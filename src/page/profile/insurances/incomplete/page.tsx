import { IoCarSportOutline } from "react-icons/io5";
import ProfileLayout from "../../../../component/layout/ProfileLayout";
import EmptyState from "../../../../component/page/profile/EmptyState";
import { useNavigate } from "react-router-dom";

const InsuranceIncompletePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProfileLayout>
        <EmptyState
          title="بیمه های خریداری شده "
          message="بیمه‌ای برای نمایش وجود ندارد."
          buttonText="ایجاد بیمه جدید"
          onButtonClick={() => navigate("/")}
          icon={<IoCarSportOutline size={24} />}
        />
      </ProfileLayout>
    </>
  );
};

export default InsuranceIncompletePage;
