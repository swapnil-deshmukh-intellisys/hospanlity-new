const router=require("express").Router();

const db=require("../db");



// GET HOTELS

router.get("/",(req,res)=>{


db.query(

"SELECT * FROM hotels",

(err,result)=>{

res.json(result);

}

);


});




// ADD HOTEL ADMIN

router.post("/",(req,res)=>{


const {

name,

location,

price,

image,

category

}=req.body;



db.query(

"INSERT INTO hotels(name,location,price,image,category) VALUES(?,?,?,?,?)",

[
name,
location,
price,
image,
category
],


(err,result)=>{


res.json({

message:"Hotel Added"

});


}

);


});



module.exports=router;