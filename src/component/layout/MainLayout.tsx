import {Header} from "./Header.tsx";
import BottomNav from "./Footer.tsx";
import WebRouter from "../../router/WebRouter.tsx";

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <WebRouter/>
      </main>
      <div className={'max-md:mt-20'}>
        <BottomNav/>
      </div>
    </>
  );
};

export default MainLayout;