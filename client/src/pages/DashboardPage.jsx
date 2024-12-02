import React from "react";
import { Route, Routes } from "react-router-dom";
import CartillaProductosPage from "./CartillaProductosPage";
import PedidosPage from "./PedidosPage";
import ProfilePage from "./ProfilePage";
import DashboardContent from "../components/DashboardContent";
import ProcesarPedido from "../ui/ProcesarPedido";

function DashboardPage() {
  return (
    <DashboardContent>
      <Routes>
        <Route path="/productos" element={<CartillaProductosPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/auth" element={<ProfilePage />} />
        <Route path="/procesar" element={<ProcesarPedido />} />
      </Routes>
    </DashboardContent>
  );
}

export default DashboardPage;
