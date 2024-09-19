import { useState } from "react";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for larger screens */}
      <div
        className={`border-r-2 ${isSidebarOpen ? "block" : "hidden"} md:block`}
      >
        <SideBar />
      </div>

      {/* Hamburger Menu */}
      <div className="absolute top-4 left-4 md:hidden">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FaBars className="text-3xl" />
        </button>
      </div>

      <div className="flex-1 w-full">
        <div className="w-full h-16">{/* <Navbar /> */}</div>
        <div className="flex gap-2 justify-between">
          <div className="w-full h-full overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLayout;
