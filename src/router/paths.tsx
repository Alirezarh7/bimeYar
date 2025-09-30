import HomePage from "../page/page.tsx";
import NotFoundPage from "../page/NotFound/page.tsx";
import PersonalInfoPage from "../page/profile/personal-info/page.tsx";
import InsurancePendingPage from "../page/profile/insurances/pending/page.tsx";
import InsurancePurchasedPage from "../page/profile/insurances/purchased/page.tsx";
import InsuranceIncompletePage from "../page/profile/insurances/incomplete/page.tsx";
import VehicleClaimsPage from "../page/profile/claims/vehicle-claims/page.tsx";
import SupplementaryClaimsPage from "../page/profile/claims/supplementary/page.tsx";
import ThirdPartyInsurance from "../page/third-party-insurance/page.tsx";
import MyPlatesPage from "../page/profile/plates/page.tsx";
import InsuranceOfferPage from "../page/insurance/page.tsx";
import ComparePage from "../page/compare/page.tsx";
import ThirdPartyInsuranceNewCar from "../page/third-party-insurance-new-car/page.tsx";
import CarInsurance from "../page/car-insurance/page.tsx";

export interface RouteConfig {
  path: string;
  label: string;
  element: React.ReactNode;
  requiredPermission?: string;
}

export const Paths: RouteConfig[] = [
  { path: "*", label: "صفحه مورد نظر یافت نشد", element: <NotFoundPage /> },
  { path: "/", label: "خانه", element: <HomePage /> },
  {
    path: "/profile",
    label: "اطلاعات شخصی",
    element: <PersonalInfoPage />,
  },
  {
    path: "/profile/value",
    label: "بیمه های در انتظار تمدید",
    element: <InsurancePendingPage />,
  },
  {
    path: "/profile/insurances/incomplete",
    label: "بیمه های ناتمام",
    element: <InsuranceIncompletePage />,
  },
  {
    path: "/profile/insurances/purchased",
    label: "بیمه های خریداری شده",
    element: <InsurancePurchasedPage />,
  },
  {
    path: "/profile/claims/vehicle-claims",
    label: "خسارت خودرویی",
    element: <VehicleClaimsPage />,
  },
  {
    path: "/profile/claims/supplementary",
    label: "خسارت درمان",
    element: <SupplementaryClaimsPage />,
  },
  {
    path: "/third-party-insurance",
    label: "خرید بیمه شخص ثالث",
    element: <ThirdPartyInsurance />,
  },
  {
    path: "/insurance",
    label: "خرید بیمه شخص ثالث",
    element: <InsuranceOfferPage />,
  },
  {
    path: "/compare",
    label: "مقایسه",
    element: <ComparePage />,
  },
  {
    path: "/profile/plates",
    label: "پلاک های من",
    element: <MyPlatesPage />,
  },
  { path: "*", label: "صفحه مورد نظر یافت نشد", element: <NotFoundPage /> },
  { path: "/", label: "خانه", element: <HomePage /> },
  {
    path: "/profile",
    label: "اطلاعات شخصی",
    element: <PersonalInfoPage />,
  },
  {
    path: "/profile/value",
    label: "بیمه های در انتظار تمدید",
    element: <InsurancePendingPage />,
  },
  {
    path: "/profile/insurances/incomplete",
    label: "بیمه های ناتمام",
    element: <InsuranceIncompletePage />,
  },
  {
    path: "/profile/insurances/purchased",
    label: "بیمه های خریداری شده",
    element: <InsurancePurchasedPage />,
  },
  {
    path: "/profile/claims/vehicle-claims",
    label: "خسارت خودرویی",
    element: <VehicleClaimsPage />,
  },
  {
    path: "/profile/claims/supplementary",
    label: "خسارت درمان",
    element: <SupplementaryClaimsPage />,
  },
  {
    path: "/third-party-insurance",
    label: "خرید بیمه شخص ثالث",
    element: <ThirdPartyInsurance />,
  },
  {
    path: "/third-party-insurance-new-car",
    label: "خرید بیمه شخص ثالث خودرو نو شماره",
    element: <ThirdPartyInsuranceNewCar />,
  },
  {
    path: "/car-Insurance",
    label: "بیمه های وسیله نقلیه",
    element: <CarInsurance />,
  },
  {
    path: "/insurance",
    label: "خرید بیمه شخص ثالث",
    element: <InsuranceOfferPage />,
  },
];
