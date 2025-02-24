const express=require("express");
const app=express();
app.use(express.json());

let data=[];

app.get("/",(req,res)=>{
    res.send("Welcome to the Login API");
});

app.post("/login",(req,res)=>{
    let e=0;
    let p=0;
    if(req.params.email){
        e=1
    }

    if(req.params.password){
        p=1;
    }

    if(p==1 && e==1){
        data.push(req.body);
        res.json({message:"Email and password added succesfully!"});
    }
    else{
        res.json({message:"Email or Password is not entered"});
    }
   
});

app.get("/login/:password",(req,res)=>{
    const check=data.find(b => b.check_password==req.params.password);
    if(check){
        res.json({message:"Email and password are valid"})
    if(!check){
        res.json({message:"Email with this password is not valid"})
    }
}
   
})

app.listen(3000,()=>console.log("Login implemention server is running on port 3000"))