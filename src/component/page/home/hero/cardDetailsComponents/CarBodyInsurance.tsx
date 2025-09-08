import type { FC } from "react";
const cards = [
  {
    id: 1,
    title: "امنیت مالی میده",
    description: "مقصر هم که باشی! اگه تصادف کنی بیمه بدنه خسارت ماشینت رو میده.",
  },
  {
    id: 2,
    title: "آرامش خیال میاره",
    description: "وقتی بیرون پارک می‌کنی اگه ماشینت آسیب ببینه، بیمه بدنه به دادت می‌رسه.",
  },
  {
    id: 3,
    title: "سپر حوادث میشه",
    description: "سیل بشه یا زلزله بیاد، بیمه بدنه خسارت ماشینت رو پرداخت می‌کنه.",
  },
  {
    id: 4,
    title: "محافظ دزدی میشه",
    description: "اگه ماشینت یا لوازم جانبیش رو بدزدن، بیمه بدنه قهرمانانه هزینه‌ش رو جبران می‌کنه.",
  },
];

const CarBodyInsurance: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-16">
      <h5 className="text-center text-primary text-2xl font-bold">بیمه بدنه لازمه چون :</h5>

      <div className="grid grid-cols-12 justify-between items-center gap-5">
        {cards.map((item) => {
          return (
            <div key={item.id} className="col-span-4 flex flex-col items-center justify-between">
              <img src="/logo.png" alt="logo" />
              <p className="text-center font-semibold">{item.title}</p>
              <p className="text-center text-sm text-gray-700">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CarBodyInsurance;
