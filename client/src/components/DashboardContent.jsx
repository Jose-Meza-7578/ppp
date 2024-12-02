import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardContent({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-20 md:ml-64 p-8 bg-gray-100 min-h-screen flex-1">
        {children}
      </div>
    </div>
  );
}

export default DashboardContent;
