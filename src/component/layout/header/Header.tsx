import ImportantServices from "./ImportantServices.tsx";
import {useState} from "react";
import LoginModal from "./Login/LoginModal.tsx";


const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const profile = JSON.parse(localStorage.getItem("profile") || "null");
  return (
    <>
      <div className="w-full fixed bg-white border-b py-3 z-10  ">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between">
            <div className={'flex mx-2'}>
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2 L20 7 L12 22 L4 7 Z"/>
              </svg>
              <span className="text-lg font-bold text-primary">بیمه‌یار</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              {profile?.fullname ?
                <button className={'border border-primary p-1 px-4 w-fit text-primary rounded-2xl'}>
                  {profile?.fullname}
                </button>
                :
                <button onClick={() => setOpenLogin(true)}
                        className={'border border-primary p-1 px-4 w-fit text-primary rounded-2xl'}>
                  ورود/ثبت نام
                </button>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <ImportantServices/>
      </div>
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)}/>
    </>
  );
};

export default Header;