import { Link, useParams } from "react-router-dom";
import Testimonials from "../../components/home/testimonials/Testimonials";
import useDataFetching from "../../hooks/useDataFetching";
// import useDataFetching from "../../hooks/useDataFetching";

const CourseInfo = () => {
  const { id } = useParams();
  const {
    data: selectedCourse,
    loading,
    refetch,
  } = useDataFetching(`/api/courses/${id}`);

  if (loading) return <span className="loading loading-dots loading-lg"></span>;
  else {
    const {
      title,
      short_description,
      detailed_description,
      img,
      author_img,
      author_name,
      ratings,
      duration,
      price,
      category,
    } = selectedCourse;

    return (
      <div>
        {/* top */}
        <div className="max-w-screen-xl lg:mx-auto w-full overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
            <div className="lg:col-span-2 mt-10">
              {/* breadcrumbs */}
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/courses'>Courses</Link>
                  </li>
                  <li className="font-semibold">{title}</li>
                </ul>
              </div>

              {/* course info  */}
              <h1 className="text-3xl font-bold mt-4">{title}</h1>
              <p className="mt-4 text-sm text-gray-500 w-11/12">
                {short_description}
              </p>

              <div className="flex justify-start items-center gap-8 mt-6">
                {/* Author  */}
                <div className="flex items-center gap-4">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-8">
                      <span>SY</span>
                    </div>
                  </div>
                  <p>Created by {author_name}</p>
                </div>

                {/* ratings  */}
                <div className="flex items-center gap-2">
                  <div>
                    <svg
                      className="w-6 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                  <div className="font-bold">
                    4.9
                    <span className="ml-1 text-sm font-medium">
                      ({ratings} ratings) | {duration} total hours
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
                <p className="text-justify">{detailed_description}</p>
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

                <div className="flex items-center gap-4 mt-2">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={author_img} />
                    </div>
                  </div>
                  <div>
                    <p>4 review</p>
                    <p>4 course</p>
                    <p>4 student</p>
                  </div>
                </div>
                <p className="text-xl font-semibold mt-3">{author_name}</p>
                <p>Web developer</p>
                <p className="mt-4 text-justify">
                  With over a decade of industry experience, Ronald brings a
                  wealth of practical knowledge to the classroom. He has played
                  a pivotal role in designing user-centric interfaces for
                  renowned tech companies, ensuring seamless and engaging user
                  experiences.
                </p>
              </div>
            </div>

            {/* right card */}
            <div className="card bg-base-100 shadow-md mt-10 rounded-lg border-[1px] h-max">
              <figure className="p-6 pb-0">
                <img src={img} alt="Shoes" className="rounded-lg w-full h-64" />
              </figure>
              <div className="card-body">
                <h2 className="text-xl font-semibold">Price: ${price}</h2>
                <p>{detailed_description}</p>
                <button className="btn btn-primary w-full mt-4">
                  Add to Cart
                </button>
                <button className="btn btn-outline w-full">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    );
  }
};

export default CourseInfo;
