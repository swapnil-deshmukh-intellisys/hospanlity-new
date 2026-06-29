const router=require("express").Router();

const db=require("../db");



router.post("/",(req,res)=>{


const {

user_id,

hotel_id,

checkin,

checkout,

guests


}=req.body;



db.query(

"INSERT INTO bookings(user_id,hotel_id,checkin,checkout,guests) VALUES(?,?,?,?,?)",

[
user_id,
hotel_id,
checkin,
checkout,
guests
],


(err,result)=>{


res.json({

message:"Booking Confirmed"

});


}

);


});




router.get("/",(req,res)=>{


db.query(

"SELECT * FROM bookings",

(err,result)=>{

res.json(result);

}

);


});



module.exports=router;