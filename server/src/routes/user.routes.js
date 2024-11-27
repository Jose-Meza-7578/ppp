import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controllers.js";

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

export default router;
