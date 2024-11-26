const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const app = express();
app.use(cors());
app.use(express.json());

const dbSettings = {
  user: "sa",
  password: "12345678",
  server: "localhost",
  database: "products",
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
  const { username, contraseña } = req.body;
  if (!username || !contraseña) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("username", sql.VarChar, username)
      .input("contraseña", sql.VarChar, contraseña)
      .query("SELECT * FROM usuario WHERE username = @username AND contraseña = @contraseña");

    if (result.recordset.length > 0) {
      res.json({ message: "Login successful", user: result.recordset[0] });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});