import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <div className="flex w-screen h-screen text-gray-700">
    //     <div className="flex flex-col items-center w-52 pb-4 overflow-auto border-r border-gray-300">
    //       {/* LOGO */}
    //       <a
    //         className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300"
    //         href="#"
    //       >
    //         <svg
    //           className="w-8 h-8"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    //           />
    //         </svg>
    //       </a>

    //       {/* SIDEBAR */}
    //       <a
    //         className="flex items-center justify-center flex-shrink-0 w-24 h-10 mt-4 rounded hover:bg-gray-300"
    //         href="#"
    //       >
    //         <span>Producto</span>
    //       </a>
    //       <a
    //         className="flex items-center justify-center flex-shrink-0 w-24 h-10 mt-4 rounded hover:bg-gray-300"
    //         href="#"
    //       >
    //         <span>Producto</span>
    //       </a>
    //       <a
    //         className="flex items-center justify-center flex-shrink-0 w-24 h-10 mt-4 rounded hover:bg-gray-300"
    //         href="#"
    //       >
    //         <span>Producto</span>
    //       </a>
    //       <a
    //         className="flex items-center justify-center flex-shrink-0 w-24 h-10 mt-4 rounded hover:bg-gray-300"
    //         href="#"
    //       >
    //         <span>Producto</span>
    //       </a>
    //     </div>
    //     <div className="flex flex-col flex-grow">
    //       <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
    //         <h1 className="text-lg font-medium">Page Title</h1>
    //         <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
    //           carrito
    //         </button>
    //       </div>
    //       <div className="flex-grow p-6 overflow-auto bg-gray-200">
    //         <div className="grid grid-cols-4 gap-6">
    //           <div className="h-24 col-span-1 bg-white border border-gray-300">
    //             1
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
