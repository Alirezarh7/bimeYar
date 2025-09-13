import React from "react";

type ProfileSectionWrapperProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const ProfileSectionWrapper: React.FC<ProfileSectionWrapperProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      dir="rtl"
      className={`bg-white p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm w-full ${className}`}
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6 text-center md:text-right">
        {title}
      </h2>

      <div>{children}</div>
    </div>
  );
};

export default ProfileSectionWrapper;
