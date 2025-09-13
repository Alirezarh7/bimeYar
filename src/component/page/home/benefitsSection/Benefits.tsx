import type { FC } from "react";
import BeneftCard from "./BeneftCard";
import { BuyIcon, CalenderIcon, CentralBankIcon, PriceIcon, PrinterIcon } from "../../../../icons/Icon";

const features = [
  {
    id: 1,
    title: "مقایسه قیمت و خدمات بیمه‌ها",
    description: "با بررسی‌‌ فهرست قیمت و خدمات تمام شرکت‌ها، ‌بیمه‌‌‌ت رو زیرکانه انتخاب کن.",
    icon: <PriceIcon />,
  },
  {
    id: 2,
    title: "خرید بیمه؛ هر زمان و هر کجا",
    description: "بیمه‌‌ موردنیازت رو در ۲۴ ساعت شبانه‌روز و از هر کجا که هستی خریداری کن.",
    icon: <BuyIcon />,
  },
  {
    id: 3,
    title: "امکان خرید قسطی بیمه",
    description: "بی سود، بی‌چک و بی‌سفته بیمه بخر و هزینه‌ش رو طی ۱۰ ماه بپرداز.",
    icon: <CalenderIcon />,
  },
  {
    id: 4,
    title: "تحت نظارت بیمه مرکزی",
    description: "تمامی فعالیت‌های ما در «بیمه یار» تحت کنترل و نظارت بیمه مرکزی انجام میشه.",
    icon: <CentralBankIcon />,
  },
  {
    id: 5,
    title: "صدور سریع بیمه‌نامه",
    description: "بیمه‌ای که احتیاج به بازدید نداره، همون روز صادر میشه و قابل استفاده‌ست.",
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
