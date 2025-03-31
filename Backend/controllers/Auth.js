const bcrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.signup = async(req,res)=> {
    try{
        const{name,email,password}= req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }
        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10);
        }catch(e){
            return res.status(500).json({
                success: false,
                message:"error in hashing password"
            });
        }

        const user = await User.create({
            name,email,password:hashedPassword
        })
        return res.status(200).json({
            success:true,
            message:'user created succesfully'
        })
    }catch(e){
        console.log("Error while handling");
        return res.status(500).json({
            success: false,
            message:e.message
        })
    }
}

app.post('/auth/login',async(req,res)=> {
    const{email,password} = req.body;
    try{ 
        const user = await User.findOne({email});
        if(!user) return res.status(400).send("User not found");
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).send("User credentials dont match");

        //generate token
        const token = jwt.sign(
            {
                email: user.email,
                id: user._id     
            },process.env.JWT_SECRET,
            {expiredsIn: '2h'}
        );

        res.json({token});
    } catch(e){
        console.error(e);
        res.status(500).send("Server error");
    }
});