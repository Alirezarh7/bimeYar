import { useState, type FC } from "react";
import Steps from "../../component/general/step/Steps";
import Step from "../../component/general/step/Step";
import CustomSelect from "../../component/general/select/CustomSelect";
import CustomInput from "../../component/general/input/Input";
import { Controller, useForm } from "react-hook-form";
import { type ThirdPartyInsuranceType } from "../../type/thirdPartyInsuranceType";
import { thirdPartyInsuranceSchema } from "../../schema/thirdPartyInsuranceSchema";
import { zodResolver } from "./../../../node_modules/@hookform/resolvers/zod/src/zod";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const carTypeArr = [
  { label: "سواری", value: "sedan" },
  { label: "وانت", value: "pickup" },
  { label: "کامیون", value: "truck" },
  { label: "کامیونت", value: "small_truck" },
];
const sedanTypeArr = [
  { label: "شخصی", value: "private" },
  { label: "آژانس", value: "agency" },
  { label: "تاکسی درون شهری", value: "city_taxi" },
  { label: "تاکسی برون شهری", value: "intercity_taxi" },
];

// const pickupTypeArr = [
//   { label: "جرثقیل", value: "crane" },
//   { label: "یخچال دار", value: "refrigerated" },
//   { label: "بارکش", value: "cargo" },
//   { label: "تاکسی بار", value: "cargo_taxi" },
// ];

const carBrandArr = [
  { label: "پراید", value: "pride" },
  { label: "پژو", value: "peugeot" },
  { label: "رنو", value: "renault" },
  { label: "هیوندای", value: "hyundai" },
  { label: "کوییک", value: "quick" },
  { label: "کیا", value: "kia" },
  { label: "تیبا", value: "tiba" },
  { label: "سمند", value: "samand" },
  { label: "دنا", value: "dena" },
  { label: "جک", value: "jac" },
  { label: "SP0", value: "sp0" },
  { label: "آئودی", value: "audi" },
  { label: "آریا", value: "arya" },
  { label: "آریو", value: "ario" },
  { label: "آلفارومئو", value: "alfaromeo" },
  { label: "اتوبیانکی", value: "autobianchi" },
  { label: "اس دبلیو ام", value: "swm" },
  { label: "استین", value: "aston" },
  { label: "اسمارت", value: "smart" },
  { label: "اشکودا", value: "skoda" },
  { label: "اطلس", value: "atlas" },
  { label: "اف ام سی", value: "fmc" },
  { label: "الدزمبیل", value: "oldsmobile" },
  { label: "ام جی", value: "mg" },
  { label: "ام وی ام", value: "mvm" },
  { label: "اپل", value: "opel" },
  { label: "اکستریم", value: "extreme" },
  { label: "ایسوزو", value: "isuzu" },
  { label: "اینفینیتی", value: "infiniti" },
  { label: "ب ام و", value: "bmw" },
  { label: "باک", value: "buick" },
  { label: "بایک", value: "baic" },
  { label: "برلیانس", value: "brilliance" },
  { label: "بسترن", value: "besturn" },
  { label: "بنتلی", value: "bentley" },
  { label: "بنز", value: "benz" },
  { label: "بهمن", value: "bahman" },
  { label: "بورگوارد", value: "borgward" },
  { label: "بوگاتی", value: "bugatti" },
  { label: "بی وای دی", value: "byd" },
  { label: "بیسو", value: "bisu" },
  { label: "بیوک", value: "buick" },
  { label: "تارا", value: "tara" },
  { label: "تانک", value: "tank" },
  { label: "تریومف", value: "triumph" },
  { label: "تویوتا", value: "toyota" },
  { label: "تیارا", value: "tiara" },
  { label: "تیگو", value: "tiggo" },
  { label: "جگوار", value: "jaguar" },
  { label: "جی ام سی", value: "gmc" },
  { label: "جی ای سی", value: "jac" },
  { label: "جیلی", value: "geely" },
  { label: "جیپ", value: "jeep" },
  { label: "دامای", value: "damai" },
  { label: "دانگ فنگ", value: "dongfeng" },
  { label: "دایهاتسو", value: "daihatsu" },
  { label: "دایون", value: "dayun" },
  { label: "دوج", value: "dodge" },
  { label: "دوو", value: "daewoo" },
  { label: "دی اس", value: "ds" },
  { label: "دیار خودرو", value: "diyar" },
  { label: "دیگنیتی", value: "dignity" },
  { label: "رانا", value: "rana" },
  { label: "راین", value: "rayen" },
  { label: "رولز رویس", value: "rollsroyce" },
  { label: "روور", value: "rover" },
  { label: "ری را", value: "rirra" },
  { label: "ریگان", value: "rigan" },
  { label: "زوتی", value: "zotye" },
  { label: "سئات", value: "seat" },
  { label: "سانگ یانگ", value: "ssangyong" },
  { label: "ساینا", value: "saina" },
  { label: "سهند", value: "sahand" },
  { label: "سوبارو", value: "subaru" },
  { label: "سوزوکی", value: "suzuki" },
  { label: "سیتروئن", value: "citroen" },
  { label: "سیناد", value: "sinad" },
  { label: "شاهین", value: "shahin" },
  { label: "شورلت", value: "chevrolet" },
  { label: "فراری", value: "ferrari" },
  { label: "فوتون", value: "foton" },
  { label: "فورد", value: "ford" },
  { label: "فولکس", value: "volkswagen" },
  { label: "فونیکس", value: "fonix" },
  { label: "فیات", value: "fiat" },
  { label: "فیدلیتی", value: "fidelity" },
  { label: "لئو", value: "leo" },
  { label: "لادا", value: "lada" },
  { label: "لاماری", value: "lamari" },
  { label: "لامبورگینی", value: "lamborghini" },
  { label: "لانچیا", value: "lancia" },
  { label: "لندرور", value: "landrover" },
  { label: "لندمارک", value: "landmark" },
  { label: "لوبو", value: "lobo" },
  { label: "لوتوس", value: "lotus" },
  { label: "لوکانو", value: "lucano" },
  { label: "لکسوس", value: "lexus" },
  { label: "لکسوژن", value: "luxgen" },
  { label: "لیفان", value: "lifan" },
  { label: "لینکلن", value: "lincoln" },
  { label: "مازراتی", value: "maserati" },
  { label: "مانیان", value: "manian" },
  { label: "مزدا", value: "mazda" },
  { label: "مکث موتور", value: "maxmotor" },
  { label: "میتسوبیشی", value: "mitsubishi" },
  { label: "مینی ماینر", value: "mini" },
  { label: "نیسان", value: "nissan" },
  { label: "هامر", value: "hummer" },
  { label: "هاوال", value: "haval" },
  { label: "هایما", value: "haima" },
  { label: "هن تنگ", value: "hanteng" },
  { label: "هوندا", value: "honda" },
  { label: "هونگچی", value: "hongqi" },
  { label: "هیلمن", value: "hillman" },
  { label: "ولوو", value: "volvo" },
  { label: "ونوسیا", value: "venucia" },
  { label: "وی جی وی", value: "vgv" },
  { label: "پاژن", value: "pajun" },
  { label: "پروتون", value: "proton" },
  { label: "پلیموث", value: "plymouth" },
  { label: "پورشه", value: "porsche" },
  { label: "پونتیاک", value: "pontiac" },
  { label: "پیکان", value: "peykan" },
  { label: "چانگان", value: "changan" },
  { label: "چری", value: "chery" },
  { label: "کادیلاک", value: "cadillac" },
  { label: "کرایسلر", value: "chrysler" },
  { label: "کوپا", value: "copa" },
  { label: "کی ام سی", value: "kmc" },
  { label: "گریت وال", value: "greatwall" },
  { label: "گک گونو", value: "gonow" },
  { label: "یوآز", value: "uaz" },
];

const yearsArr = [
  { label: "2025 - 1404", value: "2025" },
  { label: "2024 - 1403", value: "2024" },
  { label: "2023 - 1402", value: "2023" },
  { label: "2022 - 1401", value: "2022" },
  { label: "2021 - 1400", value: "2021" },
  { label: "2020 - 1399", value: "2020" },
  { label: "2019 - 1398", value: "2019" },
  { label: "2018 - 1397", value: "2018" },
  { label: "2017 - 1396", value: "2017" },
  { label: "2016 - 1395", value: "2016" },
  { label: "2015 - 1394", value: "2015" },
  { label: "2014 - 1393", value: "2014" },
  { label: "2013 - 1392", value: "2013" },
  { label: "2012 - 1391", value: "2012" },
  { label: "2011 - 1390", value: "2011" },
  { label: "2010 - 1389", value: "2010" },
  { label: "2009 - 1388", value: "2009" },
  { label: "2008 - 1387", value: "2008" },
  { label: "2007 - 1386", value: "2007" },
  { label: "2006 - 1385", value: "2006" },
  { label: "2005 - 1384", value: "2005" },
  { label: "2004 - 1383", value: "2004" },
  { label: "2003 - 1382", value: "2003" },
  { label: "2002 - 1381", value: "2002" },
  { label: "2001 - 1380", value: "2001" },
  { label: "2000 - 1379", value: "2000" },
  { label: "1999 - 1378", value: "1999" },
  { label: "1998 - 1377", value: "1998" },
  { label: "1997 - 1376", value: "1997" },
  { label: "1996 - 1375", value: "1996" },
  { label: "1995 - 1374", value: "1995" },
  { label: "1994 - 1373", value: "1994" },
  { label: "1993 - 1372", value: "1993" },
  { label: "1992 - 1371", value: "1992" },
  { label: "1991 - 1370", value: "1991" },
  { label: "1990 - 1369", value: "1990" },
  { label: "1989 - 1368", value: "1989" },
  { label: "1988 - 1367", value: "1988" },
  { label: "1987 - 1366", value: "1987" },
  { label: "1986 - 1365", value: "1986" },
  { label: "1985 - 1364", value: "1985" },
  { label: "1984 - 1363", value: "1984" },
];
const insuranceCompanies = [
  { label: "ایران", value: "iran" },
  { label: "آسیا", value: "asia" },
  { label: "البرز", value: "alborz" },
  { label: "پارسیان", value: "parsian" },
  { label: "دانا", value: "dana" },
  { label: "سرمد", value: "sarmad" },
  { label: "آرمان", value: "arman" },
  { label: "آسماری", value: "asemari" },
  { label: "امید", value: "omid" },
  { label: "تجارت نو", value: "tejarat_no" },
  { label: "تعاون", value: "taavon" },
  { label: "حافظ", value: "hafez" },
  { label: "حکمت صبا", value: "hekmat_saba" },
  { label: "خاورمیانه", value: "khavarmiyaneh" },
  { label: "دی", value: "day" },
  { label: "رازی", value: "razi" },
  { label: "سامان", value: "saman" },
  { label: "سینا", value: "sina" },
  { label: "ما", value: "ma" },
  { label: "معلم", value: "moallem" },
  { label: "ملت", value: "mellat" },
  { label: "میهن", value: "mihan" },
  { label: "نوین", value: "novin" },
  { label: "هوشمند فردا", value: "hooshmand_farda" },
  { label: "پاسارگاد", value: "pasargad" },
  { label: "پردیس", value: "pardis" },
  { label: "کارآفرین", value: "karafarin" },
  { label: "کوثر", value: "kosar" },
];

const ThirdPartyInsurance: FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const steps = 7;
  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<ThirdPartyInsuranceType>({
    resolver: zodResolver(thirdPartyInsuranceSchema),
  });

  const hasInsuranceVal = watch("hasInsurance");

  const nextStepHandler = async () => {
    if (activeStep === 1) {
      const cartypeValid = await trigger("carType");

      if (!cartypeValid) {
        enqueueSnackbar(errors.carType?.message ? errors.carType?.message : "نوع خودرو را انتخاب کنید", { variant: "error" });
        return;
      }
    }
    if (activeStep === 2) {
      const carUsageValid = await trigger("carUsage");
      if (!carUsageValid && errors.carUsage) {
        enqueueSnackbar(errors.carUsage.message, { variant: "error" });
        return;
      }
    }
    if (activeStep === 3) {
      const carBrandValid = await trigger("carBrand");
      if (!carBrandValid && errors.carBrand) {
        enqueueSnackbar(errors.carBrand.message, { variant: "error" });
        return;
      }
    }
    if (activeStep === 4) {
      const carYearValid = await trigger("carYear");
      if (!carYearValid && errors.carYear) {
        enqueueSnackbar(errors.carYear.message, { variant: "error" });
        return;
      }
    }
    if (activeStep === 5) {
      const hasInsuranceValid = await trigger("hasInsurance");
      if (!hasInsuranceValid && errors.hasInsurance) {
        enqueueSnackbar(errors.hasInsurance.message, { variant: "error" });
        return;
      }
    }
    if (activeStep === 6) {
      const prevInsuranceCompanyValid = await trigger("prevInsuranceCompany");
      if (!prevInsuranceCompanyValid && errors.prevInsuranceCompany) {
        enqueueSnackbar(errors.prevInsuranceCompany.message, { variant: "error" });
        return;
      }
    }
    if (activeStep === 7) {
      const prevInsuranceStartDateValid = await trigger("prevInsuranceStartDate");
      if (!prevInsuranceStartDateValid && errors.prevInsuranceStartDate) {
        enqueueSnackbar(errors.prevInsuranceStartDate.message, { variant: "error" });
        return;
      }
    }
    if (activeStep === steps) {
      handleSubmit(async (data) => {
        await localStorage.setItem("BuyInsurance", JSON.stringify(data));
        navigate("/insurance");
      })();
      return;
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };
  const prevStepHandler = () => {
    if (activeStep === 1) {
      return;
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-7xl px-5 mx-auto my-10">
      <div className="w-full px-5 bg-card rounded-xl shadow-lg py-10">
        <h4 className="text-xl md:text-3xl text-foreground font-bold">خرید بیمه شخص ثالث خودرو</h4>
        <Steps activeStep={activeStep} steps={steps}>
          <Step activeStep={activeStep} number={1} />
          <Step activeStep={activeStep} number={2} />
          <Step activeStep={activeStep} number={3} />
          <Step activeStep={activeStep} number={4} />
          <Step activeStep={activeStep} number={5} />
          <Step activeStep={activeStep} number={6} />
          <Step activeStep={activeStep} number={7} />
        </Steps>

        <div className="w-full max-w-5xl mx-auto p-5">
          {activeStep === 1 && (
            <div className="flex flex-col gap-10 items-center justify-center w-full ">
              <h4 className="text-lg text-foreground font-semibold">نوع خودرو را انتخاب کنید</h4>
              <Controller
                name="carType"
                control={control}
                render={({ field }) => <CustomSelect value={field.value} className="w-full md:w-1/2" options={carTypeArr} placeholder="انتخاب نوع خودرو" onChange={field.onChange} important />}
              />
              {/* {errors.carType && <p className="text-red-500 text-sm">{errors.carType.message}</p>} */}
            </div>
          )}
          {activeStep === 2 && (
            <div className="flex flex-col gap-10 items-center justify-center w-full ">
              <h4 className="text-lg text-foreground font-semibold">کاربری خودرو را انتخاب کنید</h4>
              <Controller
                name="carUsage"
                control={control}
                render={({ field }) => <CustomSelect value={field.value} className="w-full md:w-1/2" options={sedanTypeArr} placeholder="انتخاب کاربری" onChange={field.onChange} important />}
              />
            </div>
          )}
          {activeStep === 3 && (
            <div className="flex flex-col gap-10 items-center justify-center w-full ">
              <h4 className="text-lg text-foreground font-semibold">برند خودرو را انتخاب کنید</h4>
              <Controller
                name="carBrand"
                control={control}
                render={({ field }) => <CustomSelect value={field.value} className="w-full md:w-1/2" options={carBrandArr} placeholder="برند خودرو" onChange={field.onChange} important />}
              />
            </div>
          )}
          {activeStep === 4 && (
            <div className="flex flex-col gap-10 items-center justify-center w-full ">
              <h4 className="text-lg text-foreground font-semibold">سال تولید خودرو را انتخاب کنید</h4>
              <Controller
                name="carYear"
                control={control}
                render={({ field }) => <CustomSelect value={field.value} className="w-full md:w-1/2" options={yearsArr} placeholder="سال تولید خودرو" onChange={field.onChange} important />}
              />
            </div>
          )}
          {activeStep === 5 && (
            <div className="grid grid-cols-12 w-full ">
              <h5 className="font-semibold text-card-foreground col-span-12">آیا این خودرو تاکنون بیمه شخص ثالث داشته است؟</h5>
              <div className="flex flex-col gap-5 items-center col-span-12 my-10">
                <Controller
                  name="hasInsurance"
                  control={control}
                  render={({ field }) => (
                    <>
                      <button
                        type="button"
                        onClick={() => field.onChange("yes")}
                        className={`${hasInsuranceVal === "yes" ? "bg-primary" : "bg-secondary"} text-secondary-foreground rounded-2xl p-3 w-44 cursor-pointer`}
                      >
                        بله بیمه داشته است
                      </button>
                      <button
                        type="button"
                        onClick={() => field.onChange("new")}
                        className={`${hasInsuranceVal === "new" ? "bg-primary" : "bg-secondary"} text-secondary-foreground rounded-2xl p-3 w-44 cursor-pointer`}
                      >
                        خودرو صفر کیلومتر است
                      </button>
                      <button
                        type="button"
                        onClick={() => field.onChange("no")}
                        className={`${hasInsuranceVal === "no" ? "bg-primary" : "bg-secondary"} text-secondary-foreground rounded-2xl p-3 w-44 cursor-pointer`}
                      >
                        خیر بیمه نداشته است
                      </button>
                    </>
                  )}
                />
              </div>
            </div>
          )}
          {activeStep === 6 && (
            <div className="flex flex-col gap-10 items-center justify-center w-full ">
              <h4 className="text-lg text-foreground font-semibold">شرکت بیمه گر قبلی را انتخاب کنید</h4>
              <Controller
                name="prevInsuranceCompany"
                control={control}
                render={({ field }) => (
                  <CustomSelect value={field.value} className="w-full md:w-1/2" options={insuranceCompanies} placeholder="شرکت بیمه گر قبلی" onChange={field.onChange} important />
                )}
              />
            </div>
          )}
          {activeStep === 7 && (
            <div className="flex flex-col gap-10 items-center justify-center w-full ">
              <h4 className="text-lg text-foreground font-semibold">تاریخ شروع بیمه نامه قبلی را انتخاب کنید</h4>
              <Controller
                name="prevInsuranceStartDate"
                control={control}
                render={({ field }) => <CustomInput value={field.value} isDatePicker={true} placeholder="تاریخ شروع بیمه نامه قبلی" onChange={field.onChange} />}
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-5 w-full max-w-5xl mx-auto">
          <button onClick={prevStepHandler} className="bg-primary text-primary-foreground font-medium text-center py-2 px-4 rounded-lg cursor-pointer">
            قبلی
          </button>
          <button onClick={nextStepHandler} className="bg-primary text-primary-foreground font-medium text-center py-2 px-4 rounded-lg cursor-pointer">
            بعدی
          </button>
        </div>
      </div>
    </div>
  );
};
export default ThirdPartyInsurance;
