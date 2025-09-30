import type { FC } from "react";
import CarInsuranceCard from "../../component/page/car-insurance/CarInsuranceCard";
import { CarIcon } from "../../icons/Icon";

const carInsuranceData = [
  {
    url: "/third-party-insurance",
    icon: <CarIcon className="h-42 w-42 dark:opacity-50 " />,
    title: "خرید بیمه شخص ثالث",
    subTitle: "برای خرید بیمه شخص ثالث خودرو کارکرده",
  },
  {
    url: "/third-party-insurance-new-car",
    icon: <CarIcon className="h-42 w-42 dark:opacity-50" />,
    title: "خرید بیمه شخص ثالث نو شماره",
    subTitle: "برای خرید بیمه شخص ثالث خودرو های صفر ",
  },
];

const CarInsurance: FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex flex-col items-center gap-10 w-full">
        <h3 className="text-2xl md:text-3xl text-foreground font-bold px-5 self-start">لیست بیمه های وسیله نقلیه</h3>
        <div className="flex items-center justify-between flex-wrap w-full gap-10">
          {carInsuranceData.map((item) => {
            return <CarInsuranceCard icon={item.icon} subTitle={item.subTitle} title={item.title} url={item.url} key={item.url} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default CarInsurance;
