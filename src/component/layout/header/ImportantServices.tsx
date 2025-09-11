import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useWindowWidth } from "../../../hook/useWindowWidth.ts";
import { CarIcon, HeadlineIcon, MemberIcon } from "../../../icons/Icon.tsx";

const ImportantServices = () => {
  const [scrollNumber, setScrollNumber] = useState(false);
  const windowWidth = useWindowWidth();

  const data = [
    { icon: <CarIcon />, title: "بیمه وسایل نقلیه" },
    { icon: <MemberIcon />, title: "بیمه اشخاص" },
    { icon: <HeadlineIcon />, title: "بیمه اموال" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (windowWidth! >= 1280 && window.scrollY >= 56) {
        setScrollNumber(true);
      } else if (windowWidth! < 1280 && window.scrollY >= 60) {
        setScrollNumber(true);
      } else {
        setScrollNumber(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowWidth]);

  return (
    <div className="flex items-center justify-center pb-10 ">
      {/* بک‌گراند متحرک */}
      {/*<AnimatePresence initial={false}>*/}
      {/*  <motion.div*/}
      {/*    animate={{*/}
      {/*      top: scrollNumber*/}
      {/*        ? windowWidth! >= 1280*/}
      {/*          ? "-90vh"*/}
      {/*          : "-86vh"*/}
      {/*        : windowWidth! < 1280*/}
      {/*          ? "-100vh"*/}
      {/*          : "-100vh",*/}
      {/*    }}*/}
      {/*    transition={{ type: "spring", stiffness: 80, damping: 15 }}*/}
      {/*    className="fixed h-full w-full xl:w-3/4 bg-gradient-to-r z-10 from-green-400 to-blue-500 rounded-b-[20px] xl:rounded-b-[300px] "*/}
      {/*  />*/}
      {/*</AnimatePresence>*/}
      {useWindowWidth() < 850 ? null : (
        <motion.div
          animate={{
            top: scrollNumber ? "6vh" : "1vh",
            scale: scrollNumber ? 0.9 : 1,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className={`z-10 fixed w-[95%]  md:w-[43%]  rounded-lg  ${scrollNumber ? "shadow-sm h-[50px] bg-background  " : " bg-background/90 h-[50px]"}`}
        >
          <div className="w-full h-full flex justify-around ">
            {data.map((item, index) => (
              <motion.div key={index} className="flex max-lg:flex-col justify-between items-center" animate={{ opacity: scrollNumber ? 0.9 : 1 }} transition={{ duration: 0.3 }}>
                {item.icon}
                <motion.p animate={{ opacity: scrollNumber ? 1 : 1 }} transition={{ duration: 0.3 }} className={` px-2 text-sm max-lg:text-[11px] font-light text-primary font-medium`}>
                  {item.title}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImportantServices;
