import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Courses from "../pages/courses/Courses";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
]);

export default Routes;
