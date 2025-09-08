import { useState } from "react";
// import ProfileBottomSheet from "./ProfileBottomSheet.tsx";

interface Props {
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    // هر فیلد دیگه‌ای که نیاز داری
  };
}

const ProfileButton = ({ profile }: Props) => {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenSheet(true)}
        className="border border-primary p-1 px-4 w-fit text-primary rounded-2xl"
      >
        {profile.firstName + " " + profile.lastName + "   >"}
      </button>

      {/*<ProfileBottomSheet*/}
      {/*  open={openSheet}*/}
      {/*  onClose={() => setOpenSheet(false)}*/}
      {/*  profile={profile}*/}
      {/*/>*/}
    </>
  );
};

export default ProfileButton;