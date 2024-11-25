const express = require("express");
const mssql = require("mssql");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
app.use(express.json());

const dbSettings = {
  user: "sa",
  password: "12345678",
  server: "localhost",
  database: "tienda",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

app.post("/login", async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .query("SELECT * FROM Users WHERE username=? AND contra=?", [
      req.body.username,
      req.body.password,
    ]);
  pool.query(result, [req.body.username, req.body.contra], (err, result) => {
    if (err) return res.json("login incorrecto");
    if(result.recordset.length === 0) {
      return res.json("login incorrecto")
    }else{
      return res.json(result.recordset);
    }

  });
  console.log("login correcto");
  return res.json(result.recordset);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
