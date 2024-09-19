
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="w-60 h-full flex flex-col items-start justify-start ">
      <div className="w-full h-16 flex items-center justify-center border-b sticky top-0 bg-white">
        <Link to="/">
          <h1 className="text-3xl font-bold">Chatbot</h1>
        </Link>
      </div>
      <div className="w-full p-2.5 flex flex-col items-start justify-start gap-2.5 max-h-full overflow-auto">
       
        <Link to="/">
          <div className="w-full flex items-center justify-start gap-5 ml-5">
            <GoHomeFill  className="size-8" />
            <p className="font-bold text-lg text-gray-700">User</p>
          </div>
        </Link>
      </div>
      {/* <div className="w-full h-24 border-b-2 flex items-center justify-center font-bold text-xl">
        NAME
      </div>
      <div className="flex justify-center m-5">
        <button className="w-full h-12 py-2.5 px-5 bg-primary text-white text-sm font-bold flex items-center gap-2 rounded-lg justify-center">
          <span>Create New Chatbot</span>
          <FaPlus className="size-4" />
        </button>
      </div>
      <div className="m-8 flex justify-start items-center space-x-8">
        <MdOutlineHome className="size-10" />
        <p className="font-bold text-lg text-gray-700">User</p>
      </div> */}
    </div>
  );
};

export default SideBar;
