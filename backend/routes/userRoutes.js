const router=require("express").Router();

const db=require("../db");

const bcrypt=require("bcrypt");



// REGISTER

router.post("/register",(req,res)=>{


const {name,email,password}=req.body;



bcrypt.hash(password,10,(err,hash)=>{


db.query(

"INSERT INTO users(name,email,password) VALUES(?,?,?)",

[name,email,hash],

(err,result)=>{


if(err)
return res.json(err);


res.json({
message:"Register Success"
});


}

);


});


});




// LOGIN


router.post("/login",(req,res)=>{


const {email,password}=req.body;


db.query(

"SELECT * FROM users WHERE email=?",

[email],

async(err,result)=>{


if(result.length===0)

return res.json({
message:"User not found"
});



const user=result[0];


const match=
await bcrypt.compare(
password,
user.password
);



if(match){

res.json({

message:"Login success",

user:user

});

}

else{

res.json({

message:"Wrong password"

});

}


}

);


});


module.exports=router;