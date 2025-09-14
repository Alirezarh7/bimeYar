import { z } from "zod";

export const thirdPartyInsuranceSchema = z.object({
  carType: z.string("نوع خودرو را انتخاب نمایید").nonempty("نوع خودرو را انتخاب نمایید"),
  carUsage: z.string("کاربری خودرو را انتخاب کنید").nonempty("کاربری خودرو را انتخاب کنید"),
  carYear: z.string("سال تولید خودرو را انتخاب کنید").nonempty("سال تولید خودرو را انتخاب کنید"),
  carBrand: z.string("برند خودرو را انتخاب کنید").nonempty("برند خودرو را انتخاب کنید"),
  hasInsurance: z.string("وضعیت بیمه قبلی خودرو را انتخاب کنید").nonempty("وضعیت بیمه قبلی خودرو را انتخاب کنید"),
  prevInsuranceCompany: z.string("نام بیمه قبلی خودرو را انتخاب کنید").nonempty("نام بیمه خودرو را انتخاب کنید"),
  prevInsuranceStartDate: z.string("تاریخ شروع بیمه قبلی خودرو را انتخاب کنید").nonempty("تاریخ شروع بیمه قبلی خودرو را انتخاب کنید"),
});
