import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const TutorForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
  const img_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    console.log(data);

    const file = data.tutorImage[0];
    delete data.tutorImage;
    const formData = new FormData();
    formData.append("key", image_hosting_key);
    formData.append("image", file);
    // send img to imgBB
    const res = await axiosPublic?.post(img_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageUrl = res.data.data.url;
    console.log(imageUrl);

    // Add imageUrl and role to data
    data.imageUrl = imageUrl;

    console.log(data);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-8">
      <h2 className="text-4xl text-center font-semibold mt-4">
        Teach on Studyify
      </h2>
     
      <div className="p-4 mt-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="hidden md:inline-block h-screen min-h-full col-span-1">
          <img
            src="https://readymadeui.com/image-3.webp"
            className="w-full h-full "
            alt="image"
          />
        </div>
        <div className=" lg:mx-auto max-w-screen-xl  border-[1px] border-gray-300 p-8 col-span-2 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 grid sm:grid-cols-2 gap-6"
          >
            <div className="col-span-full">
              <label className="font-semibold text-sm">Your Name</label>
              <input
                {...register("tutorName", { required: true })}
                type="text"
                placeholder="Enter Name"
                className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
              />
            </div>
            <div className="col-span-full">
              <label className="font-semibold text-sm">Email</label>
              <input
                {...register("tutorEmail", { required: true })}
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
