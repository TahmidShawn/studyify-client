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
    <div>
        <h2 className="text-4xl text-center font-semibold mt-4">Teach on Studyify</h2>
        <p className="text-center mt-1 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit..</p>
      <div className="p-4 mt-4">
        <div className="mx-4 lg:mx-auto max-w-screen-xl  border-[1px] p-8 bg-gray-100" >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" grid sm:grid-cols-2 gap-6"
          >
            <div>
              <label className="font-semibold text-sm">Your Name</label>
              <input
                {...register("tutorName", { required: true })}
                type="text"
                placeholder="Enter Name"
                className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
              />
            </div>
            <div>
              <label className="font-semibold text-sm">Email</label>
              <input
                {...register("tutorEmail", { required: true })}
                type="email"
                placeholder="Email"
                className="w-full rounded py-2.5 px-4 border-[1px] mt-2 text-sm outline-[#007bff]"
              />
            </div>
            <div className="">
              <p className="font-semibold text-sm mb-2">Upload Image</p>
              <input
                {...register("tutorImage", { required: true })}
                type="file"
                className="w-full bg-white font-medium text-base file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 border-[1px] file:bg-[#c7c9cc] file:text-white rounded"
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
              className="text-white bg-[#007bff] font-semibold rounded text-sm px-6 py-3 w-max"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TutorForm;
