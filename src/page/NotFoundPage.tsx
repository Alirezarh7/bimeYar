import {useEffect, useState} from "react";
import Breadcrumb from "../component/general/breadCrumb/Breadcrumb.tsx";

const NotFoundPage = () => {
  const [vhMultiplier, setVhMultiplier] = useState(90.5); // مقدار پیش‌فرض

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      // تعیین multiplier بر اساس عرض صفحه
      const smallMobile = window.innerHeight <= 667;
      const bigMobile =window.innerHeight <= 844;

      setVhMultiplier(smallMobile ? 89.2 :bigMobile ? 91.5  : 92.5 );
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);
  return (
    <div

      className="w-full bg-no-repeat bg-cover overflow-hidden "
      style={{
        height: `calc(var(--vh) * ${vhMultiplier})`,
        backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('./404.jpg')`,
        backgroundPosition: "48%",
      }}
    >
      <Breadcrumb/>
      <div className={'flex justify-center items-center w-full h-52'}>
        <strong className={'font-bold text-xl text-red-700 text-center '}>
          صفحه مورد نظر یافت نشد. یا شما به این صفحه دسترسی ندارید
        </strong>
      </div>
    </div>
  );
};

export default NotFoundPage;