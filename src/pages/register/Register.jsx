import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const { createUser, googleLogin, updateUserProfile } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userName = data.userName;
    const userEmail = data.userEmail;
    const userPassword = data.userPassword;

    if (userPassword.length < 6) {
      return toast.error("Password must be at least 6 characters");
    } else if (!/[A-Z]/.test(userPassword)) {
      return toast.error("Password must have at least one uppercase letter");
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\-|/"'`]/.test(userPassword)) {
      return toast.error(
        "Password must contain at least one special character"
      );
    }

    // create user
    createUser(userEmail, userPassword)
      .then((result) => {
        console.log(result);
        const photoUrl = null;
        updateUserProfile(userName, photoUrl).then(() => {
          // create user entry in the database
          const userData = {
            userName,
            userEmail,
            photoUrl,
          };
          axiosPublic?.post("api/users", userData).then((res) => {
            console.log(res);
            if (res.data.userEmail) {
              console.log("user added to the database");
              toast.success("done");
              reset();
            }
          });
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "Email already in use. Please use a different email or log in."
          );
        } else {
          toast.error(`${error.message}`);
        }
      });
  };
  //   login via google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userName = user.displayName;
        const userEmail = user.email;
        const photoUrl = user.photoURL;

        // create user entry in the database
        const userData = {
          userName,
          userEmail,
          photoUrl,
        };

        axiosPublic?.post("api/users", userData).then((res) => {
          console.log(res);
          if (res.data.userEmail) {
            toast.success("Google login successfully done");
            navigate(location?.state ? location.state : "/");
          }
        });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  return (
    <div className=" text-[#333]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] w-full max-md:mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Sign Up</h3>
              </div>

              <button
                onClick={handleGoogleLogin}
                type="button"
                className="w-full px-4 py-3 flex items-center justify-center rounded-md text-white text-base tracking-wider font-semibold border-none outline-none bg-[#333]"
              >
                <FcGoogle className="mr-3 text-xl " />
                Continue with Google
              </button>
              <div className="my-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 text-center">Or</p>
              </div>
              {/* user name */}
              <div>
                <label className="text-sm mb-2 block">User name</label>
                <div className="relative flex items-center">
                  <input
                    {...register("userName", { required: true })}
                    // name="username"
                    type="text"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Enter user name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              {/* user email */}
              <div>
                <label className="text-sm mb-2 block">User Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("userEmail", { required: true })}
                    // name="email"
                    type="email"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Enter user email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              {/* user password  */}
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    {...register("userPassword", { required: true })}
                    // name="password"
                    type="password"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              {/* <div className="flex items-center justify-between gap-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <a
                      href="javascript:void(0);"
                      className="text-blue-500 font-semibold hover:underline ml-1"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div> */}
              <div className="!mt-7">
                <input
                  type="submit"
                  value="Create Account"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-[#333] focus:outline-none"
                />
              </div>
            </form>
            <p className="text-sm mt-7 text-center">
              Already have an account
              <Link
                to="/login"
                className="text-blue-600 hover:underline ml-1 whitespace-nowrap"
              >
                Login here
              </Link>
            </p>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full object-cover"
              alt="Sign up image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
