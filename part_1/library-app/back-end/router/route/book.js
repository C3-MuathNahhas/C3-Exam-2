const express=require("express");

const bookRouter=express.Router();

const {newbook}=require("../controller/book")


bookRouter.post("/add",newbook)

module.exports=bookRouter;