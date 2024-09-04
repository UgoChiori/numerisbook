import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import InvoiceStats from "./components/InvoiceStats";
import InvoiceActions from "./components/InvoiceActions";
import RecentInvoices from "./components/RecentInvoices";
import RecentActivities from "./components/RecentActivities";

const App: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 md:h-screen md:overflow-y-auto ">
        <div className="p-4 lg:p-8 ">

          <Header />
          <InvoiceStats />
          <InvoiceActions />

          <div className="flex flex-col xl:flex-row justify-between gap-6 mt-8">
            <RecentInvoices />
            <RecentActivities />
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default App;
