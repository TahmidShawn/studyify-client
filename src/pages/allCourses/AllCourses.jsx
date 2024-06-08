import { useState } from "react";

const AllCourses = () => {
  const [rating, setRating] = useState(0);

  console.log("rating ", rating);
  const [price, setPrice] = useState(40);
  console.log(price);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <section className="">
      <div className="max-w-screen-xl mx-4 lg:mx-auto ">
        {/* Courses section  */}
        <div className="my-4 flex justify-between">
          <h2 className="text-3xl font-semibold mb-2">Choose your courses</h2>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          >
            <option selected>Choose a category</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 ">
          {/* filter section  */}
          <div className=" col-span-1 md:inline-block">
            {/* Rating section */}
            <div className="collapse border-b-[1px] rounded-none">
              <input type="checkbox" />
              <div className="collapse-title  font-medium">Rating</div>
              <div className="collapse-content">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setRating(num)}
                      className="bg-transparent border-none outline-none cursor-pointer"
                    >
                      <span
                        className={`star text-4xl ${
                          num <= rating ? "text-warning" : "text-gray-300"
                        }`}
                      >
                        &#9733;
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="collapse border-b-[1px] rounded-none">
              <input type="checkbox" />
              <div className="collapse-title  font-medium">Price</div>
              <div className="collapse-content">
                <div className="range-container tooltip w-4/5" data-tip={price}>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={price}
                    onChange={handleChange}
                    className="range range-xs"
                  />
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="collapse border-b-[1px] rounded-none">
              <input type="checkbox" />
              <div className="collapse-title  font-medium">Category</div>
              <div className="collapse-content">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a category</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
          </div>

          {/* courses section  */}
          <div className=" col-span-1 md:col-span-2 lg:col-span-3">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-8">
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
                  <p className="text-xs">
                    22 Total Hours. 155 Lectures. Beginner
                  </p>
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
                  <p className="text-xs">
                    22 Total Hours. 155 Lectures. Beginner
                  </p>
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
                  <p className="text-xs">
                    22 Total Hours. 155 Lectures. Beginner
                  </p>
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
                  <p className="text-xs">
                    22 Total Hours. 155 Lectures. Beginner
                  </p>
                  <p>$149.9</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* popular mentors */}
      <div className="bg-[#F8FAFC] pb-16 pt-12 mt-20">
        <p className="max-w-screen-xl mx-4 lg:mx-auto mb-5 text-xl font-bold">
          Popular Mentors
        </p>
        <section className="grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-screen-xl mx-4 lg:mx-auto">
          {/* instructor 1 */}
          <div className="card bg-base-100 shadow-md p-4 border-[1px] border-[#E2E8F0]">
            <figure className="">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl mb-2"
              />
            </figure>
            <div className="card-body p-0 text-center">
              <h2 className="font-semibold">Ronald Richards</h2>
              <p className="text-xs -mt-2">UI/UX Designer</p>
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
                <p className="text-sm font-semibold">1200+ students</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Featured Courses */}
      <p className="max-w-screen-xl mx-4 lg:mx-auto mb-5 text-xl font-bold mt-10">
        Featured Courses
      </p>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 max-w-screen-xl mx-4 lg:mx-auto">
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
    </section>
  );
};

export default AllCourses;
