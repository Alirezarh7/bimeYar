import type { FC, ReactNode } from "react";
interface IProps {
  title: string;
  description: string;
  icon: ReactNode;
}
const BeneftCard: FC<IProps> = ({ description, icon, title }) => {
  return (
    <div className="flex items-center justify-center bg-card p-5 w-full md:w-1/2 shadow-lg">
      {icon}
      <p className="text-sm text-primary font-semibold ">{title}</p>
      <p className="text-sm text-primary font-semibold ">{description}</p>
    </div>
  );
};
export default BeneftCard;
