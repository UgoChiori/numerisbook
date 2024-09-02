

// // import React from "react";

// // const Reminders: React.FC = () => {
// //   return (
// //     <div className="mt-8 mb-8 border border-gray-100 p-4 rounded-lg w-[100%] h-[100px] flex items-center justify-center">
// //       <div className="flex flex-col sm:flex-row items-start gap-2  ">
// //         <h2 className="font-semibold text-lg text-gray-600">REMINDERS</h2>
// //         <div className="flex gap-2">
// //           {[
// //             "14 days before due date",
// //             "7 days before due date",
// //             "3 days before due date",
// //             "24 hrs before due date",
// //             "On the due date",
// //           ].map((reminder, index) => (
// //             <span
// //               key={index}
// //               className={`${
// //                 index === 0   ? "bg-green-100 text-green-600" : "bg-[#FFFFFF] text-black"
// //               } font-[400] w-[200px] h-[45px] rounded-full border text-xs md:text-sm`}
// //             >
// //               {reminder}
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Reminders;

// import React from "react";

// const Reminders: React.FC = () => {
//   return (
//     <div className="mt-8 mb-8 border border-gray-100 p-4 rounded-lg w-full flex items-center justify-center">
//       <div className="flex items-center gap-4 w-full overflow-x-auto">
//         <h2 className="font-semibold text-lg text-gray-600 whitespace-nowrap">REMINDERS</h2>
//         <div className="flex gap-4 flex-nowrap">
//           {[
//             "14 days before due date",
//             "7 days before due date",
//             "3 days before due date",
//             "24 hrs before due date",
//             "On the due date",
//           ].map((reminder, index) => (
//             <span
//               key={index}
//               className={`${
//                 index === 0 ? "bg-green-100 text-green-600" : "bg-[#FFFFFF] text-black"
//               } font-[400] w-[200px] h-[45px] rounded-full border flex items-center justify-center text-xs md:text-sm whitespace-nowrap`}
//             >
//               {reminder}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reminders;

// import React from "react";

// const Reminders: React.FC = () => {
//   return (
//     <div className="mt-8 mb-8 border border-gray-100 p-4 rounded-lg w-full flex items-center justify-between">
//       <h2 className="font-semibold text-lg text-gray-600 whitespace-nowrap">REMINDERS</h2>
//       <div className="flex gap-2 flex-nowrap">
//         {[
//           "14 days before due date",
//           "7 days before due date",
//           "3 days before due date",
//           "24 hrs before due date",
//           "On the due date",
//         ].map((reminder, index) => (
//           <span
//             key={index}
//             className={`${
//               index === 0 ? "bg-green-100 text-green-600" : "bg-[#FFFFFF] text-black"
//             } font-[400] px-3 py-2 rounded-full border text-xs md:text-sm whitespace-nowrap`}
//           >
//             {reminder}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reminders;

import React from "react";

const Reminders: React.FC = () => {
  return (
    <div className="mt-8 mb-8 border border-gray-100 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between">
      <h2 className="font-semibold md:font-[400] md:mr-2  md:text-[12px] text-[#666F77] mb-4 md:mb-0 whitespace-nowrap">
        REMINDERS
      </h2>
      <div className="flex gap-2 flex-wrap md:flex-nowrap justify-center">
        {[
          "14 days before due date",
          "7 days before due date",
          "3 days before due date",
          "24 hrs before due date",
          "On the due date",
        ].map((reminder, index) => (
          <span
            key={index}
            className={`${
              index === 0 ? "bg-green-100 text-green-600" : "bg-[#FFFFFF] text-black"
            } font-[400] px-3 py-2 rounded-full border text-xs md:text-sm whitespace-nowrap`}
          >
            {reminder}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Reminders;