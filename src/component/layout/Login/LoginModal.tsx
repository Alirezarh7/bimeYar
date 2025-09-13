import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneStep from "./PhoneStep.tsx";
import OtpStep from "./OtpStep.tsx";
import RegisterStep from "./RegisterStep.tsx";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

type Step = "phone" | "otp" | "register";

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");


  const handlePhoneSubmit = (value: string) => {
    setPhone(value);
    setStep("otp");
  };

  const handleOtpSuccess = (userExists: boolean) => {
    if (userExists) {
      onClose();
    } else {
      setStep("register");
    }
  };

  // سایز مودال بسته به استپ تغییر کنه
  const modalSize = step === "register" ? "w-[500px] h-auto" : "w-[380px]";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* بک‌دراپ تار */}
          <motion.div className="fixed inset-0 bg-black/40 z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />

          {/* مودال مربعی که از پایین میاد وسط */}
          <motion.div
            key={step}
            className={`fixed bg-card rounded-2xl shadow-2xl p-6 z-50 ${modalSize}`}
            initial={{ y: "100%", opacity: 0, scale: 0.8 }}
            animate={{ y: "-50%", x: "-50%", top: "50%", left: "50%", opacity: 1, scale: 1 }}
            exit={{ y: "100%", opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            {step === "phone" && <PhoneStep onSubmit={handlePhoneSubmit} />}
            {step === "otp" && <OtpStep phone={phone} onSuccess={handleOtpSuccess} />}
            {step === "register" && <RegisterStep phone={phone} onComplete={onClose} />}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
