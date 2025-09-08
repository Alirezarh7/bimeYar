import { useState, type FC } from "react";
import HeroCard from "./HeroCard";
import HeroCardDetails from "./HeroCardDetails";

const cards = [
  {
    id: 1,
    title: "بیمه بدنه خودرو",
    subTitle: "سواری , وانت",
    imgUrl: "/logo.png",
    className: "col-span-4 row-span-3 col-start-1",
  },
  {
    id: 2,
    title: "بیمه بدنه خودرو",
    subTitle: "سواری , وانت",
    imgUrl: "/logo.png",
    className: "col-span-2 row-span-3 col-start-5 row-start-1",
  },
  {
    id: 3,
    title: "بیمه شخص ثالث خودرو",
    subTitle: "سواری , وانت و کامیون و ...",
    imgUrl: "/logo.png",
    className: "col-span-6 row-span-3 col-start-1 row-start-4",
  },
  {
    id: 4,
    title: "بیمه خانه",
    subTitle: "آتش سوزی ,  زلزله ,  آسانسور",
    imgUrl: "/logo.png",
    className: "col-span-3 row-span-3 row-start-7",
  },
  {
    id: 5,
    title: "بیمه تکمیلی",
    subTitle: "انفرادی , خانوادگی و شرکتی",
    imgUrl: "/logo.png",
    className: "col-span-3 row-span-3 col-start-4 row-start-7",
  },
  {
    id: 6,
    title: "بیمه موتور",
    subTitle: "تک سیلندر , دو سیلندر و ...",
    imgUrl: "/logo.png",
    className: "col-span-4 row-span-3 row-start-10",
  },
  {
    id: 7,
    title: "بیمه عمر",
    subTitle: "عمر و سرمایه گذاری و ...",
    imgUrl: "/logo.png",
    className: "col-span-2 row-span-3 col-start-5 row-start-10",
  },
];

const Hero: FC = () => {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div className="w-full h-[90vh] mb-10 ">
      <div className="grid grid-cols-12 grid-rows-12 gap-5 w-full h-full p-5">
        <HeroCardDetails selectedId={selectedId} setSelectedId={setSelectedId} />
        {cards.map((item) => {
          return (
            <HeroCard className={item.className} imgUrl={item.imgUrl} subTitle={item.subTitle} title={item.title} key={item.id} id={item.id} selectedId={selectedId} setSelectedId={setSelectedId} />
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
