// import { FaArrowUp } from "react-icons/fa";
// import { Link } from "react-router-dom";

const MdFooter = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      <footer className=" relative bottom-0 w-full">
        <p className="text-primary-foreground dark:text-primary-foreground bg-[#015945] mx-auto py-4 text-center">
          تمامی حقوق این وبسایت متعلق به شرکت <span className="text-bold text-primary-foreground text-center text-sm md:text-base dark:text-primary-foreground">بیمه یار</span> می باشد.
        </p>
      </footer>
    </>
  );
};

export default MdFooter;


// <div className="hidden w-full max-w-6xl mx-auto p-5">
//     <div className="flex flex-col items-center w-full gap-5">
//         <div className="flex items-center justify-between w-full flex-col-reverse md:flex-row">
//             <div className="flex flex-col items-center">
//                 <img className="w-28 object-contain" src="/logo.png" alt="logo" />
//                 {/* <SabtlineLogo width={100} height={25} className="md:self-start self-center fill-primary dark:fill-white" /> */}
//
//                 <p className="text-primary font-semibold text-base">سامانه بیمه یار</p>
//             </div>
//             <button onClick={scrollToTop} className="bg-primary p-6 flex items-center justify-center rounded-xl font-medium text-primary-foreground cursor-pointer  md:mb-0 mb-20">
//                 <FaArrowUp className="text-white" />
//             </button>
//         </div>
//         <div className="flex items-center flex-col md:flex-row justify-between w-full gap-5">
//             <p className="text-right text-wrap max-w-md font-normal text-base my-5 leading-8 text-card-foreground">
//                 <span className="font-semibold mx-1 text-card-foreground">بیمه‌یار؛ انتخابی هوشمند برای خرید انواع بیمه </span>
//                 در بیمه‌یار می‌توانید به راحتی و در هر زمان، قیمت و خدمات شرکت‌های مختلف بیمه را مقایسه کنید و بهترین گزینه را برای نیاز خود انتخاب نمایید. ما تلاش می‌کنیم خرید بیمه برای شما ساده،
//                 شفاف و مطمئن باشد. یکی از خدمات ویژه ما، امکان خرید قسطی بیمه است؛ بدون نیاز به ضامن و بدون پرداخت سود اضافه. با بیمه‌یار، آرامش خاطر و دسترسی آسان به خدمات بیمه‌ای همیشه همراه شماست.
//             </p>
//
//             <div className="flex flex-col items-center gap-5">
//                 <p className="text-center font-semibold text-primary ">همین حالا بیمه خود را بخر!</p>
//                 <div className="flex flex-col  md:flex-row items-center gap-5">
//                     <Link to="/third-party-insurance" className="bg-primary px-2 py-1 flex items-center justify-center rounded-xl font-medium text-primary-foreground cursor-pointer">
//                         خرید بیمه
//                     </Link>
//                     <button className="bg-primary px-2 py-1 flex items-center justify-center rounded-xl font-medium text-primary-foreground cursor-pointer">راهنمای استفاده</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
