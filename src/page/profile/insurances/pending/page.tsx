import { useNavigate } from "react-router-dom";
import ProfileLayout from "../../../../component/layout/ProfileLayout";
import EmptyState from "../../../../component/page/profile/EmptyState";
import { IoCarSportOutline } from "react-icons/io5";

const InsurancePendingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProfileLayout>
        <EmptyState
          title="بیمه های  در انتظار تمدید "
          message="بیمه‌ای برای نمایش وجود ندارد."
          buttonText="ایجاد بیمه جدید"
          onButtonClick={() => navigate("/")}
          icon={<IoCarSportOutline size={24} />}
        />
      </ProfileLayout>
    </>
  );
};

export default InsurancePendingPage;
