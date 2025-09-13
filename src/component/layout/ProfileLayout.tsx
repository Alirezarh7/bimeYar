import React from "react";
import ProfileSidebar from "../page/profile/sidebar/ProfileSidebar";
import MobileHorizontalNav from "../page/profile/sidebar/MobileHorizontalNav";

type ProfileLayoutProps = {
  children: React.ReactNode;
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="hidden shrink-0 md:block p-1 pb-1.5">
        <ProfileSidebar />
      </aside>

      <div className="flex flex-col w-full p-2">
        <div className="md:hidden">
          <MobileHorizontalNav />
        </div>
        <main className="flex-1 p-2">{children}</main>
      </div>
    </div>
  );
};

export default ProfileLayout;
