import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <main>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;
