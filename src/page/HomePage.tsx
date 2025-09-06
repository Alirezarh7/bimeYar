import {Hero} from "../component/page/home/hero/Hero.tsx";
import {Products} from "../component/page/home/products/Products.tsx";
import {Comparison} from "../component/page/home/comparison/Comparison.tsx";
import {SellerCTA} from "../component/page/home/sellerCTA/SellerCTA.tsx";
import {Testimonials} from "../component/page/home/testimonials/Testimonials.tsx";
import {BlogTeasers} from "../component/page/home/blogTeasers/BlogTeasers.tsx";
import {FAQ} from "../component/page/home/FAQ/FAQ.tsx";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Comparison />
      <SellerCTA />
      <Testimonials />
      <BlogTeasers />
      <FAQ />
    </div>
  );
};

export default HomePage;