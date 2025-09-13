import type { FC, ReactNode } from "react";
interface IProps {
  title: string;
  description: string;
  icon: ReactNode;
}
const BeneftCard: FC<IProps> = ({ description, icon, title }) => {
  return (
    <div className="flex items-center flex-col justify-center bg-card p-5 w-full md:w-1/2 shadow-lg rounded-2xl gap-5">
      {icon}
      <p className="text-sm text-card-foreground font-semibold">{title}</p>
      <p className="text-sm text-gray-500 font-medium">{description}</p>
    </div>
  );
};
export default BeneftCard;
