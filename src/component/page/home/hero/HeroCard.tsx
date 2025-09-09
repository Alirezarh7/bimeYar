import type { FC, ReactNode } from "react";

interface IProps {
  className: string;
  title: string;
  subTitle: string;
  icon: ReactNode;
  id: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  selectedId: number;
}

const HeroCard: FC<IProps> = ({ className, title, subTitle, icon, setSelectedId, id, selectedId }) => {
  return (
    <div
      onClick={() => {
        setSelectedId(id);
        window.scrollTo(0, 0);
      }}
      className={`${className} bg-card shadow-sm rounded-xl p-5 hover:scale-105 transition-[scale] duration-500 cursor-pointer ${id === selectedId ? "border-2 border-primary" : ""}`}
    >
      <div className="flex items-center justify-center flex-col w-full h-full gap-2">
        {icon}
        <h4 className="text-xl text-card-foreground font-semibold text-center">{title}</h4>
        <p className=" text-gray-400 text-center text-sm">{subTitle}</p>
      </div>
    </div>
  );
};
export default HeroCard;
