import { configureStore } from "@reduxjs/toolkit";
import productosReducer from "../features/productos/productosSlice";
import sedesReducer from "../features/sedes/sedesSlice";

export const store = configureStore({
  reducer: {
    productos: productosReducer,
    sedes: sedesReducer,
  },
});
