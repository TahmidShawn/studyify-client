const CourseInfo = () => {
  return (
    <div>
      {/* top */}
      <div className=" text-[#333]">
        <div className="max-w-screen-xl lg:mx-auto w-full overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
            <div className="lg:col-span-2 mt-10">
              {/* breadcrumbs */}
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Documents</a>
                  </li>
                  <li>Add Document</li>
                </ul>
              </div>

              {/* course info  */}
              <h1 className="text-3xl font-bold mt-4">
                Introduction to User Experience Design
              </h1>
              <p className="mt-4 text-sm text-gray-500 w-11/12">
                This course is meticulously crafted to provide you with a
                foundational understanding of the principles, methodologies, and
                tools that drive exceptional user experiences in the digital
                landscape.
              </p>

              <div className="flex justify-start items-center">
                {/* Author  */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-8">
                      <span>SY</span>
                    </div>
                  </div>
                  <p>Created by Tahmid Shawn</p>
                </div>

                {/* ratings  */}
                <div className="flex items-center gap-2 mt-6">
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="font-bold">
                    4.9
                    <span className="text-sm font-medium">
                      (4000 ratings) | 22 total hours
                    </span>
                  </div>
                </div>
              </div>

              {/* details  */}
              <div className="my-7 space-x-4">
                <button className="btn btn-outline">Description</button>
                <button className="btn btn-outline">Instructor</button>
                <button className="btn btn-outline">Review</button>
              </div>

              <hr className="mb-7" />
              {/* description and certificate */}
              <div className="mb-7">
                <h2 className="text-2xl font-semibold mb-4">
                  Course Description
                </h2>
                <p className="text-justify">
                  This interactive e-learning course will introduce you to User
                  Experience (UX) design, the art of creating products and
                  services that are intuitive, enjoyable, and user-friendly.
                  Gain a solid foundation in UX principles and learn to apply
                  them in real-world scenarios through engaging modules and
                  interactive exercises.{" "}
                </p>
                <h2 className="text-2xl font-semibold mb-4 mt-7">
                  Certification
                </h2>
                <p className="text-justify">
                  At Studyify, we understand the significance of formal
                  recognition for your hard work and dedication to continuous
                  learning. Upon successful completion of our courses, you will
                  earn a prestigious certification that not only validates your
                  expertise but also opens doors to new opportunities in your
                  chosen field.
                </p>
              </div>
              <hr className="mb-7" />
              {/* instructor */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
                <p>Tahmid Shawn</p>
              </div>
            </div>

            {/* right card */}
            <div className="card bg-base-100 shadow-md mt-10 rounded-lg border-[1px] h-max">
              <figure className="p-6">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-lg"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
