import type { FC } from "react";

const LifeInsuranceBenefits: FC = () => {
  return (
    <div className="flex flex-col w-full p-5">
      <h1 className="text-2xl font-bold mb-4 text-primary">مزایای بیمه عمر و سرمایه‌گذاری</h1>

      <p className="text-card-foreground leading-8 mb-6">مزایای بیمه عمر فقط به پرداخت غرامت فوت و از کارافتادگی محدود نمی‌شود. شما می‌توانید با خرید بیمه عمر از مزایای زیر هم استفاده کنید:</p>

      <ul className="list-disc pr-6 space-y-2 text-card-foreground">
        <li>امکان دریافت وام تا ۹۰ درصد اندوخته بیمه‌نامه بدون نیاز به ضامن</li>
        <li>امکان افزایش حق بیمه برای حفظ سرمایه بیمه‌نامه در مقابل تورم از ۵ تا ۳۰ درصد در هر سال</li>
        <li>پرداخت سود تضمینی و مشارکت به اندوخته بیمه‌نامه</li>
        <li>امکان بازخرید سرمایه بیمه‌نامه در هر زمان از مدت قرارداد به‌صورت یک‌جا</li>
      </ul>
    </div>
  );
};

export default LifeInsuranceBenefits;
