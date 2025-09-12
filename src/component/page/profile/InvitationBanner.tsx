import React, { useState } from "react";
import { FiChevronLeft, FiCopy, FiCheck } from "react-icons/fi";
import { InventationIcom } from "../../../icons/Icon";

const InvitationBanner = () => {
  const referralCode = "azkVxtua";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div
      dir="rtl"
      className="relative w-full overflow-hidden rounded-2xl p-6 md:p-8 
                 bg-gradient-to-l from-[#E6F5FF] to-[#F5FAFF] border border-gray-100"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className=" flex w-full flex-col gap-5 text-center md:text-right">
          <h3 className="text-xl font-extrabold text-gray-900">
            با دعوت از دوستان خود، شارژ کیف پول دریافت کنید!
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
            ازکی را به دوستانتان معرفی کنید؛ با اولین خریدشان، آن‌ها تخفیف
            می‌گیرند و شما شارژ کیف پول ازکی و امتیاز ازکی کلاب دریافت می‌کنید.
          </p>

          <div className="flex w-full items-center justify-between rounded-xl bg-white/70 p-2 shadow-sm ring-1 ring-inset ring-gray-200 backdrop-blur-sm">
            <div className="flex items-center gap-2 pr-3">
              <span className="text-sm text-gray-500">کد معرف شما:</span>
              <span className="font-mono text-base font-bold text-gray-800">
                {referralCode}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200
                ${
                  isCopied
                    ? "bg-green-500 text-white"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
            >
              {isCopied ? (
                <>
                  <FiCheck />
                  <span>کپی شد!</span>
                </>
              ) : (
                <>
                  <FiCopy />
                  <span>کپی کردن</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-blue-700"
            >
              <span>دوستانتان را دعوت کنید</span>
              <FiChevronLeft />
            </a>
            <p className="text-sm text-gray-500">۱۰ دعوت باقی مانده</p>
          </div>
        </div>

        <div className="relative mt-4 h-48 w-48 shrink-0 md:h-auto md:w-64">
          <img
            src={`data:image/svg+xml;base64,${InventationIcom}`}
            alt="Invite Friends Vector"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationBanner;
