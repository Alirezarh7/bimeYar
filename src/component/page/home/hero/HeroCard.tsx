import type { FC } from "react";

interface IProps {
  className: string;
  title: string;
  subTitle: string;
  imgUrl: string;
  id: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  selectedId: number;
}

const HeroCard: FC<IProps> = ({ className, title, subTitle, imgUrl, setSelectedId, id }) => {
  return (
    <div onClick={() => setSelectedId(id)} className={`${className} bg-card shadow-sm rounded-xl p-5 hover:scale-105 transition-all duration-500 cursor-pointer`}>
      <div className="flex items-center justify-center flex-col w-full h-full gap-2">
        <img src={imgUrl} alt={title} className="w-28 h-20" />
        <h4 className="text-xl text-gray-700 font-semibold text-center">{title}</h4>
        <p className=" text-gray-400 text-center text-sm">{subTitle}</p>
      </div>
    </div>
  );
};
export default HeroCard;
