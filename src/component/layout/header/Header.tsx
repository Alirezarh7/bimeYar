import ImportantServices from "./ImportantServices.tsx";
import { useEffect, useState } from "react";
import LoginModal from "../Login/LoginModal.tsx";
import CustomDropDown from "../Login/CustomDropDown.tsx";
import type { Tprofile } from "../../../types/generalType.ts";
import { useThemeStore } from "../../../store/themeStore.ts";
import { MoonIcon, SunIcon } from "../../../icons/Icon.tsx";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const [profile, setProfile] = useState<Tprofile>(() => {
    return JSON.parse(localStorage.getItem("profile") || "null");
  });

  useEffect(() => {
    const loginListener = (e: CustomEvent) => {
      setProfile(e.detail); // وقتی لاگین شد
    };
    const logoutListener = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setProfile(null); // وقتی لاگ‌اوت شد
    };
    window.addEventListener("auth:login", loginListener as EventListener);
    window.addEventListener("auth:logout", logoutListener);

    return () => {
      window.removeEventListener("auth:login", loginListener as EventListener);
      window.removeEventListener("auth:logout", logoutListener);
    };
  }, []);

  return (
    <>
      <div className="w-full fixed bg-white dark:bg-background shadow-sm py-3 z-10  ">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between">
            <div className={"flex mx-2 items-center"}>
              <img src="/logo.png" alt="logo" className="w-14" />
              <span className="text-lg font-bold text-primary">بیمه‌یار</span>
            </div>
            <div className="flex items-center justify-center gap-3 max-lg:hidden ">
              {profile?.firstName ? (
                <CustomDropDown profile={profile} />
              ) : (
                <button onClick={() => setOpenLogin(true)} className={"border-2 border-primary p-2 px-4 w-fit font-medium text-primary rounded-2xl cursor-pointer"}>
                  ورود/ثبت نام
                </button>
              )}
              <button className={"border-2 border-primary p-1 px-3 w-fit rounded-2xl cursor-pointer"} onClick={toggleTheme}>
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <ImportantServices />
      </div>
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
};

export default Header;
