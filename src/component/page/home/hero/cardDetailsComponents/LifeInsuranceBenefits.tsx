import type { FC } from "react";

const LifeInsuranceBenefits: FC = () => {
  return (
    <div className="flex flex-col w-full p-5">
      <img src="/Life_insurance_advantage_ab6d2b6e97.svg" alt="svg" className="w-56 h-56 mb-10 self-center" />

      <h1 className="text-2xl font-bold mb-4 text-primary">مزایای بیمه عمر و سرمایه‌گذاری</h1>

      <p className="text-card-foreground leading-8 mb-6">
        بیمه عمر فقط برای جبران خسارت ناشی از فوت یا ازکارافتادگی نیست؛ بلکه فرصتی ارزشمند برای ایجاد امنیت مالی و پس‌انداز بلندمدت نیز به شمار می‌آید. با خرید این بیمه، از مزایای زیر برخوردار خواهید
        شد:
      </p>

      <ul className="list-disc pr-6 space-y-2 text-card-foreground">
        <li>امکان دریافت وام تا ۹۰٪ از اندوخته بیمه‌نامه بدون نیاز به ضامن</li>
        <li>افزایش سالانه حق بیمه بین ۵ تا ۳۰٪ برای حفظ ارزش سرمایه در برابر تورم</li>
        <li>سود تضمینی به همراه مشارکت در سود اندوخته بیمه‌نامه</li>
        <li>امکان بازخرید کل سرمایه در هر زمان از قرارداد و دریافت آن به‌صورت یک‌جا</li>
      </ul>
    </div>
  );
};

export default LifeInsuranceBenefits;
