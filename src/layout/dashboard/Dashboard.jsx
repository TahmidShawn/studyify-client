import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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

            <div className="avatar mb-3 mx-auto">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

            <Link to="/">
              <button className="btn bg-transparent border-0 hover:bg-gray-900 hover:text-white shadow-none w-full rounded-none border-b-[1px] flex items-center justify-start">
                <IoHomeOutline className="text-xl" />
                <span className="text-lg">Home</span>
              </button>
            </Link>

            <Link to="profile">
              <button className="btn bg-transparent border-0 hover:bg-gray-900 hover:text-white shadow-none w-full rounded-none border-b-[1px] flex items-center justify-start">
                <CgProfile className="text-xl" />
                <span className="text-lg">Profile</span>
              </button>
            </Link>

            <Link to="my-courses">
              <button className="btn bg-transparent border-0 hover:bg-gray-900 hover:text-white shadow-none w-full rounded-none border-b-[1px] flex items-center justify-start">
                <CgProfile className="text-xl" />
                <span className="text-lg">My Courses</span>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
