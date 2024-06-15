import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import tutorImg from "./../../assets/tutor.jpg";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const TutorForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
  const img_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    const file = data.tutorImage[0];
    delete data.tutorImage;
    const formData = new FormData();
    formData.append("key", image_hosting_key);
    formData.append("image", file);

    try {
      //   Check if the email already exists
      const emailCheckResponse = await axiosPublic.get(
        `api/tutors/email/${data.tutorEmail}`
      );
      if (emailCheckResponse.data.exists) {
        toast.error("This email is already associated with a tutor.");
        return;
      }

      // Upload the image to imgbb
      const res = await axiosPublic.post(img_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const imageUrl = res.data.data.url;
      const role = "teacher";

      // Add imageUrl and role to data
      data.tutorImage = imageUrl;
      data.role = role;
      const name = data?.tutorName;

      console.log(data);
      updateUserProfile(name, imageUrl).then(async () => {
        // create user entry in the database
        const response = await axiosPublic.post("api/tutors", data);
        if (response.data.tutorEmail) {
          toast.success("Congratulations");
          navigate(location?.state ? location.state : "/");
          reset();
        }
      });
      // post data
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-8">
      <h2 className="text-4xl text-center font-semibold mt-4">
        Teach on Studyify
      </h2>

      <div className="p-4 mt-4 grid grid-cols-2 md:grid-cols-3 gap-12">
        <div className="col-span-2 md:col-span-1 order-2 md:order-1">
          <img src={tutorImg} className="w-full" alt="image" />
        </div>
        <div className=" lg:mx-auto max-w-screen-xl  border-[1px] border-gray-300 p-8 col-span-2 w-full order-1 md:order-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 grid sm:grid-cols-2 gap-6"
          >
            <div className="col-span-full lg:col-span-1">
              <label className="font-semibold text-sm">Your Name</label>
              <input
                {...register("tutorName", { required: true })}
                type="text"
                placeholder="Enter Name"
                defaultValue={user?.displayName}
                className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
              />
            </div>
            <div className="col-span-full lg:col-span-1">
              <label className="font-semibold text-sm">Email</label>
              <input
                {...register("tutorEmail", { required: true })}
                defaultValue={user?.email}
                readOnly
                type="email"
                placeholder="Email"
                className="w-full rounded py-2.5 px-4 border-[1px] mt-2 text-sm outline-[#007bff]"
              />
            </div>
            <div className="col-span-full">
              <p className="font-semibold text-sm mb-2">Upload Image</p>
              <input
                {...register("tutorImage", { required: true })}
                type="file"
                className="w-full bg-white font-medium text-base file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 border-[1px] rounded"
              />
            </div>
            <div className="col-span-full">
              <label className="font-semibold text-sm">Description</label>
              <textarea
                {...register("tutorDescription", { required: true })}
                placeholder="Description"
                rows="6"
                className="w-full rounded px-4 border-[1px] mt-2 text-sm pt-3 outline-[#007bff]"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit Data"
              className="text-white bg-[#434344] font-semibold rounded text-sm px-6 py-3 w-max"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TutorForm;
