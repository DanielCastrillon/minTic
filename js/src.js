const express=require("express");
const app=express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.post(
    "su ruta aquí",
    (req, res)=>{
        //código
    }
);
app.get("su ruta aquí", (req,res)=>{
    //código
    amount=parseInt(amount);
});
module.exports=app;
