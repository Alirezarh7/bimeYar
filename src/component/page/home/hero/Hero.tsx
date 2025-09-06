import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="w-full h-screen ">
      <div className="grid grid-cols-12 grid-rows-12 gap-5 w-full h-full p-5">
        <div className="col-span-6 row-span-12 bg-white shadow-lg rounded-xl">
          <div className="flex flex-col items-center justify-center gap-7 w-full h-full ">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h1 className="text-4xl text-primary font-bold text-center">بیمه یار آسودگی خاطر شما</h1>
            <h5 className=" text-gray-700 font-bold text-center">خرید آنلاین بیمه در چند دقیقه با بهترین قیمت و پشتیبانی ۲۴ ساعته</h5>
          </div>
        </div>
        <div className="col-span-4 row-span-4 col-start-7 bg-white shadow-lg rounded-xl">
          <div className="flex items-center justify-center flex-col w-full h-full gap-2">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h4 className="text-xl text-gray-700 font-semibold text-center">بیمه شخص ثالث خودرو</h4>
            <p className=" text-gray-400 text-center text-sm">سواری , وانت و کامیون و ...</p>
          </div>
        </div>
        <div className="col-span-2 row-span-4 col-start-11 bg-white shadow-lg rounded-xl">3</div>
        <div className="col-span-6 row-span-3 col-start-7 row-start-5 bg-white shadow-lg rounded-xl">4</div>
        <div className="col-span-2 row-span-2 col-start-7 row-start-8 bg-white shadow-lg rounded-xl">5</div>
        <div className="col-span-2 row-span-2 col-start-9 row-start-8 bg-white shadow-lg rounded-xl">6</div>
        <div className="col-span-2 row-span-2 col-start-11 row-start-8 bg-white shadow-lg rounded-xl">7</div>
        <div className="col-span-6 row-span-3 col-start-7 row-start-10 bg-white shadow-lg rounded-xl">8</div>
      </div>
    </div>
  );
};
export default Hero;
