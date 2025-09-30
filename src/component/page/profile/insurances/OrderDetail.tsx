import React from "react";

// --- Icons ---
import { FiChevronLeft, FiEdit, FiInfo, FiPercent } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";
import BimehIranLogo from "/bime-iran-logo.png"; // لوگو را در این مسیر قرار دهید
import DetailsCard from "./DetailsCard";
import Stepper from "./Stepper";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// ۳. نوع Variants را به این متغیر هم اضافه کنید
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
// --- Data for the card ---
const cardSections = [
  {
    title: "اطلاعات وسیله نقلیه",
    icon: <IoCarSportOutline size={22} />,
    data: [
      { label: "نوع وسیله نقلیه", value: "سواری" },
      { label: "برند و مدل", value: "پژو، ۲۰۶-تیپ ۵" },
      { label: "سال ساخت", value: "۱۳۸۵-۲۰۰۶" },
    ],
  },
  {
    title: "اطلاعات بیمه‌نامه",
    icon: <FiInfo size={22} />,
    data: [
      { label: "شرکت بیمه‌گر قبلی", value: "ایران" },
      { label: "تاریخ شروع بیمه‌نامه قبلی", value: "۱۴۰۱/۱۰/۲۸" },
      { label: "تاریخ اتمام بیمه‌نامه قبلی", value: "۱۴۰۲/۰۲/۲۷" },
      { label: "سطح پوشش", value: "۳۰,۰۰۰,۰۰۰ تومان" },
      { label: "مدت اعتبار", value: "دو ماهه" },
      { label: "تاریخ درخواست", value: "۱۴۰۲/۰۲/۲۷" },
      { label: "قیمت بیمه‌نامه", value: "۱,۳۱۱,۶۶۱ تومان" },
    ],
  },
  {
    title: "تخفیف بیمه‌نامه",
    icon: <FiPercent size={22} />,
    data: [
      { label: "درصد تخفیف بیمه‌نامه قبلی", value: "۵ درصد" },
      { label: "درصد تخفیف حوادث راننده", value: "۵ درصد" },
      { label: "از بیمه قبلی خود خسارت گرفته‌اید؟", value: "خیر" },
    ],
  },
];

const OrderDetailsPage = () => {
  const steps = [
    "تکمیل اطلاعات",
    "در انتظار پرداخت",
    "در حال بررسی",
    "در حال صدور",
    "آماده تحویل",
  ];
  const currentStep = 2; // Step 2 is active

  return (
    <motion.div
      className="p-4 sm:p-8 bg-[var(--background)] min-h-screen"
      dir="rtl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // انیمیشن هنگام خروج از صفحه
    >
      {/* --- Header --- */}
      <motion.header
        className="max-w-4xl mx-auto flex justify-between items-center mb-4"
        variants={itemVariants} // اعمال انیمیشن برای هر آیتم
      >
        <div className="text-left">
          <p className="text-sm text-[var(--muted)]">شماره سفارش</p>
          <p className="font-bold text-lg text-[var(--primary)]">۳۰۰۷۳۲۷۷۹۱</p>
        </div>
        <h1 className="text-2xl font-bold">بیمه شخص ثالث</h1>
        <div>
          <img
            src={BimehIranLogo}
            alt="لوگوی بیمه ایران"
            className="w-16 h-16"
          />
        </div>
      </motion.header>

      {/* --- Stepper --- */}
      <motion.div variants={itemVariants}>
        <Stepper steps={steps} currentStep={currentStep} />
      </motion.div>

      {/* --- Details Card with Action Buttons --- */}
      <motion.div variants={itemVariants}>
        <DetailsCard title="مشخصات سفارش" sections={cardSections}>
          <div className="flex items-center gap-x-6">
            <button className="flex items-center gap-x-1 text-sm text-[var(--primary)] hover:underline">
              <FiEdit />
              ویرایش
            </button>
            <button className="flex items-center gap-x-2 bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              تایید و ادامه
              <FiChevronLeft size={20} />
            </button>
          </div>
        </DetailsCard>
      </motion.div>
    </motion.div>
  );
};

export default OrderDetailsPage;
