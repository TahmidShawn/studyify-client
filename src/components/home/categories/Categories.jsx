import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import categoryImg1 from "./../../../assets/category-1.png";
import categoryImg2 from "./../../../assets/category-2.png";
import categoryImg3 from "./../../../assets/category-3.png";
import categoryImg4 from "./../../../assets/category-4.png";

const Categories = () => {
  return (
    <div className="mt-10">
      {/* title section  */}
      <SectionTitle
        categoryName="Top Categories"
        categoryLink="/top-categories"
      />

      {/* contain section  */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12 mt-8">
        {/* category-1  */}
        <div className="text-center border-[1px] py-6 border-[#E2E8F0] rounded-lg shadow-lg">
          <img src={categoryImg1} alt="Category Img" className="w-16 mx-auto" />
          <h3 className="font-bold mt-3">Astrology</h3>
          <p className="text-sm">11 Courses</p>
        </div>
        {/* category-2  */}
        <div className="text-center border-[1px] py-6 border-[#E2E8F0] rounded-lg shadow-lg">
          <img src={categoryImg2} alt="Category Img" className="w-16 mx-auto" />
          <h3 className="font-bold mt-3">Development</h3>
          <p className="text-sm">11 Courses</p>
        </div>
        {/* category-3  */}
        <div className="text-center border-[1px] py-6 border-[#E2E8F0] rounded-lg shadow-lg">
          <img src={categoryImg3} alt="Category Img" className="w-16 mx-auto" />
          <h3 className="font-bold mt-3">Marketing</h3>
          <p className="text-sm">11 Courses</p>
        </div>
        {/* category-4  */}
        <div className="text-center border-[1px] py-6 border-[#E2E8F0] rounded-lg shadow-lg">
          <img src={categoryImg4} alt="Category Img" className="w-16 mx-auto" />
          <h3 className="font-bold mt-3">Physics</h3>
          <p className="text-sm">11 Courses</p>
        </div>
      </section>
    </div>
  );
};

export default Categories;
