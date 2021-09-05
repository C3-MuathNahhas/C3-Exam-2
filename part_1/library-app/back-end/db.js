// db
const mongoose=require("mongoose");
const option={
    useNewUrlParese:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}

mongoose.connect("mongodb://localhost:5000/muath",option).then((result)=>{}).catch((err)=>{});

module.exports=mongoose;