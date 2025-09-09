import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FaTimes} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";
import {CarIcon, HeadlineIcon, MemberIcon} from "../../../icons/Icon.tsx";
import {MdOutlineManageAccounts} from "react-icons/md";
import {RiCustomerService2Line} from "react-icons/ri";
import {TfiHome} from "react-icons/tfi";
import {useWindowWidth} from "../../../hook/useWindowWidth.ts";
import {CiCreditCard2} from "react-icons/ci";
import {useModalStore} from "../../../store/modalStore.ts";
import {AiOutlineEnter} from "react-icons/ai";
import {BsChatRightText} from "react-icons/bs";
import ChatbotBottomSheetModal from "./ChatbotBottomSheetModal.tsx";
import LoginModal from "../Login/LoginModal.tsx";


const Footer = () => {
  const [profile, setProfile] = useState(() => {
    return JSON.parse(localStorage.getItem("profile") || "null");
  });

  useEffect(() => {
    const loginListener = (e: CustomEvent) => {
      setProfile(e.detail);
    };

    const logoutListener = () => {
      setProfile(null);
    };

    window.addEventListener('auth:login', loginListener as EventListener);
    window.addEventListener('auth:logout', logoutListener);

    return () => {
      window.removeEventListener('auth:login', loginListener as EventListener);
      window.removeEventListener('auth:logout', logoutListener);
    };
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    setSelectedTab(currentPath);
  }, [currentPath]);
  const [selectedTab, setSelectedTab] = useState<string | number>(currentPath);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {modals, open, close} = useModalStore();
  const isOpenLoginBottomSheetModal = modals['LoginBottomSheetModal'];
  const isOpenChatbotBottomSheetModal = modals['ChatbotBottomSheetModal'];
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
      id: profile?.firstName ? '/profile/value' : 3,
      icon: <CiCreditCard2 className={selectedTab === '/profile/value' ? "text-primary" : "text-muted"}/>,
      label: "اقساط و اعتبار",
      history: profile?.firstName ? '/profile/value' : null
    },
    {
      id: 2,
      icon: <RiCustomerService2Line className={"text-muted"}/>,
      label: "خدمات",
    },
    {
      id: profile?.firstName ? '/profile' : 4,
      icon: profile?.firstName ? <MdOutlineManageAccounts className={selectedTab === '/profile' ? "text-primary" : "text-muted"}/> :
        <AiOutlineEnter className={selectedTab === '/profile' ? "text-primary" : "text-muted"}/>,
      label: profile?.firstName ? "پروفایل" : 'ورود/ ثبت نام',
      history: profile?.firstName ? '/profile' : null,
    },
    {
      id:  5,
      icon: <BsChatRightText className={"text-muted"}/>,
      label: "چت بات",
    },
  ];


  const servicesData = [
    {
      id: 1,
      icon: <CarIcon/>,
      title: "بیمه وسایل نقلیه",
      navigate: '/period-sub-period'
    },
    {
      id: 2,
      icon: <HeadlineIcon/>,
      title: "بیمه اموال",
      navigate: '/organ'
    },
    {
      id: 3,
      icon: <MemberIcon/>,
      title: "بیمه اشخاص",
      navigate: '/headline'
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
      {useWindowWidth() > 850 ?
        <footer className="bg-gradient-to-r from-primary to-white bg- ">
          <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-muted">
            <strong>کلیه حقوق این وب سایت محفوظ و متعلق به شرکت بیمه یار می‌باشد.</strong>
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
                    if (item.id === 2) {
                      setIsModalOpen(true)
                    } else if (item.id === 5) {
                      open('ChatbotBottomSheetModal')
                    } else {
                      open('LoginBottomSheetModal')
                    }
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
                            " border border-muted bg-footerBack text-sliderBlueColor rounded-xl flex flex-col items-center justify-center w-[90px] h-[90px] shadow-xl"
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
                          className="w-11 h-11 border border-primary bg-white text-sliderBlueColor  rounded-full flex  items-center justify-center shadow-md mr-[8px] my-7"
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
          <LoginModal open={isOpenLoginBottomSheetModal} onClose={() => {
            close('LoginBottomSheetModal')
            setSelectedTab(currentPath)
          }}/>
          {/*<LoginBottomSheetModal onClose={() => {*/}
          {/*  close('LoginBottomSheetModal')*/}
          {/*  setSelectedTab(currentPath)*/}
          {/*}} open={isOpenLoginBottomSheetModal}/>*/}
          <ChatbotBottomSheetModal onClose={() => {
            close('ChatbotBottomSheetModal')
            setSelectedTab(currentPath)
          }} open={isOpenChatbotBottomSheetModal}/>
        </>
      }
    </>
  );
};

export default Footer;

