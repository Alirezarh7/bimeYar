import type { FC } from "react";

const ThirdPartyInsurance: FC = () => {
  return (
    <div className="flex flex-col w-full p-5">
      <img src="/product_data_image_edf1ce62b1.svg" alt="svg" className="w-56 h-56 mb-10 self-center" />
      <h1 className="text-2xl font-bold mb-4 text-primary">بیمه شخص ثالث چیست؟</h1>

      <p className="text-card-foreground leading-8 mb-6">
        بیمه شخص ثالث یک بیمه اجباری برای همه وسایل نقلیه است که خسارت‌های جانی (مانند دیه و هزینه‌های درمان) و مالی (مانند آسیب خودرو یا اموال دیگران) را در حوادث رانندگی جبران می‌کند. نداشتن این
        بیمه طبق قانون جدید باعث جریمه‌های سنگین و حتی توقیف خودرو می‌شود.
      </p>

      <p className="text-card-foreground leading-8 mb-6">
        «شخص ثالث» در این بیمه به هر فردی غیر از راننده و سرنشینان خودرو مقصر گفته می‌شود. شما می‌توانید به‌سادگی از طریق <span className="font-bold">بیمه یار</span>، استعلام بیمه شخص ثالث را آنلاین
        انجام دهید، قیمت بیمه شخص ثالث ۱۴۰۴ را محاسبه کنید و در صورت تمایل با شرایط ویژه اقساطی، بدون چک یا ضامن، بیمه خود را بخرید یا تمدید کنید.
      </p>

      <ul className="list-disc pr-6 space-y-2 text-card-foreground leading-8 mb-6">
        <li>مقایسه قیمت و خدمات تمام شرکت‌های بیمه</li>
        <li>امکان خرید قسطی بدون چک و ضامن</li>
        <li>پشتیبانی ۲۴ ساعته در تمام مراحل</li>
      </ul>

      <p className="text-card-foreground leading-8 font-semibold">همین حالا از طریق بیمه یار قیمت بیمه شخص ثالث خود را محاسبه کنید و تنها با چند دقیقه بیمه‌نامه معتبر خود را آنلاین خریداری نمایید.</p>
    </div>
  );
};

export default ThirdPartyInsurance;
