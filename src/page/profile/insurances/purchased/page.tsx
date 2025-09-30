import React from "react";

import BimehIranLogo from "/bime-iran-logo.png";
import type { Column } from "../../../../component/page/profile/Table";
import Table from "../../../../component/page/profile/Table";
import ProfileLayout from "../../../../component/layout/ProfileLayout";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom"; // ۱. ایمپورت هوک لازم
import OrderDetailsPage from "../../../../component/page/profile/insurances/OrderDetail";

// 1. تعریف یک interface برای ساختار داده‌های بیمه
interface InsuranceData {
  id: number;
  insurer: {
    logo: string;
    name: string;
  };
  item: string;
  orderId: string;
  status: "در انتظار پرداخت" | "صادر شده" | "منقضی شده"; // می‌توانید وضعیت‌های مختلف را اینجا تعریف کنید
}

function InsurancePurchasedPage() {
  const [searchParams] = useSearchParams(); // ۲. استفاده از هوک برای دسترسی به پارامترها
  const receiptID = searchParams.get("receiptID"); // ۳. خواندن پارامتر receiptID

  // 2. اعمال تایپ Column به آرایه ستون‌ها
  const columns: Column[] = [
    { key: "insurer", label: "بیمه‌گر", flex: 0.7 },
    { key: "item", label: "مورد بیمه", flex: 2 },
    { key: "orderId", label: "شناسه سفارش", flex: 1.5 },
    { key: "status", label: "وضعیت بیمه", flex: 1.5 },
    { key: "actions", label: "", flex: 1 },
  ];

  // 3. اعمال تایپ InsuranceData به آرایه داده‌ها
  const data: InsuranceData[] = [
    {
      id: 300737791,
      insurer: { logo: BimehIranLogo, name: "بیمه ایران" },
      item: "پژو، ۲۰۶، تیپ ۵، ۱۳۸۵",
      orderId: "۳۰۰۷۳۲۷۷۹۱",
      status: "در انتظار پرداخت",
    },
  ];

  // 4. مشخص کردن تایپ‌های ورودی و خروجی تابع renderCustomCell
  const renderCustomCell = (
    item: InsuranceData,
    key: string
  ): React.ReactNode => {
    switch (key) {
      case "insurer":
        return (
          <div className="flex justify-start">
            <img
              src={item.insurer.logo}
              alt={item.insurer.name}
              className="w-9 h-9 object-contain"
            />
          </div>
        );
      case "status":
        // می‌توانید بر اساس وضعیت، رنگ Badge را تغییر دهید
        return (
          <div className="flex justify-start">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--chatBotColor)] text-[var(--secondary)] dark:text-gray-50">
              {item.status}
            </span>
          </div>
        );
      case "actions":
        return (
          <div className="flex items-center justify-end gap-x-4">
            <Link
              to={`/profile/insurances/incomplete?receiptID=${item.id}`}
              className="text-xs font-bold cursor-pointer text-blue-500 border border-blue-500 rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-colors"
            >
              جزئیات
            </Link>
            <button className="text-xs font-bold text-red-500 hover:underline">
              حذف
            </button>
          </div>
        );
      default:
        // تایپ‌اسکریپت اینجا به ما کمک می‌کند که مطمئن شویم به کلیدهای تعریف نشده دسترسی نداریم
        // برای حل ارور احتمالی، یک بررسی کوچک اضافه می‌کنیم
        const value = item[key as keyof InsuranceData];
        return (
          <span>
            {typeof value === "string" || typeof value === "number"
              ? value
              : ""}
          </span>
        );
    }
  };

  if (receiptID) {
    return (
      <ProfileLayout>
        <OrderDetailsPage />
      </ProfileLayout>
    );
  } else {
    return (
      <ProfileLayout>
        <div
          className="min-h-screen flex items-start justify-center p-4"
          dir="rtl"
        >
          {/* تایپ InsuranceData به صورت خودکار توسط تایپ‌اسکریپت استنتاج می‌شود */}
          <Table
            title="بیمه شخص ثالث"
            columns={columns}
            data={data}
            renderCell={renderCustomCell}
          />
        </div>
      </ProfileLayout>
    );
  }
}

export default InsurancePurchasedPage;
