import React, { useState } from "react";

function ProfilePage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para actualizar la contraseña
    console.log("Contraseña actual:", currentPassword);
    console.log("Nueva contraseña:", newPassword);
    console.log("Confirmar contraseña:", confirmPassword);
  };

  return (
    <div className="container mx-auto px-4 grid grid-cols-2">
      <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Actualizar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña Actual</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nueva Contraseña</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Confirmar Nueva Contraseña
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Actualizar Contraseña
          </button>
        </form>
      </div>
      <div>
        <h2>Lista de productos</h2>
      </div>
    </div>
  );
}

export default ProfilePage;
