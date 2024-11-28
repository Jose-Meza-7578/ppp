import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-cyan-400 text-white p-5">
      <nav>
        <ul className="space-y-4">
          <li >
            <Link to="/productos" className="flex items-center justify-center flex-shrink-0 w-24 h-10 mt-4 rounded hover:bg-gray-300">
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
    
  );
}

export default Sidebar;
