import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";

const Root = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
