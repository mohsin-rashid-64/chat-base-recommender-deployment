import { IoMdClose } from "react-icons/io";
import Modal from "./ui/Modal";

const SignUp = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal open={true}>
      <div className="w-full max-w-md  bg-white rounded-3xl overflow-hidden">
        <div className="w-full flex items-center justify-between py-4 px-4 bg-primary">
          <p className="text-lg font-semibold text-white">Create an Account</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="size-7 rounded-full bg-white p-1 text-black"
          >
            <IoMdClose className="size-full" />
          </button>
        </div>
        <form className="w-full p-4 flex flex-col items-start justify-center gap-6 px-10">
          <div className="w-full flex flex-col items-center justify-center gap-1">
            <label className="w-full text-left text-xs font-semibold text-black">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-2 bg-[#efefef] rounded-lg text-xs placeholder:text-gray-200 placeholder:text-xs"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-1">
            <label className="w-full text-left text-xs font-semibold text-black">
              Email
            </label>
            <input
              type="email"
              placeholder="email@email.com"
              className="w-full p-2 bg-[#efefef] rounded-lg text-xs placeholder:text-gray-200 placeholder:text-xs"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-1">
            <label className="w-full text-left text-xs font-semibold text-black">
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              className="w-full p-2 bg-[#efefef] rounded-lg text-xs placeholder:text-gray-200 placeholder:text-xs"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-1">
            <label className="w-full text-left text-xs font-semibold text-black">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="*********"
              className="w-full p-2 bg-[#efefef] rounded-lg text-xs placeholder:text-gray-200 placeholder:text-xs"
            />
          </div>
          <div className="w-full flex items-center justify-end gap-4">
            <button
              type="button"
              className="py-1.5 px-4 rounded-lg bg-[#efefef] text-black font-medium"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-1.5 px-4 rounded-lg bg-primary text-white font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignUp;
