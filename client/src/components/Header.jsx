import React from "react";
import carrito from "../assets/carrito.svg";

function Header({ openModal}) {
  return (
    <div className="">
      <div className="">
       
        <button
          onClick={openModal}
        >
         <img src={carrito} alt="" className="w-16"/>
        </button>
      </div>
    </div>
  );
}

export default Header;
