import restar from "../assets/disminuir.svg";
import agregar from "../assets/agregar.svg";
import tachito from "../assets/tachito.svg";

function ProcesarPedido() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Finalizar Pedido</h1>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="text-left">Producto</th>
            <th className="text-center">Cantidad</th>
            <th className="text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">celular samsung</td>
            <td className="py-2 text-center">
              <div className="flex items-center justify-center">
                <button className="bg-gray-300 text-black px-2 py-1 rounded">
                  <img src={restar} alt="" width={16} />
                </button>
                <span className="mx-2">4</span>
                <button className="bg-gray-300 text-black px-2 py-1 rounded">
                  <img src={agregar} alt="" width={16} />
                </button>
              </div>
            </td>
            <td className="py-2 text-right">
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                <img src={tachito} alt="Eliminar" width={16} />
              </button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">celular samsung</td>
            <td className="py-2 text-center">
              <div className="flex items-center justify-center">
                <button className="bg-gray-300 text-black px-2 py-1 rounded">
                  <img src={restar} alt="" width={16} />
                </button>
                <span className="mx-2">4</span>
                <button className="bg-gray-300 text-black px-2 py-1 rounded">
                  <img src={agregar} alt="" width={16} />
                </button>
              </div>
            </td>
            <td className="py-2 text-right">
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                <img src={tachito} alt="Eliminar" width={16} />
              </button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">celular samsung</td>
            <td className="py-2 text-center">
              <div className="flex items-center justify-center">
                <button className="bg-gray-300 text-black px-2 py-1 rounded">
                  <img src={restar} alt="" width={16} />
                </button>
                <span className="mx-2">4</span>
                <button className="bg-gray-300 text-black px-2 py-1 rounded">
                  <img src={agregar} alt="" width={16} />
                </button>
              </div>
            </td>
            <td className="py-2 text-right">
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                <img src={tachito} alt="Eliminar" width={16} />
              </button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2">celular samsung</td>
            <td className="py-2 text-center">
              <div className="flex items-center justify-center">
                <button className="bg-gray-300 text-black px-2 py-1 rounded">
                  <img src={restar} alt="" width={16} />
                </button>
                <span className="mx-2">4</span>
                <button className="bg-gray-300 text-black px-2 py-1 rounded">
                  <img src={agregar} alt="" width={16} />
                </button>
              </div>
            </td>
            <td className="py-2 text-right">
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                <img src={tachito} alt="Eliminar" width={16} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Seleccione un área</label>
        <select className="w-full border border-gray-300 rounded-md p-2">
          <option value="">Seleccione un área</option>
          <option value="1">Área 1</option>
          <option value="2">Área 2</option>
          <option value="3">Área 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          Ingrese información adicional
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2"
          rows="4"
        ></textarea>
      </div>
      <button className="w-1/5 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
export default ProcesarPedido;
