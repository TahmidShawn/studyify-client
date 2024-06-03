import Banner from "../../components/home/banner/Banner";
import Categories from "../../components/home/categories/Categories";
import Courses from "../../components/home/courses/Courses";
import Instructors from "../../components/home/instructors/Instructors";
import StatsBanner from "../../components/home/statsBanner/StatsBanner";

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
    </div>
  );
};

export default Home;
