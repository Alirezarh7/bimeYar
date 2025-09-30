import Footer from "./footer/Footer.tsx";
import WebRouter from "../../router/WebRouter.tsx";
import Header from "./header/Header.tsx";
import ChatDrawer from "./chatDrawer/ChatDrawer.tsx";

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main className={'h-full pb-14 pt-3 '}>
        <WebRouter/>
      </main>
      <ChatDrawer/>
      <div className={''}>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;