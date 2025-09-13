import { useState } from "react";

interface PhoneStepProps {
  onSubmit: (phone: string) => void;
}

const PhoneStep = ({ onSubmit }: PhoneStepProps) => {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-center text-[var(--primary)]">ورود / ثبت ‌نام</h2>
      <input
        type="tel"
        placeholder="شماره موبایل"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border border-gray-300 rounded-xl p-3 text-center placeholder:text-card-foreground text-card-foreground"
      />
      <button onClick={() => onSubmit(phone)} className="bg-primary text-primary-foreground rounded-xl py-3 hover:opacity-90 transition">
        ادامه
      </button>
    </div>
  );
};

export default PhoneStep;
