import React from "react";
import ProfileSidebar from "../page/profile/sidebar/ProfileSidebar";
import MobileHorizontalNav from "../page/profile/sidebar/MobileHorizontalNav";

type ProfileLayoutProps = {
  children: React.ReactNode;
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <aside className="hidden shrink-0 md:block">
        <ProfileSidebar />
      </aside>

      <div className="flex flex-col w-full">
        <MobileHorizontalNav />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default ProfileLayout;
