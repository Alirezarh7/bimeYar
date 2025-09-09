import type { FC } from "react";
import { CalmIcon, SafeIcon, ShieldIcon, ThiefIcon } from "../../../../../icons/Icon";
const cards = [
  {
    id: 1,
    title: "امنیت مالی میده",
    icon: <SafeIcon />,
    description: "مقصر هم که باشی! اگه تصادف کنی بیمه بدنه خسارت ماشینت رو میده.",
  },
  {
    id: 2,
    title: "آرامش خیال میاره",
    icon: <CalmIcon />,
    description: "وقتی بیرون پارک می‌کنی اگه ماشینت آسیب ببینه، بیمه بدنه به دادت می‌رسه.",
  },
  {
    id: 3,
    title: "سپر حوادث میشه",
    icon: <ShieldIcon />,
    description: "سیل بشه یا زلزله بیاد، بیمه بدنه خسارت ماشینت رو پرداخت می‌کنه.",
  },
  {
    id: 4,
    title: "محافظ دزدی میشه",
    icon: <ThiefIcon />,
    description: "اگه ماشینت یا لوازم جانبیش رو بدزدن، بیمه بدنه قهرمانانه هزینه‌ش رو جبران می‌کنه.",
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
