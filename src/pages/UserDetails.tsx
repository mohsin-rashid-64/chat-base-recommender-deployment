import GlobalLayout from "../components/GlobalLayout";
import profileimg from "../assets/img/image.svg";
import UsageGraph from "../components/UsageGraph";
import { users } from "../lib/data/userList";
import { useParams } from "react-router-dom";

const UserDetails = () => {
   const { id } = useParams<{ id: string }>();
   const userId = parseInt(id ?? "0", 10); // Provide a fallback if `id` is undefined
   const user = users.find((user) => user.id === userId);

   if (!user) {
     return <p>User not found</p>;
   }
  return (
    <GlobalLayout>
      <div className="w-full h-full flex flex-col items-start justify-start px-5 pb-8 bg-white">
        <div className="relative w-full rounded-xl flex flex-col items-center justify-center bg-white">
          <div className="w-full h-20 rounded-t-xl bg-gradient-to-t from-primary/40 via-primary/30 to-primary/15 border-b-primary/50 border-b-2"></div>
          <div className="w-full pt-10 px-5 pb-2.5 h-40 rounded-b-xl bg-white flex flex-col items-center justify-center shadow-down ">
            <p className="w-full text-left text-xl font-semiboldbold mt-10 md:mt-0">
              {user.name}
            </p>
            <div className="w-full flex items-center justify-between ">
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Exercitationem eius impedit doloribus?
              </p>
              <div className="flex-1 flex items-center justify-end gap-2.5">
                <div className="space-x-10 flex flex-col md:flex-row space-y-4 md:space-y-0 ml-2 ">
                  <button className="bg-primary text-white py-2 px-4 rounded-lg">
                    Reset Password
                  </button>
                  <button className="bg-[#efefef] py-2 px-4 rounded-lg">
                    Deactivate
                  </button>
                </div>
              </div>
            </div>
            <img
              src={user.image}
              alt="profile"
              className="size-20 rounded-full absolute top-10 left-5 "
            />
          </div>
        </div>
      </div>

      {/* Reduce gap between sections */}
      <div className="w-full px-5 bg-white">
        <UsageGraph />
      </div>
    </GlobalLayout>
  );
};

export default UserDetails;
