import { getConnection } from "../database/connection.js";
import sql from "mssql";

export const getUsers = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM Users");
  res.json(result.recordset);
};

export const getUser = async (req, res) => {
  const pool = await getConnection();
  await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query("SELECT * FROM Users WHERE id=@id");
};

export const createUser = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("username", sql.VarChar, req.body.username)
    .input("contra", sql.VarChar, req.body.contra)
    .query(
      "INSERT INTO Users (username, contra) VALUES (@username, @contra); SELECT SCOPE_IDENTITY() AS id;"
    );
  console.log(result);
  res.json({
    id: result.recordset[0].id,
    username: req.body.username,
    contra: req.body.contra,
  });
};
