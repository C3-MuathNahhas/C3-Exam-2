const express=require("express");

const bookRouter=express.Router();

const {newBook,allbook,bookById}=require("../controller/book")


bookRouter.post("/add",newBook);
bookRouter.get("/allbook",allbook);
bookRouter.get("/book/:id",bookById);


module.exports=bookRouter;