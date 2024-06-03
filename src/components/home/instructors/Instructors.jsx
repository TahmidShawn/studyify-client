import SectionTitle from "../../shared/sectionTitle/SectionTitle";

const Instructors = () => {
  return (
    <div className="mt-10">
      {/* title section  */}
      <SectionTitle
        categoryName="Top Instructors"
        categoryLink="/top-instructors"
      />

      {/* contain section  */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
        {/* instructor 1 */}
        <div className="card bg-base-100 shadow-xl p-4 border-[1px] border-[#E2E8F0]">
          <figure className="">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl mb-5"
            />
          </figure>
          <div className="card-body p-0 text-center">
            <h2 className="">Ronald Richards</h2>
            <p>UI/UX Designer</p>
            <hr />
            <div className="flex justify-between text-right items-center">
              {/* rating div  */}
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <span className="font-bold">4.9</span>
              </div>
              {/* student */}
              <p>1200+ students</p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
