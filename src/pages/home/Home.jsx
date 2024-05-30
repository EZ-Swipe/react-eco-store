import Banners from "./banners/Banners";
import ChooseUs from "./choose-us/ChooseUs";
import Features from "./feature/Features";
import FeaturedProducts from "./featured-products/FeaturedProducts";
import FollowUs from "./follow-us/FollowUs";
import MainSlider from "./main-slider/MainSlider";
import Statistics from "./statistics/Statistics";
import TopCategories from "./top-categories/TopCategories";


const Home = () => {
   return (
      <div>
         <MainSlider />
         <Features />
         <FeaturedProducts />
         <TopCategories />
         <ChooseUs />
         <Statistics />
         <Banners />
         <FollowUs />
      </div>
   );
}

export default Home;
