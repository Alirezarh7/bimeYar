import { useEffect, useRef, useState } from "react";
import { useToken } from "../../../service/auth.service.ts";

interface OtpStepProps {
  phone: string;
  onSuccess: (userExists: boolean) => void;
}

const OtpStep = ({ phone, onSuccess }: OtpStepProps) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const submittingRef = useRef(false);
  const { mutate } = useToken();

  const focusInput = (idx: number) => {
    const el = inputsRef.current[idx];
    if (!el) return;
    el.focus();
    el.select();
  };

  // روی مانت شدن: فوکوس روی اولین اینپوت
  useEffect(() => {
    const t = setTimeout(() => focusInput(0), 50);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (index: number, raw: string) => {
    const val = raw.replace(/\D/g, "").slice(-1); // فقط یک رقم قبول کن
    const next = [...otp];
    next[index] = val;
    setOtp(next);

    if (val && index < otp.length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      // اگر این خانه مقدار داره، فقط پاکش کن
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        focusInput(index);
      } else if (index > 0) {
        // اگر خالیه، برو به قبلی و اون رو پاک کن
        const prev = index - 1;
        const newOtp = [...otp];
        newOtp[prev] = "";
        setOtp(newOtp);
        focusInput(prev);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      focusInput(index - 1);
    } else if (e.key === "ArrowRight" && index < otp.length - 1) {
      e.preventDefault();
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (!pasted) return;
    const arr = ["", "", "", ""];
    pasted.split("").forEach((ch, i) => (arr[i] = ch));
    setOtp(arr);
    // فوکوس روی آخرین خانه وارد شده
    const lastIdx = Math.min(pasted.length, 4) - 1;
    focusInput(Math.max(0, lastIdx));
  };

  const doMutate = (code: string) => {
    if (submittingRef.current) return;
    submittingRef.current = true;
    mutate(
      { phone, code },
      {
        onSuccess: (value) => {
          if (value.status === 204) {
            onSuccess(false);
          } else if (value.status === 200) {
            localStorage.setItem("profile", JSON.stringify(value.data?.user));
            localStorage.setItem("token", JSON.stringify(value.data?.token));
            window.dispatchEvent(
              new CustomEvent("auth:login", {
                detail: value.data.user,
              })
            );
            onSuccess(true);
          }
        },
        onSettled: () => {
          submittingRef.current = false;
        },
      }
    );
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code.length !== 4) return;
    doMutate(code);
  };

  // وقتی همه پر شد خودکار ارسال کن
  useEffect(() => {
    if (otp.every((c) => c !== "")) {
      doMutate(otp.join(""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp.join("")]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-center text-[var(--primary)]">کد ارسال شده به {phone}</h2>

      {/* مهم: dir="ltr" تا ترتیب و فوکوس از چپ به راست باشه */}
      <div className="flex justify-center gap-3" dir="ltr">
        {otp.map((value, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center border border-gray-300 rounded-xl text-lg text-card-foreground"
            style={{ direction: "ltr" }} // caret و ورودی هم LTR باشه
          />
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          className="flex-1 bg-[var(--primary)] text-white rounded-xl py-3 hover:opacity-90 transition disabled:opacity-60"
          disabled={otp.join("").length !== 4 || submittingRef.current}
        >
          تایید
        </button>
      </div>
    </div>
  );
};

export default OtpStep;
