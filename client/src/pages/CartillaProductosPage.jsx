import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function CartillaProductosPage() {
  const [data, setData] = useState([]);
  const [sucursal, setSucursal] = useState("");
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

  return (
    <div>
      <Header />
      <select value={sucursal} onChange={handleSelectChange}>
        <option value="">Seleccione una Sucursal</option>
        <option value="1">San Carlos</option>
        <option value="2">Academia</option>
      </select>
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
                      <a
                        className="text-orange-600 hover:text-blue-500"
                        href=""
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default CartillaProductosPage;
