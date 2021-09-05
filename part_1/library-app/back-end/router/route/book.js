const express=require("express");

const bookRouter=express.Router();

const {newBook,allbook,bookById,deletebook}=require("../controller/book")


bookRouter.post("/add",newBook);
bookRouter.get("/allbook",allbook);
bookRouter.get("/book/:id",bookById);
bookRouter.delete("/deletebook/:id",deletebook);


module.exports=bookRouter;