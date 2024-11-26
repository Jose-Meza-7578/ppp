import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardContent({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4 bg-gray-100 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardContent;
