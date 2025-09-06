import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import WebRouter from "../../router/WebRouter.tsx";

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <WebRouter/>
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;