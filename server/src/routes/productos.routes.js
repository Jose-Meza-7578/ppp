import { Router } from "express";
import { getConnection } from "../database/connection.js";

const router = Router();

router.get("/productos/:idsede", async (req, res) => {
  const { idsede } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("idsede", idsede)
    .execute("sp_mostrarproductoporsede");
    const productos = result.recordset.map(producto => {
      if (producto.Foto) {
        producto.Foto = Buffer.from(producto.Foto).toString('base64');
      }
      return producto;
    });

    res.json(productos);
});

export default router;
