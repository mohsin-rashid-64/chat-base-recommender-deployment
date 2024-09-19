import { BsChevronLeft, BsChevronRight, BsThreeDots } from "react-icons/bs";
import { users } from "../lib/data/userList";
import GlobalLayout from "../components/GlobalLayout";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import {  useState, useRef, useEffect } from "react";
import Modal from "../components/ui/Modal";
import SignUp from "../components/SignUp";
import { FaPlus } from "react-icons/fa";

const UserList = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(10);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState<Record<number, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (userId: number | null) => {
    setDropdownOpen((prev) => (prev === userId ? null : userId));
  };

  const handleDelete = (userId: number) => {
    console.log("Deleting user with ID:", userId);
  };

  const handleDeactivate = (userId: number) => {
    console.log("Deactivating user with ID:", userId);
  };

  const handleSelectAll = () => {
    const newCheckedState = !isAllChecked;
    setIsAllChecked(newCheckedState);
    const newCheckedUsers = users.reduce((acc, user) => {
      acc[user.id] = newCheckedState;
      return acc;
    }, {} as Record<number, boolean>);
    setCheckedUsers(newCheckedUsers);
  };

  const handleIndividualCheck = (userId: number) => {
    setCheckedUsers((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  // Handle click outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPages = Math.ceil(users.length / amount);

  // Calculate page numbers to display
  const getPageNumbers = () => {
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, page + 2);

    if (totalPages <= 5) {
      start = 1;
      end = totalPages;
    } else {
      if (page < 3) {
        end = 5;
      } else if (page > totalPages - 2) {
        start = totalPages - 4;
      }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <GlobalLayout>
      <div className="w-full h-full flex flex-col items-start justify-start">
        <div className="w-full flex items-center justify-between p-2.5 px-7">
          <h1 className="text-3xl font-semibold text-black">User List</h1>
          <button
            type="button"
            className="py-2.5 px-5 bg-primary text-white text-xs flex items-center gap-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            <span>Add New</span>
            <FaPlus className="size-4" />
          </button>
          <Modal open={open}>
            <SignUp setOpen={setOpen} />
          </Modal>
        </div>
        <div className="w-full h-[calc(100vh-178px)]">
          <div className="w-full h-full overflow-hidden">
            <div className="h-full overflow-y-scroll">
              <table className="w-full min-w-full relative">
                <thead className="sticky top-0 z-10 border-b-2 border-gray-300 bg-white">
                  <tr className="h-14">
                    <td className="px-6 font-medium text-sm">
                      <input
                        type="checkbox"
                        className="size-4"
                        checked={isAllChecked}
                        onChange={handleSelectAll}
                      />
                    </td>
                    <td className="px-6 font-medium text-sm">
                      <span className="font-semibold text-sm">Image</span>
                    </td>
                    <td className="px-6 font-medium text-sm">
                      <span className="font-semibold text-sm">Title</span>
                    </td>
                    <td className="px-6 font-medium text-sm">
                      <span className="font-semibold text-sm">
                        Contact Number
                      </span>
                    </td>
                    <td className="px-6 font-medium text-sm">
                      <span className="font-semibold text-sm">Status</span>
                    </td>
                    <td className="px-6 font-medium text-sm">
                      <span className="font-semibold text-sm">Action</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .slice(page * amount - amount, page * amount)
                    .map((user) => (
                      <tr key={user.id} className="h-14 border-b">
                        <td className="px-6 font-medium text-sm">
                          <input
                            type="checkbox"
                            className="size-4"
                            checked={!!checkedUsers[user.id]}
                            onChange={() => handleIndividualCheck(user.id)}
                          />
                        </td>
                        <td className="px-6 font-medium text-sm">
                          <Link to={`/user/${user.id}`}>
                            <img
                              src={user.image}
                              alt="profile"
                              className="size-9 rounded-full"
                            />
                          </Link>
                        </td>
                        <td className="px-6 font-medium text-sm">
                          <span>{user.name}</span>
                        </td>
                        <td className="px-6 font-medium text-sm">
                          <span>{user.contact}</span>
                        </td>
                        <td className="px-6 font-medium text-sm">
                          <div
                            className={cn(
                              "w-28 text-center py-1.5 rounded-md capitalize",
                              {
                                "bg-primary text-white":
                                  user.status === "active",
                                "bg-secondary text-black":
                                  user.status !== "active",
                              }
                            )}
                          >
                            {user.status}
                          </div>
                        </td>
                        <td className="px-6 font-medium text-sm relative">
                          <BsThreeDots
                            className="size-5 cursor-pointer"
                            onClick={() => toggleDropdown(user.id)}
                          />
                          {dropdownOpen === user.id && (
                            <div
                              ref={dropdownRef}
                              className="absolute right-0 w-28 bg-white border border-gray-300 shadow-lg rounded-md mt-2 z-20"
                            >
                              <div
                                onClick={() => handleDeactivate(user.id)}
                                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                              >
                                Deactivate
                              </div>
                              <div
                                onClick={() => handleDelete(user.id)}
                                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                              >
                                Delete
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination Counter */}
        <div className="w-full h-14 px-7 flex items-center justify-between fixed bottom-0 right-0 bg-white shadow-lg z-10">
          <p className="text-xs font-semibold">
            Showing {page} of {Math.ceil(users.length / amount)} Pages
          </p>

          <div className="flex-1 flex items-center justify-end">
            Display
            {/* <input
              className="w-8 bg-gray-300 mr-10 ml-4"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            /> */}
            <select
              className="bg-gray-300 mr-10 ml-4"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={25}>25</option>
            </select>
            {/* Backward Arrow: Disabled on first page */}
            <div
              onClick={() => page > 1 && setPage(page - 1)}
              className={cn(
                "text-xs text-black size-[25px] bg-secondary flex items-center justify-center cursor-pointer mr-2",
                {
                  "opacity-50 cursor-not-allowed": page === 1,
                }
              )}
            >
              <BsChevronLeft />
            </div>
            {/* Page Numbers */}
            {getPageNumbers().map((pg) => (
              <div
                key={pg}
                onClick={() => setPage(pg)}
                className={cn(
                  "text-xs text-black size-[25px] bg-secondary flex items-center justify-center cursor-pointer",
                  {
                    "bg-primary text-white": page === pg,
                  }
                )}
              >
                {pg}
              </div>
            ))}
            {/* Forward Arrow: Disabled on last page */}
            <div
              onClick={() => page < totalPages && setPage(page + 1)}
              className={cn(
                "text-xs text-black size-[25px] bg-secondary flex items-center justify-center cursor-pointer ml-2",
                {
                  "opacity-50 cursor-not-allowed": page === totalPages,
                }
              )}
            >
              <BsChevronRight />
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default UserList;
