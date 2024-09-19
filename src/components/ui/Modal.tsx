import { cn } from "../../lib/utils";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal = ({ open, children }: ModalProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-[9999999] w-screen h-screen bg-black/50 flex items-center justify-center",
        {
          flex: open,
          hidden: !open,
        }
      )}
    >
      {/* Container for the modal content */}
      {/* <div className="bg-white rounded-lg w-full max-w-md mx-4 p-5 md:max-w-lg lg:max-w-xl"> */}
      <div className="bg-white rounded-3xl w-full max-w-md mx-4  md:max-w-md lg:max-w-md ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
