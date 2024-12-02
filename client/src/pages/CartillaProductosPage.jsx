import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SeleccionarSede from "../ui/SeleccionarSede";
import CarritoModal from "../ui/CarritoModal";
import adicionar from "../assets/agregar.svg";

function CartillaProductosPage() {
  const [data, setData] = useState([]);
  const [sucursal, setSucursal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if (sucursal) {
      fetch(`http://localhost:3000/productos/${sucursal}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }
  }, [sucursal]);

  const handleSelectChange = (e) => {
    setSucursal(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.idprod === item.idprod);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.idprod === item.idprod
            ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, cantidad: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };
  const incrementQuantity = (index) => {
    setCartItems(cartItems.map((item, i) =>
      i === index ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const decrementQuantity = (index) => {
    setCartItems(cartItems.map((item, i) =>
      i === index && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
    ));
  };
  console.log(cartItems);
  return (
    <div>
      <Header openModal={openModal} />

      <SeleccionarSede
        sucursal={sucursal}
        handleSelectChange={handleSelectChange}
      />
      <div className="relative flex max-w-screen min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="mx-auto max-w-screen-xl px-4 w-full">
          <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
              >
                <div className="h-auto overflow-hidden">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={`data:image/jpeg;base64,${item.Foto}`}
                      alt={item.descripcion}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="bg-white py-4 px-3">
                  <h3 className="text-xs mb-2 font-medium">
                    {item.descripcion}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">
                      {item.stock} en stock
                    </p>
                    <div className="relative z-40 flex items-center gap-2">
                      <button onClick={() => addToCart(item)}>
                        <img src={adicionar} alt="" width={16}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CarritoModal
        closeModal={closeModal}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        /> // Renderiza el modal si isModalOpen es true
      )}
    </div>
  );
}

export default CartillaProductosPage;
