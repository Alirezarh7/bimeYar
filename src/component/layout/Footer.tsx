import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FaTimes} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";
import {AllocationIcon, CycleIcon, HeadlineIcon, ManagementIcon, MemberIcon, QuotaIcon} from "../../icons/Icon.tsx";
import {MdOutlineManageAccounts} from "react-icons/md";
import {RiCustomerService2Line} from "react-icons/ri";
import {TfiHome} from "react-icons/tfi";
import {useWindowWidth} from "../../hook/useWindowWidth.ts";

const Footer = () => {
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
      icon: <TfiHome className={selectedTab === '/' ? "text-primary" : "text-muted"}/>,
      label: "خانه",
      history: '/'
    },
    {
      id: '/profile-asd',
      icon: <TfiHome className={selectedTab === '/' ? "text-primary" : "text-muted"}/>,
      label: "اقساط و اعتبار",
      history: '/profile-asd'
    },
    {
      id: 2,
      icon: <RiCustomerService2Line className={"text-muted"}/>,
      label: "خدمات",
    },
    {
      id: '/profile',
      icon: <MdOutlineManageAccounts className={selectedTab === '/' ? "text-primary" : "text-muted"}/>,
      label: "پروفایل",
      history: '/profile',
    },
    {
      id: 3,
      icon: <MdOutlineManageAccounts  className={"text-muted"}/>,
      label: "چت بات",
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
          <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-muted">
            © {new Date().getFullYear()} بیمه‌یار — نمونه TypeScript و Vite
          </div>
        </footer>
        :
        <>
          <div
            className=" fixed bottom-0 left-0 right-0 py-2 px-4 flex border border-primary bg-footerBack justify-between items-center shadow-xl rounded-t-3xl z-30 ">
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
                    className="absolute -top-10 w-fit p-1 bg-footerBack rounded-full flex items-center justify-center "
                    transition={{type: "spring", stiffness: 300, damping: 20}}
                  >
                    <div
                      className="w-10 h-10 border border-primary rounded-full flex items-center justify-center shadow-2xl ">
                      {item.icon}
                    </div>
                  </motion.div>
                )}
                <span
                  className={` ${selectedTab === item.id ? "opacity-0" : "opacity-100"}`}
                >
              {item.icon}
            </span>
                <span className="text-[10.5px] text-muted mt-1">{item.label}</span>
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
                className="fixed top-0 left-0 w-full h-full bg-white/70 flex flex-col items-center justify-center z-[1000001] overflow-hidden"
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
                            " border border-muted text-sliderBlueColor rounded-xl flex flex-col items-center justify-center w-[90px] h-[90px] shadow-xl"
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
                          className="w-10 h-10 border border-primary bg-white text-sliderBlueColor rounded-full flex  items-center justify-center shadow-md mr-[14.5px] my-7"
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

export default Footer;

