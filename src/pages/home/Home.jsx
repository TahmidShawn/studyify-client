import Banner from "../../components/home/banner/Banner";
import Categories from "../../components/home/categories/Categories";
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
      </div>
    </div>
  );
};

export default Home;
