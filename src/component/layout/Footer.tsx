import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FaTimes} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";
import {AllocationIcon, CycleIcon, HeadlineIcon, ManagementIcon, MemberIcon, QuotaIcon} from "../../icons/Icon.tsx";
import {MdOutlineManageAccounts} from "react-icons/md";
import {RiCustomerService2Line} from "react-icons/ri";
import {TfiHome} from "react-icons/tfi";
import {useWindowWidth} from "../../hook/useWindowWidth.ts";

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    setSelectedTab(currentPath);
  }, [currentPath]);
  const [selectedTab, setSelectedTab] = useState<any>(currentPath);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useNavigate()
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  const navItems = [
    {
      id: '/',
      icon: <TfiHome color={selectedTab === '/' ? "#black" : "black"}/>,
      label: "خانه",
      history: '/'
    },
    {
      id: 2,
      icon: <RiCustomerService2Line color={"black"}/>,
      label: "خدمات",
    },
    {
      id: '/profile',
      icon: <MdOutlineManageAccounts color={selectedTab === '/profile' ? "#black" : "black"}/>,
      label: "پروفایل",
      history: '/profile',

    },
  ];

  const servicesData = [
    {
      id: 1,
      icon: <CycleIcon/>,
      title: "دوره و زیر دوره",
      navigate: '/period-sub-period'
    },
    {
      id: 2,
      icon: <MemberIcon/>,
      title: "ارگان",
      navigate: '/organ'
    },
    {
      id: 3,
      icon: <HeadlineIcon/>,
      title: "سرفصل",
      navigate: '/headline'
    },
    {
      id: 4,
      icon: <AllocationIcon/>,
      title: "تخصیص به ارگان",
      navigate: '/assigning-heading-to-organs'
    },
    {
      id: 7,
      icon: <ManagementIcon/>,
      title: "مدیریت کاربران",
      navigate: '/user-management'
    },
    {
      id: 6,
      icon: <QuotaIcon/>,
      title: "سهمیه",
      navigate: '/quota'
    },
    {},
    {
      id: 5,
      icon: <FaTimes/>,
      title: "",
    },
  ];

  return (
    <>
      {useWindowWidth() > 550 ?
        <footer className="bg-primary-50 mt-12">
          <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} بیمه‌یار — نمونه TypeScript و Vite
          </div>
        </footer>
        :
        <>
          <div
            className="md:hidden fixed bottom-0 left-0 right-0  p-4 flex border border-gridColor bg-white justify-around items-center shadow-xl rounded-t-3xl z-30 ">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center cursor-pointer"
                onClick={() => {
                  setSelectedTab(item.id);
                  if (item.history) {
                    history(item.history)
                  } else {
                    setIsModalOpen(true)
                  }
                }}
              >
                {selectedTab === item.id && (
                  <motion.div
                    layoutId="indicator"
                    className="absolute -top-12 w-16 h-16 bg-white rounded-full flex items-center justify-center "
                    transition={{type: "spring", stiffness: 300, damping: 20}}
                  >
                    <div
                      className=" text-gray-800  w-12 h-12 bg-gradient-to-r from-customBlue/50 to-customBlue rounded-full flex items-center justify-center shadow-2xl ">
                      {item.icon}
                    </div>
                  </motion.div>
                )}
                <span
                  className={`text-gray-800 ${selectedTab === item.id ? "opacity-0" : "opacity-100"}`}
                >
              {item.icon}
            </span>
                <span className="text-xs text-gray-800 mt-1">{item.label}</span>
              </div>
            ))}
          </div>

          {/* مودال */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
                transition={{duration: 0.3}}
                className="fixed top-0 left-0 w-full h-full bg-white/75 flex flex-col items-center justify-center z-[1000001] overflow-hidden"
              >
                <div
                  className={
                    "grid grid-cols-3 w-full justify-items-center bottom-3 gap-5  fixed "
                  }
                >
                  {servicesData.map((item) => (
                    <div key={item.id}>
                      {item.id && item.id !== 5 ? (
                        <div
                          onClick={() => {
                            history(item.navigate!)
                            setIsModalOpen(false)
                            setSelectedTab(currentPath)
                          }}
                          className={
                            "bg-gradient-to-r from-sliderColor to-customBlue/90 text-sliderBlueColor rounded-xl flex flex-col items-center justify-center w-[90px] h-[90px] shadow-xl"
                          }
                        >
                          <div className={"mb-2"}>{item.icon}</div>
                          <p className={"text-[12px]"}>{item.title}</p>
                        </div>
                      ) : item.id ? (
                        <div
                          onClick={() => {
                            setIsModalOpen(false)
                            setSelectedTab(currentPath)
                          }}
                          className="w-12 h-12 bg-gradient-to-r from-sliderColor  to-customBlue/80 text-sliderBlueColor   rounded-full flex  items-center justify-center shadow-md ml-4 my-8"
                        >
                          {item.icon}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      }
    </>
  );
};

export default BottomNav;

