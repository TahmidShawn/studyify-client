import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto">
      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
