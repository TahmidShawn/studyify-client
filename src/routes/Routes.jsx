import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllCourses from "../pages/allCourses/AllCourses";
import Dashboard from "../layout/dashboard/Dashboard";
import Profile from "../pages/dashboard/profile/Profile";
import MyCourses from "../pages/dashboard/myCourses/MyCourses";
import CourseInfo from "../pages/courseInfo/CourseInfo";

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
        element: <AllCourses />,
      },
      {
        path: "/course-info",
        element: <CourseInfo />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
    ],
  },
]);

export default Routes;
