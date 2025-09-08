import HomePage from "../page/page.tsx";
import NotFoundPage from "../page/NotFound/page.tsx";
import PersonalInfoPage from "../page/profile/personal-info/page.tsx";

export interface RouteConfig {
  path: string;
  label: string;
  element: React.ReactNode;
  requiredPermission?: string;
}

export const Paths: RouteConfig[] = [
  { path: '*', label: 'صفحه مورد نظر یافت نشد', element: <NotFoundPage /> },
  { path: '/', label: 'خانه', element: <HomePage /> },
  { path: '/profile/personal-info', label: 'اطلاعات شخصی', element: <PersonalInfoPage /> },
];
