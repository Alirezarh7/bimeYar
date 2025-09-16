import { motion, AnimatePresence } from "framer-motion";
import {IoIosGitCompare} from "react-icons/io";

interface GadgetButtonProps {
    onClick: () => void;
    show: boolean;
}

export const GadgetButton = ({ onClick, show }: GadgetButtonProps) => {


    console.log(window.innerHeight)
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed -right-2 z-50"
                    style={{ top: 100 }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: window.innerHeight - window.innerHeight/2 }}
                    dragElastic={0.2}
                >
                    <button
                        onClick={onClick}
                        className="w-fit p-2 rounded-full bg-primary border border-foreground text-white shadow-lg flex items-center justify-center active:scale-95 transition"
                    >
                        <IoIosGitCompare className={'w-8 h-8'} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
