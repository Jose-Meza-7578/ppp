import React from "react";

function PedidosPage() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Formulario de Requrimientos
        </h2>
        <h3 className="text-lg mb-4">Ingrese los detalles del requerimiento</h3>
      </div>
      <form action="">
        <div>
          <div>
            <label className="block text-gray-700">Descripcion</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Area</label>
            <select name="" id="">
              <option value="">Seleccione un Area</option>
              <option value="1">Area 1</option>
              <option value="2">Area 2</option>
              <option value="3">Area 3</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">
              Fecha limite de entrega:
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="">
              Seleccione la Prioridad
            </label>
            <select
              name="prioridad"
              id="prioridad"
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PedidosPage;
