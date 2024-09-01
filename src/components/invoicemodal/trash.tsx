// import React from "react";

// const senderDetails = {
//   title: "SENDER",
//   items: [
//     { label: "Company", value: "Fabulous Enterprise" },
//     { label: "Phone", value: "+336 899 271 315" },
//     { label: "Address", value: "1334 Briar Ridge Road, 46346 Gaines, MI" },
//     { label: "Email", value: "info@fabulousenterprise.co", type: "email" },
//   ],
// };

// const customerDetails = {
//   title: "CUSTOMER",
//   items: [
//     { label: "Name", value: "Olaniyi Ojo Adewale" },
//     { label: "Phone", value: "+386 899 271 315" },
//     { label: "Email", value: "info@fabulousenterprise.co", type: "email" },
//   ],
// };

// const invoiceDetails = [
//   { label: "Invoice No:", value: "10239203920" },
//   { label: "Issue Date", value: "March 30th, 2023" },
//   { label: "Due Date", value: "May 19th, 2023" },
//   { label: "Billing Currency", value: "USD ($)" },
// ];

// const items = [
//   {
//     description: "Email Marketing",
//     extraDescription: "Sed ut perspiciatis undes omnis iste natus error sit voluptatem accusantium",
//     quantity: "10",
//     unitPrice: "$1,500",
//     total: "$15,000.00",
//   },
//   {
//     description: "Video Looping Effect",
//     quantity: "6",
//     unitPrice: "$1,110,500",
//     total: "$6,663,000.00",
//   },
//   {
//     description: "Graphic Design for Emails",
//     extraDescription: "Tsit voluptatem accusantium",
//     quantity: "7",
//     unitPrice: "$2,750",
//     total: "$19,250.00",
//   },
//   {
//     description: "Video Looping Effect",
//     quantity: "6",
//     unitPrice: "$1,110,500",
//     total: "$6,663,000.00",
//   },
// ];

// const paymentInfo = [
//   { label: "Account Name", value: "Fabulous Enterprise" },
//   { label: "Account Number", value: "10239203920" },
//   { label: "ACH Routing No", value: "1032456" },
//   { label: "Bank Name", value: "USD($)" },

//   {label: "Bank address", value: "Lagos"},
// ];

// const InvoiceDetails: React.FC = () => {
//   return (
//     <div className="p-8 border rounded-[50px] shadow-md w-[750px] mt-6 mb-6">
    
//       <section className="bg-pink-100 p-6 rounded-[40px] mb-8">
//       <div className="flex justify-between mb-8 border border-black gap-[80px]">
//   {/* SENDER Section */}
//   <div className="w-1/2 pr-8">
//     <h2 className="font-semibold text-sm text-gray-500">{senderDetails.title}</h2>
//     <div className="text-gray-400 mt-4 space-y-1">
//   {senderDetails.items.map((item, index) => (
//     <p key={index} className={`text-sm ${item.type === "email" ? "text-gray-400" : "text-black font-normal"}`}>
//       {item.type === "email" ? <a href={`mailto:${item.value}`} className="text-gray-400 no-underline">{item.value}</a> : item.value}
//     </p>
//   ))}
// </div>


//   </div>

//   {/* CUSTOMER Section */}
//   <div className="w-1/2 pl-8 p-4 rounded-lg border border-red-500">
//     <h2 className="font-semibold text-lg text-gray-600">{customerDetails.title}</h2>
//     <address className="text-gray-500 mt-4 space-y-1">
//       {customerDetails.items.map((item, index) => (
//         <p key={index} className={`text-xl ${item.type === "email" ? "text-blue-600 hover:underline" : "font-bold"}`}>
//           {item.type === "email" ? <a href={`mailto:${item.value}`}>{item.value}</a> : item.value}
//         </p>
//       ))}
//     </address>
//   </div>
// </div>

//         {/* <div className="flex justify-between mb-8 border border-black">
        
//           <div className="w-1/2">
//             <h2 className="font-semibold text-lg text-gray-600">{senderDetails.title}</h2>
//             <address className="text-gray-500 mt-4 space-y-1">
//               {senderDetails.items.map((item, index) => (
//                 <p key={index} className={`text-xl ${item.type === "email" ? "text-blue-600 hover:underline" : "font-bold"}`}>
//                   {item.type === "email" ? <a href={`mailto:${item.value}`}>{item.value}</a> : item.value}
//                 </p>
//               ))}
//             </address>
//           </div>

//           <div className="w-1/2 p-4 rounded-lg border border-[red]">
//             <h2 className="font-semibold text-lg text-gray-600">{customerDetails.title}</h2>
//             <address className="text-gray-500 mt-4 space-y-1">
//               {customerDetails.items.map((item, index) => (
//                 <p key={index} className={`text-xl ${item.type === "email" ? "text-blue-600 hover:underline" : "font-bold"}`}>
//                   {item.type === "email" ? <a href={`mailto:${item.value}`}>{item.value}</a> : item.value}
//                 </p>
//               ))}
//             </address>
//           </div>
//         </div> */}

//         {/* Invoice Details Section */}
//         <div className="mt-8">
//   <h2 className="font-semibold text-lg text-gray-600 mb-4">INVOICE DETAILS</h2>
//   <div className="flex gap-8 text-gray-500 ">
//     {invoiceDetails.map((detail, index) => (
//       <div key={index} className="flex flex-col items-start gap-4">
//         <p className="text-sm">{detail.label}</p>
//         <p className="font-semibold text-black">{detail.value}</p>
//       </div>
//     ))}
//   </div>
// </div>

//         {/* <div className="mt-8">
//           <h2 className="font-semibold text-lg text-gray-600">INVOICE DETAILS</h2>
//           <div className="grid grid-cols-4 gap-4 text-gray-500">
//             {invoiceDetails.map((detail, index) => (
//               <React.Fragment key={index}>
//                 <p>{detail.label}</p>
//                 <p className="font-semibold text-black">{detail.value}</p>
//               </React.Fragment>
//             ))}
//           </div>
//         </div> */}
//       </section>

//       {/* Items Section */}
//       <section className="flex items-center mb-4 mt-4 gap-4">
//         <h2 className="font-semibold text-[30px] text-gray-600 mr-4">Items</h2>
//         <span className="border-b border-gray-300 flex-grow"></span>
//       </section>
//       <section className="mb-6">
//   <div className="grid grid-cols-6 gap-4 text-gray-500 ">
//     {items.map((item, index) => (
//       <React.Fragment key={index}>
//         <div className={`col-span-3`}>
//           <p className="font-normal text-[22px]">{item.description}</p>
//           {item.extraDescription && (
//             <p className="text-sm text-gray-400 font-normal text-[18px]">{item.extraDescription}</p>
//           )}
//         </div>
//         <div className="col-span-1 text-right">{item.quantity}</div>
//         <div className="col-span-1 text-right font-normal">{item.unitPrice}</div>
//         <div className="col-span-1 text-right">{item.total}</div>
//       </React.Fragment>
//     ))}
//   </div>
// </section>

// {/* Summary */}
// <section className="mb-6">
//   <div className="grid grid-cols-6 gap-4 text-gray-500 mb-6">
//     <p className="col-start-3 col-span-2 text-right items-start uppercase text-gray-300">Subtotal</p>
//     <p className="col-start-6 col-span-1 text-right font-semibold text-black">$6,697,200.00</p>
//   </div>

//   <div className="grid grid-cols-6 gap-4 text-gray-500 mb-6">
//     <p className="col-start-4 col-span-2 uppercase text-gray-300 ">Discount (2.5%)</p>
//     <p className="col-start-6 col-span-1 text-right font-semibold text-black">-$167,430.00</p>
//   </div>

//   <div className="grid grid-cols-6 gap-4 text-lg font-bold text-black mb-6">
//     <p className="col-start-3 col-span-2 text-right uppercase font-normal">Total Amount Due</p>
//     <p className="col-start-6 col-span-1 text-right">$6,529,770.00</p>
//   </div>
// </section>

      
//       {/* Payment Information Section */}
//       <section className="border p-4 rounded-[30px]">
//   <h2 className="font-semibold text-lg text-gray-600 mb-4">PAYMENT INFORMATION</h2>
//   <div className="grid grid-cols-4 gap-4 text-gray-500 uppercase">
//     {paymentInfo.map((info, index) => (
//       <div key={index} className="flex flex-col">
//         <p className="text-sm">{info.label}</p>
//         <p className="font-semibold text-black">{info.value}</p>
//       </div>
//     ))}
//   </div>
// </section>

//       {/* <section className="border p-4 rounded-[30px]">
//         <h2 className="font-semibold text-lg text-gray-600">PAYMENT INFORMATION</h2>
//         <div className="grid grid-cols-4 gap-4 text-gray-500">
//           {paymentInfo.map((info, index) => (
//             <React.Fragment key={index}>
//               <p>{info.label}</p>
//               <p className="font-semibold text-black">{info.value}</p>
//             </React.Fragment>
//           ))}
//         </div>
//       </section> */}

//       {/* Note Section */}
//       <section className="mt-6 bg-gray-100 border p-6 rounded-[30px]">
//         <p className="text-gray-400">NOTE</p>
//         <p className="font-normal text-[20px] text-gray-500">Thank you for your patronage</p>
//       </section>
//     </div>
//   );
// };

// export default InvoiceDetails;



{/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> */}



// import React from "react";

// const InvoiceActivity: React.FC = () => {
//   const activities = [
//     {
//       time: "Today, 12:20 PM",
//       description: "Created invoice 00239434/Olaniyi Ojo Adewale",
//       user: "You",
//     },
//     {
//       time: "Today, 12:20 PM",
//       description: "Sent invoice 00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale",
//       user: "You",
//     },
//     {
//       time: "Today, 12:20 PM",
//       description: "You manually confirmed a partial payment of $503,000.00",
//       user: "Payment Confirmed",
//     },
//     {
//       time: "Today, 12:20 PM",
//       description: "You manually confirmed a full payment of $6,000,000.00",
//       user: "Payment Confirmed",
//     },
//     {
//       time: "Today, 12:20 PM",
//       description: "Sent invoice 00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale",
//       user: "You",
//     },
//   ];

//   return (
//     <div className="bg-white p-4 md:p-6 rounded-lg">
//       <h2 className="font-semibold text-md md:text-lg text-gray-600 mb-4">Invoice Activity</h2>
//       {activities.map((activity, index) => (
//         <div key={index} className="flex flex-col md:flex-row items-start mb-4">
//           <img
//             src="/images/avatarmi.png"
//             alt="User"
//             className="rounded-full w-8 h-8 md:w-10 md:h-10 mr-0 md:mr-4 mb-2 md:mb-0"
//           />
//           <div>
//             <p className="font-semibold text-black text-sm md:text-base">{activity.user}</p>
//             <p className="text-gray-500 text-xs md:text-sm">{activity.time}</p>
//             <p className="text-black text-sm md:text-base">{activity.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InvoiceActivity;



// import React from 'react';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import InvoiceStats from './components/InvoiceStats';
// import InvoiceActions from './components/InvoiceActions';
// import RecentInvoices from './components/RecentInvoices';
// import RecentActivities from './components/RecentActivities';

// const App: React.FC = () => {
//   return (
//     <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-8 bg-gray-100">

//         <Header />
//         <InvoiceStats />
//         <InvoiceActions />

//         <div className="flex flex-col lg:flex-row justify-between gap-6 mt-8">
//           <RecentInvoices />
//           <RecentActivities />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default App;


// import React from "react";
// import InvoiceHeader from "./InvoiceHeader";
// import InvoiceDetails from "./InvoiceDetails";
// import InvoiceActivity from "./InvoiceActivity";
// import InvoiceReminder from "./InvoiceReminder";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const InvoicePage: React.FC<ModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//     <div className=" inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="relative max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <button
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <InvoiceHeader />
//         <div className="mt-4">
//           <InvoiceReminder />
//           <div className="flex flex-col lg:flex-row gap-6">
//             <div className="lg:w-2/3 w-full">
//               <InvoiceDetails />
//             </div>
//             <div className="lg:w-1/3 w-full">
//               <InvoiceActivity />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvoicePage;

// import React from 'react';
// import { HiOutlineViewGrid } from 'react-icons/hi';

// const InvoiceStats: React.FC = () => {
//   const stats = [
//     { title: 'Total Paid', value: '$4,120,102.76', color: 'text-green-500' },
//     { title: 'Total Overdue', value: '$23,000.13', color: 'text-red-500' },
//     { title: 'Total Draft', value: '$12,200.00', color: 'text-gray-400' },
//     { title: 'Total Unpaid', value: '$87,102.00', color: 'text-yellow-500' },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//       {stats.map((stat) => (
//         <div
//           key={stat.title}
//           className="p-6 bg-white rounded-lg border h-48 flex flex-col justify-between items-start shadow-lg"
//         >
//           <HiOutlineViewGrid className={`w-10 h-10 ${stat.color}`} />
//           <h3 className="text-gray-600 font-semibold">{stat.title}</h3>
//           <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InvoiceStats;

// // <div
// key={stat.title}
// className={`p-4 bg-white shadow rounded-lg border-t-4 border-${stat.color} h-48 w-48 flex flex-col justify-center items-center`}
// >



// import React from "react";

// const InvoiceActions: React.FC = () => {
//   return (
//     <div className="">
//     <p className="text-lg font-bold mb-6">Invoice Actions</p>
//      <div className="grid grid-cols-3 gap-4 mb-10">
   
//    <div className="bg-blue-500 p-4 text-white text-center rounded-lg   h-48 flex flex-col justify-center items-center ">
//      <h3 className="font-bold">Create New Invoice</h3>
//      <p>Create new invoices easily</p>
//    </div>
//    <div className="bg-white p-4 text-center rounded-lg shadow flex flex-col justify-center items-center">
//      <h3 className="font-bold">Change Invoice Settings</h3>
//      <p>Customize your invoices</p>
//    </div>
//    <div className="bg-white p-4 text-center rounded-lg shadow flex flex-col justify-center items-center">
//      <h3 className="font-bold">Manage Customer List</h3>
//      <p>Add and remove customers</p>
//    </div>
//  </div>
//     </div>
   
//   );
// };

// export default InvoiceActions;



// import React, {useState} from "react";
// import jsPDF from "jspdf";

// const InvoiceHeader: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     }

//     const downloadPDF = () => {
//         const doc = new jsPDF();
//         doc.text("Invoice -  1023494 - 2304", 20, 20);
//         doc.text("View the details and activity of this invoice", 20, 30);
//         doc.save("invoice-1023494-2304.pdf");
//     }

//   return (
//     <header className="flex gap-10 justify-between items-center">
//       <div className="flex flex-col items-start">
//         <h1 className="text-2xl font-bold">Invoice - 1023494 - 2304</h1>
//         <p className="text-gray-500 mb-2 mt-2">View the details and activity of this invoice</p>
//         <button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium mt-4 mb-4 uppercase">
//           Partial Payment
//         </button>
//       </div>
//       <div className="flex space-x-2 items-end">
      
//         <button onClick={downloadPDF} className="w-[75vw] md:w-[240px] bg-white border text-blue-600 uppercase px-4 py-2 rounded-full font-medium">
//           Download as PDF
//         </button>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium ww-[75vw] md:w-[240px] uppercase">
//           Send Invoice
//         </button>
//         <div className="relative">
//           <button 
//             onClick={toggleDropdown}
//           className="w-[80px] h-[60px] bg-white border uppercase text-gray-600 px-4 py-2 rounded-full font-medium">
//             More
//           </button>
//           {isOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
//           <ul>
//             <li className="px-4 py-2 text-gray-500 uppercase hover:bg-gray-100 cursor-pointer">
//               Duplicate Invoice
//             </li>
//             <li className="px-4 py-2 text-gray-500 uppercase hover:bg-gray-100 cursor-pointer">
//               Get Sharable Link
//             </li>
//           </ul>
//         </div>
//       )}
        
//         </div>
//       </div>
//     </header>
//   );
// };

// export default InvoiceHeader;









// import React, { useState } from "react";
// import jsPDF from "jspdf";

// const InvoiceHeader: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     }

//     const downloadPDF = () => {
//         const doc = new jsPDF();
//         doc.text("Invoice -  1023494 - 2304", 20, 20);
//         doc.text("View the details and activity of this invoice", 20, 30);
//         doc.save("invoice-1023494-2304.pdf");
//     }

//     return (
//         <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center p-4 lg:p-8 bg-white shadow-md rounded-lg">
//             <div className="mb-4 lg:mb-0">
//                 <h1 className="text-xl lg:text-2xl font-bold">Invoice - 1023494 - 2304</h1>
//                 <p className="text-gray-500 mt-2">View the details and activity of this invoice</p>
//                 <button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium mt-4 uppercase">
//                     Partial Payment
//                 </button>
//             </div>
//             <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
//                 <button 
//                     onClick={downloadPDF}
//                     className="w-full lg:w-[240px] h-[60px] bg-white border text-blue-600 uppercase px-4 py-2 rounded-full font-medium mb-2 lg:mb-0"
//                 >
//                     Download as PDF
//                 </button>
//                 <button className="w-full lg:w-[240px] h-[60px] bg-blue-600 text-white px-4 py-2 rounded-full font-medium mb-2 lg:mb-0 uppercase">
//                     Send Invoice
//                 </button>
//                 <div className="relative">
//                     <button
//                         onClick={toggleDropdown}
//                         className="w-full lg:w-[80px] h-[60px] bg-white border uppercase text-gray-600 px-4 py-2 rounded-full font-medium mb-2 lg:mb-0"
//                     >
//                         More
//                     </button>
//                     {isOpen && (
//                         <div className="absolute right-0 mt-2 w-full lg:w-48 bg-white shadow-lg rounded-lg">
//                             <ul>
//                                 <li className="px-4 py-2 text-gray-500 uppercase hover:bg-gray-100 cursor-pointer">
//                                     Duplicate Invoice
//                                 </li>
//                                 <li className="px-4 py-2 text-gray-500 uppercase hover:bg-gray-100 cursor-pointer">
//                                     Get Sharable Link
//                                 </li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InvoiceHeader;


// import React from 'react';

// const RecentActivities: React.FC = () => {
//   const activities = [
//     {
//       description: 'Invoice creation',
//       time: 'Yesterday, 12:05 PM',
//       user: 'Olaniyi Ojo Adewale',
//       invoiceId: '00239434',
//       avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
//     },
//     {
//       description: 'Invoice creation',
//       time: 'Yesterday, 12:05 PM',
//       user: 'Olaniyi Ojo Adewale',
//       invoiceId: '00239434',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       description: 'Invoice creation',
//       time: 'Yesterday, 12:05 PM',
//       user: 'Olaniyi Ojo Adewale',
//       invoiceId: '00239434',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       description: 'Invoice creation',
//       time: 'Yesterday, 12:05 PM',
//       user: 'Olaniyi Ojo Adewale',
//       invoiceId: '00239434',
//       avatar: 'https://via.placeholder.com/40',
//     },
//   ];

//   return (
//     <div className="bg-white p-4 rounded-[30px] shadow w-[460px]">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold">Recent Activities</h3>
//         <button className="text-blue-500 border border-blue-500 rounded-full px-6 py-2">View All</button>
//       </div>
//       <ul>
//         {activities.map((activity, index) => (
//           <li key={index} className="flex items-center mb-4">
//             <img
//               src={activity.avatar}
//               alt={activity.user}
//               className="w-12 h-12 rounded-full mr-4 mb-20"
//             />
//             <div className='mb-6 border'>
//               <p className="font-bold">{activity.description}</p>
//               <p className="text-gray-500">{activity.time}</p>
//               <div className='bg-gray-100 rounded-[20px] m-2 w-[85%] '>
//               <p>
//                 Created invoice <span className="font-bold">{activity.invoiceId}</span>/
//                 {activity.user}
//               </p>
//               </div>
           
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecentActivities;


// import React from 'react';

// const RecentInvoices: React.FC = () => {
//   const invoices = [
//     {
//       date: 'Today - 27th November, 2022',
//       items: [
//         {
//           id: '1023494-2304',
//           dueDate: 'May 19th, 2023',
//           amount: '$1,311,750.12',
//           status: 'Paid',
//         },
//         {
//           id: '1023494-2304',
//           dueDate: 'May 19th, 2023',
//           amount: '$1,311,750.12',
//           status: 'Overdue',
//         },
//       ],
//     },
//     {
//       date: '8th December, 2022',
//       items: [
//         {
//           id: '1023494-2304',
//           dueDate: 'May 19th, 2023',
//           amount: '$1,311,750.12',
//           status: 'Draft',
//         },
//         {
//           id: '1023494-2304',
//           dueDate: 'May 19th, 2023',
//           amount: '$1,311,750.12',
//           status: 'Pending Payment',
//         },
//         {
//           id: '1023494-2304',
//           dueDate: 'May 19th, 2023',
//           amount: '$1,311,750.12',
//           status: 'Paid',
//         },
//       ],
//     },
//   ];

//   const statusColorMap: { [key: string]: string } = {
//     Paid: 'text-green-500',
//     Overdue: 'text-red-500',
//     Draft: 'text-gray-500',
//     'Pending Payment': 'text-yellow-500',
//   };

//   return (
//     <div className="bg-white p-6 rounded-[30px] shadow mb-8 w-[80%]">
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="font-bold text-xl">Recent Invoices</h3>
//         <button className="text-blue-500 border border-blue-500 rounded-full px-6 py-2">
//           View All Invoices
//         </button>
//       </div>

//       {invoices.map((invoiceGroup, groupIndex) => (
//         <div key={groupIndex} className="mb-8">
//           <h4 className="text-black mb-4 uppercase font-semibold text-sm">{invoiceGroup.date}</h4>
//           <ul>
//             {invoiceGroup.items.map((invoice, index) => (
//               <li key={index} className="flex justify-between items-center mb-6 p-4">
//                 <div className="flex flex-col">
//                   <span className="font-bold">Invoice -</span>
//                   <span className='font-semibold '>{invoice.id}</span>
//                 </div>
//                 <div className="flex flex-col items-start">
//                   <span className="font-normal text-gray-500 uppercase ">Due Date</span>
//                   <span className='font-semibold text-gray-500'>{invoice.dueDate}</span>
//                 </div>
//                 <div className="flex flex-col items-end">
//                   <span className="text-black font-bold">{invoice.amount}</span>
//                   <span className={`uppercase ${statusColorMap[invoice.status]}`}>
//                     {invoice.status}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecentInvoices;



// import React from "react";

// const Reminders: React.FC = () => {
//   return (
//     <div className="mt-8 mb-8 border border-gray-100 p-4 rounded-lg w-[100%] h-[100px]">
//       <div className="flex flex-col sm:flex-row items-center gap-2 overflow-x-auto ml-[-10px]">
//         <h2 className="font-semibold text-lg text-gray-600">REMINDERS</h2>
//         <div className="flex flex-wrap gap-2">
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
//                 index === 0 ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-600"
//               } font-medium py-1 px-2 rounded-full border text-xs md:text-sm`}
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
