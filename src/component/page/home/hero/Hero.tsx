import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="w-full h-[90vh] mb-10 ">
      <div className="grid grid-cols-12 grid-rows-12 gap-5 w-full h-full p-5">
        <div className="col-span-6 row-span-12 col-start-7 row-start-1 bg-card shadow-sm rounded-xl">
          <div className="flex flex-col items-center justify-center gap-7 w-full h-full ">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h1 className="text-4xl text-primary font-bold text-center">بیمه یار آسودگی خاطر شما</h1>
            <h5 className=" text-gray-700 font-bold text-center">خرید آنلاین بیمه در چند دقیقه با بهترین قیمت و پشتیبانی ۲۴ ساعته</h5>
          </div>
        </div>
        <div className="col-span-4 row-span-3 col-start-1 bg-card shadow-sm rounded-xl">
          <div className="flex items-center justify-center flex-col w-full h-full gap-2">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h4 className="text-xl text-gray-700 font-semibold text-center">بیمه شخص ثالث خودرو</h4>
            <p className=" text-gray-400 text-center text-sm">سواری , وانت و کامیون و ...</p>
          </div>
        </div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-1 bg-card shadow-sm rounded-xl">
          <div className="flex items-center justify-center flex-col w-full h-full gap-2">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h4 className="text-xl text-gray-700 font-semibold text-center">بیمه شخص ثالث خودرو</h4>
            <p className=" text-gray-400 text-center text-sm">سواری , وانت و کامیون و ...</p>
          </div>
        </div>
        <div className="col-span-6 row-span-3 col-start-1 row-start-4 bg-card shadow-sm rounded-xl">
          <div className="flex items-center justify-center flex-col w-full h-full gap-2">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h4 className="text-xl text-gray-700 font-semibold text-center">بیمه شخص ثالث خودرو</h4>
            <p className=" text-gray-400 text-center text-sm">سواری , وانت و کامیون و ...</p>
          </div>
        </div>
        <div className="col-span-3 row-span-3 row-start-7 bg-card shadow-sm rounded-xl">
          <div className="flex items-center justify-center flex-col w-full h-full gap-2">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h4 className="text-xl text-gray-700 font-semibold text-center">بیمه شخص ثالث خودرو</h4>
            <p className=" text-gray-400 text-center text-sm">سواری , وانت و کامیون و ...</p>
          </div>
        </div>
        <div className="col-span-3 row-span-3 col-start-4 row-start-7 bg-card shadow-sm rounded-xl">
          <div className="flex items-center justify-center flex-col w-full h-full gap-2">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h4 className="text-xl text-gray-700 font-semibold text-center">بیمه شخص ثالث خودرو</h4>
            <p className=" text-gray-400 text-center text-sm">سواری , وانت و کامیون و ...</p>
          </div>
        </div>
        <div className="col-span-4 row-span-3 row-start-10 bg-card shadow-sm rounded-xl">
          <div className="flex items-center justify-center flex-col w-full h-full gap-2">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h4 className="text-xl text-gray-700 font-semibold text-center">بیمه شخص ثالث خودرو</h4>
            <p className=" text-gray-400 text-center text-sm">سواری , وانت و کامیون و ...</p>
          </div>
        </div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-10 bg-card shadow-sm rounded-xl">
          <div className="flex items-center justify-center flex-col w-full h-full gap-2">
            <img src="/logo.png" alt="logo" className="w-40 h-28" />
            <h4 className="text-xl text-gray-700 font-semibold text-center">بیمه شخص ثالث خودرو</h4>
            <p className=" text-gray-400 text-center text-sm">سواری , وانت و کامیون و ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
