import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

router.get("/usuarios", getUsers);

router.get("/usuarios/:id", (req, res) => {
  res.send("obtener usuario");
});

router.post("/usuarios", createUser);

router.put("/usuarios/:id", (req, res) => {
  res.send("actualizar usuario");
});

router.delete("/usuarios/:id", (req, res) => {
  res.send("eliminar usuario");
});

router.get("/prueba", (req, res) => {
  res.send("prueba");
});

export default router;
