
import Footer from "./footer/Footer.tsx";
import WebRouter from "../../router/WebRouter.tsx";
import Header from "./header/Header.tsx";

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