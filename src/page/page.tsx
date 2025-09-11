import Benefits from "../component/page/home/benefitsSection/Benefits";
import Hero from "../component/page/home/hero/Hero";
import InsuranceCompanyList from "../component/page/home/insuranceCompany/InsuranceCompanyList";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <InsuranceCompanyList />
    </div>
  );
};

export default HomePage;
