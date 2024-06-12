import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, author_name, duration, price, _id, img } = course;
  return (
    <Link to={`/courses/${_id}`}>
      <div className="card bg-base-100 shadow-md p-4 border-[1px] border-[#E2E8F0]">
        <figure className="w-full ">
          <img src={img} alt="Shoes" className="rounded-xl mb-5 w-full h-52" />
        </figure>
        <div className="card-body p-0">
          <h2 className="">{title}</h2>
          <p>By {author_name}</p>
          <p className="text-xs">{duration} Total Hours</p>
          <p>${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Course;
