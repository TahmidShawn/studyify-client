import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const photoUrl = user?.photoURL || "aa";
  const name = user?.displayName || "user name";
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col m-5">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-0 w-80 min-h-full bg-[#F8FAFC] text-base-content">
            {/* Sidebar content here */}

            <div className="avatar mb-3 mx-auto mt-4">
              <div className="w-24 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <h1 className="text-center text-xl font-bold mb-6">{name} </h1>

            <Link to="/">
              <button className="btn bg-transparent border-0 hover:bg-gray-900 hover:text-white shadow-none w-full rounded-none border-b-[1px] flex items-center justify-start">
                <IoHomeOutline className="text-xl" />
                <span className="text-lg">Home</span>
              </button>
            </Link>

            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? "bg-slate-200" : "")}
            >
              <button className="btn bg-transparent border-0 hover:bg-gray-900 hover:text-white shadow-none w-full rounded-none border-b-[1px] flex items-center justify-start">
                <CgProfile className="text-xl" />
                <span className="text-lg">Profile</span>
              </button>
            </NavLink>

            <NavLink
              to="my-courses"
              className={({ isActive }) => (isActive ? "bg-slate-200" : "")}
            >
              <button className="btn bg-transparent border-0 hover:bg-gray-900 hover:text-white shadow-none w-full rounded-none border-b-[1px] flex items-center justify-start">
                <CgProfile className="text-xl" />
                <span className="text-lg">My Courses</span>
              </button>
            </NavLink>

            <NavLink
              to="my-uploaded-courses"
              className={({ isActive }) => (isActive ? "bg-slate-200" : "")}
            >
              <button className="btn bg-transparent border-0 hover:bg-gray-900 hover:text-white shadow-none w-full rounded-none border-b-[1px] flex items-center justify-start">
                <CgProfile className="text-xl" />
                <span className="text-lg">Published Courses</span>
              </button>
            </NavLink>

            <NavLink
              to="create-course"
              className={({ isActive }) => (isActive ? "bg-slate-200" : "")}
            >
              <button className="btn bg-transparent border-0 hover:bg-gray-900 hover:text-white shadow-none w-full rounded-none border-b-[1px] flex items-center justify-start">
                <CgProfile className="text-xl" />
                <span className="text-lg">Create a Course</span>
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
