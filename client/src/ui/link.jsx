import React from "react";
import { Link } from "react-router-dom";



function link(children) {
  return (
    <Link
      to="/productos"
      className="flex items-center justify-center flex-shrink-0 w-24 h-10 mt-4 rounded hover:bg-gray-300"
    >
      {children}
    </Link>
  );
}

export default link;
