const mongoose= require("mongoose");

const bookModal=new mongoose.Schema({

    title :{type:String},
     author:{type:String},
      pages:{type:String},
       publisher:{type:String},
        published_at:{type:String},
})