import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    // <aside className="w-64 h-screen bg-cyan-400 text-white p-5">
    //   <nav>
    //     <ul className="space-y-4">
    //       <li className="mx-5 my-0">
    //         <Link to="/productos" className="text-lg hover:underline">
    //           Productos
    //         </Link>
    //       </li>
    //       <li className="mx-5 my-0">
    //         <Link to="/pedidos" className="text-lg hover:underline">
    //           Pedidos
    //         </Link>
    //       </li>
    //       <li className="mx-5 my-0">
    //         <Link to="/auth" className="text-lg hover:underline">
    //           Perfil
    //         </Link>
    //       </li>
    //       <li className="mx-5 my-0">
    //         <Link to="/porsia" className="text-lg hover:underline">
    //           Porsia
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </aside>
    <div>
      <nav className="fixed w-20 h-screen bg-gray-600 px-4 py-3 rounded-xl flex flex-col transition-width duration-500 ease">
        <div className="flex items-center justify-start gap-6">
          <a href="">
            <img src="" alt="" />
            <h2>Logo</h2>
          </a>
          <button>
            <img src="" alt="" />
          </button>
        </div>
        <div>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>djskj</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>djskj</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>djskj</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>djskj</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>djskj</span>
            </a>
          </li>
        </div>
        <div>
          <div>
            <a href="">
              <img src="" alt="" />
              <span></span>
            </a>
          </div>
          <div class="user-profile">
            <div class="user-avatar">
              <img src="./assets/profile-pic.jpg" alt="" />
            </div>
            <div class="user-details hidden">
              <p class="username">Jane Doe</p>
              <p class="user-email">janedoe@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
