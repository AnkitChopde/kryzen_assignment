const express = require("express");
const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt")
const userRoutes = express.Router();


userRoutes.post("/addUser",async(req,res)=>{
    const {username,password} = req.body;
    try{
      if(req.body.username && req.body.password){
        const preCheck = await userModel.findOne({username})
        if(!preCheck) {
            const hashedPassword = await bcrypt.hash(password,5)
            const newUser = new userModel({...req.body,password:hashedPassword})
            await newUser.save();
            res.status(200).send({msg: "User has been Registered!", status: "success"})
        }else{
            res.status(400).send({msg: "User already registered!"})
        }
      }else{
        res.status(400).send({msg : "Invalid data format!"})
      }
    }
    catch (e){
      res.status(400).send({msg:e.message})
    }
});

userRoutes.post("/login",async (req,res)=>{
    const {username,password} = req.body;
    try{
        const preCheck = await userModel
    }
    catch(e){

    }
})