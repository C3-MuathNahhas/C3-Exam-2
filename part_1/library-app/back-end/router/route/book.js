const express=require("express");

const bookRouter=express.Router();

const {newBook,allbook}=require("../controller/book")


bookRouter.post("/add",newBook);
bookRouter.get("/add",allbook);


module.exports=bookRouter;