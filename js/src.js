const express=require("express");
const app=express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.post('/api/personal-finance/operations', async (req, res)=>{
        const operation=await req.body;
        operations.push(operation);     
        res.json(operations);
});
app.get('/api/personal-finance/is-my-goal-achieved/:amount', (req,res)=>{
        amount=req.params
        amount=parseInt(amount);
        let result="no cumple";
        res.json(result);
});
module.exports=app;


