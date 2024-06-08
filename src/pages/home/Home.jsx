import Banner from "../../components/home/banner/Banner";
import Categories from "../../components/home/categories/Categories";
import Courses from "../../components/home/courses/Courses";
import Instructors from "../../components/home/instructors/Instructors";
import PromotionalBanner from "../../components/home/promotionalBanner/PromotionalBanner";
import StatsBanner from "../../components/home/statsBanner/StatsBanner";
import Testimonials from "../../components/home/testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-4 lg:mx-auto">
        <Banner />
      </div>
      <StatsBanner />
      <div className="max-w-screen-xl mx-4 lg:mx-auto">
        <Categories />
        <Courses />
        <Instructors />
      </div>
      <Testimonials />
      <div className="max-w-screen-xl mx-4 lg:mx-auto">
        <PromotionalBanner />
      </div>
      
    </div>
  );
};

export default Home;
