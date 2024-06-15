const CreateCourse = () => {
  return (
    <div className="p-4">
      <div className="mx-auto max-w-6xl border-[1px] p-8">
        <form className="grid sm:grid-cols-2 gap-6">
          <div className="col-span-full">
            <label className="font-semibold text-sm">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
            />
          </div>
          <div className="col-span-full">
            <label className="font-semibold text-sm">Short Description</label>
            <textarea
              placeholder="Short Description"
              rows="3"
              className="w-full rounded px-4 border-[1px] mt-2 text-sm pt-3 outline-[#007bff]"
            ></textarea>
          </div>
          <div className="col-span-full">
            <label className="font-semibold text-sm">
              Detailed Description
            </label>
            <textarea
              placeholder="Detailed Description"
              rows="6"
              className="w-full rounded px-4 border-[1px] mt-2 text-sm pt-3 outline-[#007bff]"
            ></textarea>
          </div>
          <div>
            <label className="font-semibold text-sm">Image URL</label>
            <input
              type="text"
              placeholder="Image URL"
              className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
            />
          </div>
          <div>
            <label className="font-semibold text-sm">Author Image URL</label>
            <input
              type="text"
              placeholder="Author Image URL"
              className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
            />
          </div>
          <div>
            <label className="font-semibold text-sm">Author Name</label>
            <input
              type="text"
              placeholder="Author Name"
              className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
            />
          </div>
          <div>
            <label className="font-semibold text-sm">Ratings</label>
            <input
              type="number"
              step="0.1"
              max="5"
              placeholder="Ratings"
              className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
            />
          </div>
          <div>
            <label className="font-semibold text-sm">Duration</label>
            <input
              type="text"
              placeholder="Duration"
              className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
            />
          </div>
          <div>
            <label className="font-semibold text-sm">Price</label>
            <input
              type="number"
              placeholder="Price"
              className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
            />
          </div>
          <div>
            <label className="font-semibold text-sm">Category</label>
            <input
              type="text"
              placeholder="Category"
              className="w-full rounded py-2.5 px-4 mt-2 border-[1px] text-sm outline-[#007bff]"
            />
          </div>
          <button
            type="button"
            className="text-white w-max bg-[#007bff] hover:bg-blue-600 font-semibold rounded text-sm px-6 py-3 col-span-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              className="mr-2 inline"
              viewBox="0 0 548.244 548.244"
            >
              <path
                fillRule="evenodd"
                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                clipRule="evenodd"
                data-original="#000000"
              />
            </svg>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
