import {motion, AnimatePresence} from "framer-motion";
import {IoIosGitCompare} from "react-icons/io";
import {useEffect, useState} from "react";

interface GadgetButtonProps {
    onClick: () => void;
    show: boolean;
}

export const GadgetButton = ({onClick, show}: GadgetButtonProps) => {
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
    return (
        <>
            {numberSelect ?
                <AnimatePresence>
                    {show && (
                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 100, opacity: 0}}
                            transition={{duration: 0.4}}
                            className="fixed -right-2 z-50 "
                            style={{top: 100}}
                            drag="y"
                            dragConstraints={{top: 0, bottom: window.innerHeight - window.innerHeight / 2}}
                            dragElastic={0.2}
                        >

                            <button
                                onClick={onClick}
                                className="w-fit p-2 rounded-full bg-primary border border-foreground text-white shadow-lg flex items-center justify-center active:scale-95 transition"
                            >
                                <IoIosGitCompare className={'w-8 h-8'}/>
                            </button>
                            <p className={' absolute left-1 top-10  flex justify-center items-center rounded-full text-sm  w-5 h-5 bg-badge-color text-card-foreground'}>
                                {numberSelect}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
                : null}
        </>
    );
};
