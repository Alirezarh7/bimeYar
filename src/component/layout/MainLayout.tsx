import {Header} from "./Header.tsx";
import Footer from "./Footer.tsx";
import WebRouter from "../../router/WebRouter.tsx";

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <WebRouter/>
      </main>
      <div className={'max-md:mt-20'}>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;