import { Router } from "express";

import { getConnection } from "../database/connection.js";

const router = Router();

router.get("/sedes", async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .execute("sp_mostrar_sede");
    res.json(result.recordset);
    });


export default router;