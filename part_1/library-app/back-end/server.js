const express = require("express");
const cors = require("cors");
require("./db")

const bookRouter=require("../back-end/router/route/book")
const app = express();

app.use(express.json())
app.use(cors());
app.use("/book",bookRouter)

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
