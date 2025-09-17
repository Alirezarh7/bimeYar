import {IoIosCloseCircleOutline, IoIosGitCompare} from 'react-icons/io';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useWindowWidth} from "../../../hook/useWindowWidth.ts";


interface IProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (e: boolean) => void;
}

const CustomSidebar = ({isSidebarOpen, setSidebarOpen}: IProps) => {

    const number = JSON.parse(localStorage.getItem('ComparisonInsuranceArr') as any)?.length
    const [numberSelect, setNumberSelect] = useState(number)
    useEffect(() => {
        const update = () => {
            const arr = JSON.parse(localStorage.getItem("ComparisonInsuranceArr") || "[]");
            setNumberSelect(arr.length);
        };
        window.addEventListener("comparison-update", update);

        return () => window.removeEventListener("comparison-update", update);
    }, []);
    const data = [
        {href: '/compare', icon: <IoIosGitCompare/>, src: '/compare', title: 'مشاهده مقایسه'},
    ];
    const withSize = useWindowWidth()
    return (
        <>

            <div className="rtl">
                {isSidebarOpen && withSize < 550 && (
                    <div
                        className={`fixed inset-0 bg-black/50 z-30`}
                        onClick={() => {
                            if (withSize < 550) {
                                setSidebarOpen(false)
                            }
                        }}
                    />
                )}
                <div
                    className={`fixed top-0 right-0 z-[9999] w-72 h-screen transition-transform duration-700 transform ${
                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="h-full px-3 py-4 bg-card  border-l border-primary  ">
                        {withSize < 550 ?
                            <IoIosCloseCircleOutline
                                className=" cursor-pointer text-primary w-9 h-9 fixed left-3 top-5  "
                                onClick={() => setSidebarOpen(false)}/>
                            : null}
                        <div className="w-full mt-12  flex flex-col items-center">
                            {data.map((item, index) =>
                                <Link key={index} to={item.href} onClick={() => setSidebarOpen(false)}
                                      className=" cursor-pointer hover:bg-gray-400 py-3 border-b border-primary w-full flex justify-around items-center ">
                                    <div className=" col-span-4 text-card-foreground">
                                        {item.title}
                                    </div>
                                    {}
                                    <div
                                        className=" flex justify-center items-center rounded-full text-sm  w-5 h-5 bg-badge-color text-card-foreground">
                                        {numberSelect ?? 0}
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomSidebar;