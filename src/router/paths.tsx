import HomePage from "../page/page.tsx";
import NotFoundPage from "../page/NotFound/page.tsx";
import PersonalInfoPage from "../page/profile/personal-info/page.tsx";
import InsurancePendingPage from "../page/profile/insurances/pending/page.tsx";

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
    path: "/profile/personal-info",
    label: "اطلاعات شخصی",
    element: <PersonalInfoPage />,
  },
  {
    path: "/profile/insurances/pending",
    label: "در انتظار تمدید",
    element: <InsurancePendingPage />,
  },
];
