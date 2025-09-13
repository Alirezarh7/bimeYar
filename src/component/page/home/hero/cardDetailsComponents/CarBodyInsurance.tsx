import type { FC } from "react";
import { CalmIcon, SafeIcon, ShieldIcon, ThiefIcon } from "../../../../../icons/Icon";
const cards = [
  {
    id: 1,
    title: "حفاظت مالی مطمئن",
    icon: <SafeIcon />,
    description: "حتی اگر در تصادف مقصر باشید، بیمه بدنه هزینه تعمیر یا جایگزینی خودرو شما را پرداخت می‌کند.",
  },
  {
    id: 2,
    title: "آرامش در هر شرایط",
    icon: <CalmIcon />,
    description: "در صورت آسیب خودرو هنگام پارک یا حوادث پیش‌بینی‌نشده، بیمه بدنه خیال شما را راحت می‌کند.",
  },
  {
    id: 3,
    title: "پشتیبانی در بلایای طبیعی",
    icon: <ShieldIcon />,
    description: "وقتی سیل، زلزله یا آتش‌سوزی رخ دهد، بیمه بدنه خسارت‌های وارده به خودرو را جبران می‌نماید.",
  },
  {
    id: 4,
    title: "محافظت در برابر سرقت",
    icon: <ThiefIcon />,
    description: "در صورت سرقت خودرو یا لوازم جانبی آن، بیمه بدنه خسارت واردشده را پوشش می‌دهد.",
  },
];

const CarBodyInsurance: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  gap-16 ">
      <h5 className="text-center text-primary text-2xl font-bold">بیمه بدنه لازمه چون :</h5>

      <div className="flex flex-col items-center md:grid grid-cols-12 justify-between  gap-10 ">
        {cards.map((item) => {
          return (
            <div key={item.id} className="col-span-12 md:col-span-6 flex flex-col items-center  h-56 p-5 gap-3 border border-gray-200 rounded-xl cursor-pointer">
              {/* <img src="/logo.png" alt="logo" className="h-16" /> */}
              {item.icon}
              <p className="text-center font-semibold text-card-foreground">{item.title}</p>
              <p className="text-center text-sm font-medium text-card-foreground max-w-56">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CarBodyInsurance;
