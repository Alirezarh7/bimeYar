import { useLocation, useNavigate } from 'react-router-dom';
import { Paths} from "../../../router/paths.tsx";
import { ChevronLeft } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentRoute = Paths.find(r => r.path === location.pathname);

  return (
    <div className="flex items-center text-sm gap-2 p-2">
      {location.pathname !== '/' && (
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <ChevronLeft className={'mb-0.5'} size={18} />
          خانه
        </button>
      )}
      {currentRoute && (
        <>
          <span className="text-gray-400">/</span>
          <span className="font-bold text-blue-700">{currentRoute.label}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;