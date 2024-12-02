import React from "react";
import tachito from "../assets/tachito.svg";
import restar from "../assets/disminuir.svg";
import agregar from "../assets/agregar.svg";
import ProcesarPedido from "./ProcesarPedido";
import { useNavigate } from "react-router-dom";



function CarritoModal({ closeModal, cartItems, removeFromCart,incrementQuantity, decrementQuantity }) {

  const navigate = useNavigate();
  const ProcesarPedido = () => {
    navigate("/procesar");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-screen h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">Carrito de Pedidos</h2>
        {cartItems.length === 0 ? (
          <p className="mb-4">El carrito está vacío.</p>
        ) : (
          <table className="w-full mb-4">
            <thead>
              <tr>
                <th className="text-left"></th>
                <th className="text-left">Producto</th>
                <th className="text-center">Cantidad</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                    <td><img
                      src={`data:image/jpeg;base64,${item.Foto}`}
                      alt={item.descripcion}
                      className="w-full h-full object-cover"
                    /></td>
                  <td className="py-2">{item.descripcion}</td>
                  <td className="py-2 text-center">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => decrementQuantity(index)}
                        className="bg-gray-300 text-black px-2 py-1 rounded"
                      >
                        <img src={restar} alt="" width={16}/>
                      </button>
                      <span className="mx-2">{item.cantidad}</span>
                      <button
                        onClick={() => incrementQuantity(index)}
                        className="bg-gray-300 text-black px-2 py-1 rounded"
                      >
                        <img src={agregar} alt="" width={16}/>
                      </button>
                    </div>
                  </td>
                  <td className="py-2 text-right">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      <img src={tachito} alt="Eliminar" width={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button onClick={ProcesarPedido} className="bg-green-600">Procesar Pedido</button>
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default CarritoModal;
