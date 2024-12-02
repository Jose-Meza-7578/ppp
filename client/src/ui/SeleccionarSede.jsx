import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSedes } from "../features/sedes/sedesSlice";
function SeleccionarSede( {sucursal, handleSelectChange} ) {
  const dispatch = useDispatch();
  const sedes = useSelector((state) => state.sedes.sedes);
  const status = useSelector((state) => state.sedes.status);
  const error = useSelector((state) => state.sedes.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSedes());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <select value={sucursal} onChange={handleSelectChange}>
        <option value="">Selecciona una sede</option>
        {sedes.map((sede) => (
          <option key={sede.idsede} value={sede.idsede}>
            {sede.sedenombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SeleccionarSede;
