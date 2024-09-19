
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { month: "Jan", usage: 0.5 },
//   { month: "Feb", usage: 0.4 },
//   { month: "Mar", usage: 0.75 },
//   { month: "Apr", usage: 0.5 },
//   { month: "May", usage: 0.35 },
//   { month: "Jun", usage: 0.6 },
//   { month: "Jul", usage: 0.8 },
//   { month: "Aug", usage: 0.5 },
//   { month: "Sep", usage: 0.3 },
//   { month: "Oct", usage: 0.6 },
//   { month: "Nov", usage: 0.4 },
//   { month: "Dec", usage: 0.7 },
// ];

// const UsageGraph = () => {
//   return (
//     <div className=" p-4 bg-white shadow rounded-lg">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">Usage Graph</h2>
//         <div className="">
//           <select className=" bg-gray-200 border border-gray-300 rounded-md py-1 px-3 text-sm">
//             <option>2023</option>
//             <option>2022</option>
//             <option>2021</option>
//           </select>
//         </div>
//       </div>

//       <ResponsiveContainer width="90%" height={400}>
//         <BarChart
//           data={data}
//           barCategoryGap="30%" // Adding spacing between bars
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis domain={[0, 1]} />
//           <Tooltip />
//           <Bar
//             className="p-20"
//             dataKey="usage"
//             fill="#4169E1"
//             radius={[30, 30, 30, 30]}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default UsageGraph;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { month: "Jan", usage: 0.5 },
  { month: "Feb", usage: 0.4 },
  { month: "Mar", usage: 0.75 },
  { month: "Apr", usage: 0.5 },
  { month: "May", usage: 0.35 },
  { month: "Jun", usage: 0.6 },
  { month: "Jul", usage: 0.8 },
  { month: "Aug", usage: 0.5 },
  { month: "Sep", usage: 0.3 },
  { month: "Oct", usage: 0.6 },
  { month: "Nov", usage: 0.4 },
  { month: "Dec", usage: 0.7 },
];

const UsageGraph = () => {
  return (
    <div className="p-4 bg-white shadow-2xl shadow-up rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex-grow text-center">
          Usage Graph
        </h2>
        <div className="flex justify-end">
          <select className="bg-gray-200 border border-gray-300 rounded-md py-1 px-3 text-sm text-primary">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 1]} />
          <Tooltip />
          <Bar dataKey="usage" radius={[30, 30, 30, 30]}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  // Change the color for 3rd, 6th, 9th, and 12th bars
                  index === 2 || index === 5 || index === 8 || index === 11
                    ? "#4169E1" // Custom color for these bars
                    : "#4169E14D" // Default color for other bars
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageGraph;
