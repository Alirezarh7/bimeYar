import type { FC } from "react";

const logoCompany = [
  "/insuranceCompany/company1.webp",
  "/insuranceCompany/company2.webp",
  "/insuranceCompany/company3.webp",
  "/insuranceCompany/company4.webp",
  "/insuranceCompany/company5.webp",
  "/insuranceCompany/company6.webp",
  "/insuranceCompany/company7.webp",
  "/insuranceCompany/company8.webp",
  "/insuranceCompany/company9.webp",
  "/insuranceCompany/company10.webp",
  "/insuranceCompany/company11.webp",
  "/insuranceCompany/company12.webp",
  "/insuranceCompany/company13.webp",
];

const InsuranceCompanyList: FC = () => {
  return (
    <div className="flex flex-col items-start w-full max-w-5xl mx-auto">
      <h4 className="text-3xl text-foreground font-bold px-5">شرکت های همکار</h4>

      <div
        className="relative m-auto w-full overflow-hidden bg-transparent 
      before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] 
       before:bg-linear-to-l before:from-transparent before:to-card before:content-[''] 
      after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] 
      after:-scale-x-100 after:bg-linear-to-l after:from-transparent after:to-card  after:content-[''] 
      my-10 rounded-xl"
      >
        <div className="animate-infinite-slider flex ">
          {[...logoCompany, ...logoCompany].map((logo, index) => (
            <div key={index} className="flex w-[150px] items-center justify-center  flex-shrink-0">
              <img src={logo} alt={`insurance-logo-${index}`} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceCompanyList;
