import type { FC } from "react";
interface PropsType {
  number: number;
  activeStep: number;
}

const Step: FC<PropsType> = ({ number, activeStep }) => {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center text-card-foreground bg-card rounded-full font-medium border-2 border-primary z-10 transition-all duration-300 ${
        activeStep >= number ? "bg-primary text-primary-foreground" : ""
      }`}
    >
      {number}
    </div>
  );
};
export default Step;
