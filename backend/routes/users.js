import express from "express";
const router = express.Router();

import query from "../db/index.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const data = await query(`SELECT * FROM users;`);

  res.json({ message: "here are all the users", payload: data.rows });
});

export default router;
