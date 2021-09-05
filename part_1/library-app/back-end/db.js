// db
const mongoose=require("mongoose");
const options={
    useNewUrlParese:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}

mongoose.connect("mongodb://localhost:5000/muath",options).then((result)=>{}).catch((err)=>{});

module.exports=mongoose;