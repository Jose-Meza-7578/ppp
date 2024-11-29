import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    // <div className="flex">
    //   <div className="w-20 md:w-64 bg-gray-800 transition-width duration-300 text-white">
    //     <div className="flex justify-between items-center p-4">
    //       <h2 className="text-xl font-bold hidden md:block" >My app</h2>
    //       <button>Abrir</button>
    //     </div>
    //     <nav className="mt-4">
    //       <ul>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //         <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    //             />
    //           </svg>

    //           <span className="ml-4 md:block">home</span>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>

    //   {/* dashboard */}

    //   <div className="p-8 bg-gray-100 min-h-screen flex-1">dashboard</div>
    // </div>
    <>
      <aside className="w-64 h-screen bg-cyan-400 text-white p-5">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/productos"
                className="flex items-center justify-center flex-shrink-0 w-24 h-10 mt-4 rounded hover:bg-gray-300"
              >
                <span>Productos</span>
              </Link>
            </li>
            <li className="mx-5 my-0">
              <Link to="/requerimientos" className="text-lg hover:underline">
                Requerimientos
              </Link>
            </li>
            <li className="mx-5 my-0">
              <Link to="/auth" className="text-lg hover:underline">
                Perfil
              </Link>
            </li>
            <li className="mx-5 my-0">
              <Link to="/porsia" className="text-lg hover:underline">
                Porsia
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
