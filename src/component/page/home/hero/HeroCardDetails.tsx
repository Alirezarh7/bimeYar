import type { FC } from "react";
import { motion } from "framer-motion";

interface IProps {
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  selectedId: number;
}

const cardDetails = [
  {
    id: 1,
    childrenComponent: <p>1</p>,
  },
  {
    id: 2,
    childrenComponent: <p>2</p>,
  },
  {
    id: 3,
    childrenComponent: <p>3</p>,
  },
  {
    id: 4,
    childrenComponent: <p>4</p>,
  },
  {
    id: 5,
    childrenComponent: <p>5</p>,
  },
  {
    id: 6,
    childrenComponent: <p>6</p>,
  },
  {
    id: 7,
    childrenComponent: <p>7</p>,
  },
];

const HeroCardDetails: FC<IProps> = ({ selectedId }) => {
  return (
    <motion.div
      key={selectedId}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="col-span-6 row-span-12 col-start-7 row-start-1 bg-card shadow-sm rounded-xl p-5"
    >
      {selectedId === 0 && (
        <div className="flex flex-col items-center justify-center gap-7 w-full h-full ">
          <img src="/logo.png" alt="logo" className="w-40 h-28" />
          <h1 className="text-4xl text-primary font-bold text-center">بیمه یار آسودگی خاطر شما</h1>
          <h5 className=" text-gray-700 font-bold text-center">خرید آنلاین بیمه در چند دقیقه با بهترین قیمت و پشتیبانی ۲۴ ساعته</h5>
        </div>
      )}

      {selectedId !== 0 &&
        cardDetails.map((item) => {
          return <>{item.id === selectedId && item.childrenComponent}</>;
        })}
    </motion.div>
  );
};
export default HeroCardDetails;
