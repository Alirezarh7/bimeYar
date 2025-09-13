import type { FC } from "react";
import BeneftCard from "./BeneftCard";
import { BuyIcon, CalenderIcon, CentralBankIcon, PriceIcon, PrinterIcon } from "../../../../icons/Icon";

const features = [
  {
    id: 1,
    title: "مقایسه شفاف قیمت و خدمات",
    description: "لیست قیمت و پوشش‌های بیمه‌ای همه شرکت‌ها را یکجا ببینید و بهترین انتخاب را داشته باشید.",
    icon: <PriceIcon />,
  },
  {
    id: 2,
    title: "خرید آنلاین در هر لحظه",
    description: "در هر ساعت از شبانه‌روز و هر مکانی که باشید، تنها با چند کلیک بیمه خود را خریداری کنید.",
    icon: <BuyIcon />,
  },
  {
    id: 3,
    title: "امکان خرید قسطی بیمه",
    description: "بدون نیاز به چک یا سفته، بیمه موردنظرتان را اقساطی بخرید و هزینه‌ها را طی ۱۰ ماه پرداخت کنید.",
    icon: <CalenderIcon />,
  },
  {
    id: 4,
    title: "تحت نظارت بیمه مرکزی",
    description: "کلیه فعالیت‌های «بیمه یار» با مجوز رسمی و نظارت مستقیم بیمه مرکزی انجام می‌شود.",
    icon: <CentralBankIcon />,
  },
  {
    id: 5,
    title: "صدور آنی بیمه‌نامه",
    description: "بیمه‌هایی که نیاز به بازدید ندارند، در همان روز صادر می‌شوند و بلافاصله قابل استفاده‌اند.",
    icon: <PrinterIcon />,
  },
];

const Benefits: FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-32 px-5 relative">
      <img src="/questions.svg" alt="questions" className="hidden md:block absolute top-0 left-0 -z-10" />
      <div className="flex items-center flex-col w-full gap-20">
        <h4 className="text-3xl text-foreground font-bold">چرا از بیمه یار بیمه بخرم؟</h4>
        <div className="flex items-center flex-col flex-wrap gap-5 w-full">
          {features.map((item) => (
            <BeneftCard description={item.description} title={item.title} icon={item.icon} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Benefits;
