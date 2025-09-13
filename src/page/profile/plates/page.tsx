import React from "react";
import PlateSection from "../../../component/page/profile/plates/PlateSection";
import ProfileLayout from "../../../component/layout/ProfileLayout";

// داده‌های نمونه - در یک پروژه واقعی، این داده‌ها از یک API دریافت می‌شوند
const carPlatesData = [
  {
    id: 1,
    type: "car",
    name: "۲۰۶ اتومات",
    owner: "علی قاسمی",
    ownerFirstName: "علی",
    ownerLastName: "قاسمی",
    nationalId: "0013914774",
    birthDate: "1375/01/30",
    plateNumbers: { p1: "۳۰", p2: "۶۲۳", letter: "ل", p3: "۷۷" },
    thirdPartyInsurance: { status: "pending", label: "در انتظار پرداخت" },
    bodyInsurance: { status: "order", label: "سفارش" },
  },
];

// داده‌های نمونه برای موتورسیکلت، که فعلا خالی است
const motorcyclePlatesData: any[] = [];

/**
 * کامپوننت اصلی صفحه "پلاک‌های من"
 * این کامپوننت مسئول نمایش بخش‌های مختلف پلاک (خودرو و موتورسیکلت) است.
 */
const MyPlatesPage = () => {
  return (
    <ProfileLayout>
      <div className="flex flex-col gap-8">
        <PlateSection
          title="پلاک خودرو"
          plates={carPlatesData}
          vehicleType="car"
        />
        <PlateSection
          title="پلاک موتورسیکلت"
          plates={motorcyclePlatesData}
          vehicleType="motorcycle"
        />
      </div>
    </ProfileLayout>
  );
};

export default MyPlatesPage;
