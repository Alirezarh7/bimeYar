import {useState} from "react";
import {useRegister} from "../../../../service/auth.service.ts";

interface RegisterStepProps {
  phone: string;
  onComplete: () => void;
}

const RegisterStep = ({phone, onComplete}: RegisterStepProps) => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    nationalId: "",
    city: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({...profile, [e.target.name]: e.target.value});
  };

  const {mutate} = useRegister()
  const handleRegister = async () => {
    mutate({
      phone: phone, profile: {
        firstName: profile.firstName,
        lastName: profile.lastName,
        nationalId: profile.nationalId,
        city: profile.city,
      }
    }, {
      onSuccess: (value) => {
        console.log(value)
      }
    })
    onComplete();
  };
  const inputData = {
    name: ["firstName", "lastName", "nationalId", "city"],
    placeholder: ["نام خانوادگی", "نام", "کدملی", "شهر"]
  }
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-center text-[var(--primary)]">
        تکمیل اطلاعات
      </h2>
      <div className={'grid grid-cols-2 gap-4'}>
        {inputData.name.map((field, index) => (
          <input
            key={field}
            name={field}
            value={(profile as any)[field]}
            onChange={handleChange}
            placeholder={inputData.placeholder[index]} // اینجا فارسی قرار می‌گیرد
            className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[var(--primary)]"
          />
        ))}
      </div>
      <button
        onClick={handleRegister}
        className="bg-[var(--primary)] text-white rounded-xl py-3 hover:opacity-90 transition"
      >
        ثبت‌نام
      </button>
    </div>
  );
};

export default RegisterStep;
