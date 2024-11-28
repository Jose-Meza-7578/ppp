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
  res.json(result.recordset);
});

export default router;
