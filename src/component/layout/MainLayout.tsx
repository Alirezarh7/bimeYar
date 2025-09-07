import Footer from "./footer/Footer.tsx";
import WebRouter from "../../router/WebRouter.tsx";
import Header from "./header/Header.tsx";
import ChatDrawer from "./chatDrawer/ChatDrawer.tsx";

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <WebRouter/>
      </main>
      <ChatDrawer/>
      <div className={'max-md:mt-20'}>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;