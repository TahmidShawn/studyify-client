import SectionTitle from "../../shared/sectionTitle/SectionTitle";

const Courses = () => {
  return (
    <div className="mt-10">
      {/* title section  */}
      <SectionTitle categoryName="Top Courses" categoryLink="/top-courses" />

      {/* contain section  */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
        {/* card 1 */}
        <div className="card bg-base-100 shadow-md p-4 border-[1px] border-[#E2E8F0]">
          <figure className="">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl mb-5"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="">Beginners Guide to Design</h2>
            <p>By Ronald Richards</p>
            <p className="text-xs">22 Total Hours. 155 Lectures. Beginner</p>
            <p>$149.9</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="card bg-base-100 shadow-md p-4 border-[1px] border-[#E2E8F0]">
          <figure className="">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl mb-5"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="">Beginners Guide to Design</h2>
            <p>By Ronald Richards</p>
            <p className="text-xs">22 Total Hours. 155 Lectures. Beginner</p>
            <p>$149.9</p>
          </div>
        </div>

        {/* card 3 */}
        <div className="card  bg-base-100 shadow-md p-4 border-[1px] border-[#E2E8F0]">
          <figure className="">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl mb-5"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="">Beginners Guide to Design</h2>
            <p>By Ronald Richards</p>
            <p className="text-xs">22 Total Hours. 155 Lectures. Beginner</p>
            <p>$149.9</p>
          </div>
        </div>

        {/* card 4 */}
        <div className="card  bg-base-100 shadow-md p-4 border-[1px] border-[#E2E8F0]">
          <figure className="">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl mb-5"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="">Beginners Guide to Design</h2>
            <p>By Ronald Richards</p>
            <p className="text-xs">22 Total Hours. 155 Lectures. Beginner</p>
            <p>$149.9</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
