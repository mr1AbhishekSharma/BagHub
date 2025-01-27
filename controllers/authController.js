const userModel=require('../models/user-model')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const generateToken=require("../utils/generateToken.js");



module.exports.registerUser=function(req,res){
    try{
        let{email,password,username}=req.body;
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt, async function(err,hash){
                if(err) return res.send(err.message);
                else{
                    let user=await userModel.create({
                        email,
                        password:hash,
                        username,
                    });
                    let token=generateToken(user);
                    res.cookie("token",token);
                    res.send("user created successfully");
                };
            });
        });
        
    }catch(err){
        res.send(err.message);
    }
}