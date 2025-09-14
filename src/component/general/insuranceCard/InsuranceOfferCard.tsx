import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {PiGiftLight} from "react-icons/pi";
import CustomButton from "../button/Button.tsx";

interface IProps {

    company: { src: string; alt: string; name: string };
    stats: { label: string; value: string }[];
    price: string;
    oldPrice?: string;
    gift: string;
    footerLinks: { label: string; isToggle?: boolean; href?: string }[];
    installmentDetails?: { term: number; monthly: number; more: string };
}

export function InsuranceOfferCard(dataForShow: IProps) {
    const [showInstallmentDetails, setShowInstallmentDetails] = useState(false);

    const onAction = () => {

    };

    if (!dataForShow) return null;

    return (
        <div
            className="relative mx-auto max-w-3xl h-full bg-card rounded-xl shadow-md overflow-hidden border border-primary my-2">
            {dataForShow.oldPrice && (
                <div
                    className="absolute top-3 left-3 border border-primary bg-card text-foreground text-xs font-bold px-2 py-1 rounded-full z-10">
                    پیشنهاد ویژه
                </div>
            )}

            <div className="p-5">
                {/* بخش شرکت و آمار */}
                <div className="flex flex-col md:flex-row gap-5">
                    {/* بخش چپ: اطلاعات شرکت و آمار */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            {dataForShow.company.src ? (
                                <img
                                    src={dataForShow.company.src}
                                    alt={dataForShow.company.alt}
                                    className="w-12 h-12 object-contain rounded bg-white p-1"
                                />
                            ) : (
                                <div
                                    className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                                    لوگو
                                </div>
                            )}
                            <div className="text-lg font-bold text-foreground">
                                {dataForShow.company.name}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            {dataForShow.stats.map((s, idx) => (
                                <div key={idx} className="bg-card p-3 rounded-lg">
                                    <div className=" text-primary  mb-1 font-semibold">{s.label}</div>
                                    <div className=" text-foreground">
                                        {s.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* هدیه */}
                        {dataForShow.gift && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                className=" mb-4 flex gap-1"
                            >
                                <PiGiftLight className={'h-8 w-8 text-primary  '}/>
                                <div className="font-medium text-foreground mr-1 mt-1">{dataForShow.gift}</div>
                            </motion.div>
                        )}
                    </div>

                    {/* بخش راست: قیمت و دکمه‌ها */}
                    <div className="flex flex-col items-center gap-4 w-full md:w-40">
                        {/* قیمت */}
                        <motion.div
                            initial={{scale: 0.9, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            className="bg-card border border-primary p-4 rounded-lg w-full text-center"
                        >
                            <div className="text-2xl font-bold text-foreground">
                                {dataForShow.price}
                            </div>
                            {dataForShow.oldPrice && (
                                <div className="text-sm text-foreground line-through mb-1">
                                    {dataForShow.oldPrice}
                                </div>
                            )}
                            <div className="text-xs text-foreground mt-2">مبلغ به تومن</div>
                        </motion.div>

                        {/* دکمه‌ها */}
                        <div className="grid grid-cols-2 md:grid-cols-1  gap-2 w-full">
                            <CustomButton label={'خرید قسطی'} onClick={() => onAction()} type={'button'} variant={'primary'} />
                            <CustomButton label={'خرید نقدی'} onClick={() => onAction()} type={'button'} variant={'outLine'} />
                        </div>
                    </div>
                </div>

                {/* لینک‌های فوتر */}
                <div className="border-t border-primary pt-4 mt-4 flex flex-wrap gap-4 text-sm">
                    {dataForShow.footerLinks.map((l, idx) =>
                        l.isToggle ? (
                            <button
                                key={idx}
                                className="text-foreground hover:underline flex items-center gap-1"
                                onClick={() => setShowInstallmentDetails((v) => !v)}
                            >
                                {l.label}
                                <svg
                                    className={`w-4 h-4 transition-transform ${
                                        showInstallmentDetails ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <a
                                key={idx}
                                className="text-foreground hover:underline"
                                href={l.href || "#"}
                            >
                                {l.label}
                            </a>
                        )
                    )}
                </div>

                {/* جزئیات اقساط */}
                <AnimatePresence>
                    {showInstallmentDetails && dataForShow.installmentDetails && (
                        <motion.div
                            key="installment-details"
                            initial={{height: 0, opacity: 0}}
                            animate={{height: "auto", opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{duration: 0.3}}
                            className="mt-4 overflow-hidden"
                        >
                            <div className="bg-card p-4 rounded-lg">
                                <h4 className="font-semibold text-primary mb-2">
                                    جزئیات اقساط
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-foreground">مدت اقساط:</span>{" "}
                                        <span className="font-medium text-foreground ">
                      {dataForShow.installmentDetails.term} ماه
                    </span>
                                    </div>
                                    <div>
                                        <span className="text-foreground">قسط ماهیانه:</span>{" "}
                                        <span className="font-medium text-foreground">
                      {dataForShow.installmentDetails.monthly.toLocaleString()}{" "}
                                            تومان
                    </span>
                                    </div>
                                    {dataForShow.installmentDetails.more && (
                                        <div className="sm:col-span-2 text-foreground">
                                            {dataForShow.installmentDetails.more}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}