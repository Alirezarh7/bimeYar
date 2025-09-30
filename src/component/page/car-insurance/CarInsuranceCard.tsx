import { type FC, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface PropsType {
  icon: ReactNode;
  title: string;
  subTitle: string;
  url: string;
}

const CarInsuranceCard: FC<PropsType> = ({ icon, subTitle, title, url }) => {
  return (
    <Link to={url} className="flex flex-col items-center p-5 bg-card rounded-xl border-secondary border-2 flex-1 gap-10 hover:scale-105 transition duration-300">
      {icon}
      <h5 className="text-2xl font-bold text-card-foreground text-center ">{title}</h5>
      <p className="text-base font-medium text-gray-400 text-center">{subTitle}</p>
    </Link>
  );
};
export default CarInsuranceCard;
