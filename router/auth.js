const express = require ('express');
const router=express.Router();
require('../db/conn');
//const User = require('../model/userSchema');
const {User, Info}= require('../model/userSchema');


router.post("/signin", async(req,res)=>
{
   console.log(req.body);
const {fname,lname,loc,email,pass,num} = req.body
    try{
        const user = new User({fname,lname,loc,email,pass,num})
        await user.save();
        console.log("Signed in!")
        //alert("Signed in successfully!")

        //res.json({success:true});

    }catch(err){console.log(err)
        res.json({status:422,message:"false"});
    }
})

router.post("/contactus", async(req,res)=>
{
   console.log(req.body);
const {name,email,num,message} = req.body
    try{
        const info = new Info({name,email,num,message})
        await info.save();
        //res.json({success:true});

    }catch(err){console.log(err)
        res.json({status:422,message:"false"});
    }
})


module.exports = router;