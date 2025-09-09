import { useState, type FC } from "react";
import HeroCard from "./HeroCard";
import HeroCardDetails from "./HeroCardDetails";
import { CarIcon2, HealthIcon, HomeIcon, LifeIcon, MobileIcon, MotorIcon, PersonIcon } from "../../../../icons/Icon";

const cards = [
  {
    id: 1,
    title: "بیمه بدنه خودرو",
    subTitle: "سواری , وانت",
    icon: <CarIcon2 />,
    className: "col-span-12 row-span-2 lg:col-span-4 lg:row-span-3 col-start-1",
  },
  {
    id: 2,
    title: "بیمه موبایل",
    subTitle: "سرقت ، آسیب دیدگی و ...",
    icon: <MobileIcon />,
    className: "col-span-12 row-span-2 col-start-1 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-1",
  },
  {
    id: 3,
    title: "بیمه شخص ثالث خودرو",
    subTitle: "سواری , وانت و کامیون و ...",
    icon: <PersonIcon />,
    className: "col-span-12 row-span-2 col-start-1 lg:col-span-6 lg:row-span-3 lg:col-start-1 lg:row-start-4",
  },
  {
    id: 4,
    title: "بیمه خانه",
    subTitle: "آتش سوزی ,  زلزله ,  آسانسور",
    icon: <HomeIcon />,
    className: "col-span-12 row-span-2 col-start-1 lg:col-span-3 lg:row-span-3 lg:row-start-7",
  },
  {
    id: 5,
    title: "بیمه تکمیلی",
    subTitle: "انفرادی , خانوادگی و شرکتی",
    icon: <HealthIcon />,
    className: "col-span-12 row-span-2 col-start-1 lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-7",
  },
  {
    id: 6,
    title: "بیمه موتور",
    subTitle: "تک سیلندر , دو سیلندر و ...",
    icon: <MotorIcon />,
    className: "col-span-12 row-span-2 col-start-1 lg:col-span-4 lg:row-span-3 lg:row-start-10",
  },
  {
    id: 7,
    title: "بیمه عمر",
    subTitle: "عمر و سرمایه گذاری و ...",
    icon: <LifeIcon />,
    className: "col-span-12 row-span-2 col-start-1 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-10",
  },
];

const Hero: FC = () => {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div className="w-full h-[90vh]  mb-10 ">
      <div className="grid grid-cols-12 grid-rows-12 gap-5 w-full h-full p-5">
        <HeroCardDetails selectedId={selectedId} setSelectedId={setSelectedId} />
        {cards.map((item) => {
          return <HeroCard className={item.className} icon={item.icon} subTitle={item.subTitle} title={item.title} key={item.id} id={item.id} selectedId={selectedId} setSelectedId={setSelectedId} />;
        })}
      </div>
    </div>
  );
};
export default Hero;
