import { type FC, type ReactNode } from "react";
import { motion } from "framer-motion";

interface PropsType {
  children: ReactNode;
  activeStep: number;
  steps: number;
}

const Steps: FC<PropsType> = ({ children, activeStep, steps }) => {
  const progressWidth = `${((activeStep - 1) / (steps - 1)) * 100}%`;
  return (
    <div className=" w-full max-w-5xl mx-auto my-14">
      <div className="flex items-center justify-between gap-6 relative h-1 rounded-lg bg-gray-300 w-full">
        {children}
        <motion.div initial={{ width: 0 }} animate={{ width: progressWidth }} transition={{ duration: 0.5, ease: "easeInOut" }} className=" h-1 absolute top-0 right-0 bg-primary"></motion.div>
      </div>
    </div>
  );
};
export default Steps;
