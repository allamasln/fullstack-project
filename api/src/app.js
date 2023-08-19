const express = require("express");
const app = express();
const port = 4040;

app.get("/ping", (req, res) => {
  res.json({ status: "success" });
});

app.listen(port, () => {
  console.log(`${process.env.NODE_ENV}: Example app listening on port ${port}`);
});
