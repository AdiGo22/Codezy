//dry run
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config(); //loading the .env file
const app = express();
app.use(cors()); 
app.use(express.json());

//database connection establish
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}) . then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB Connection error"));

//User schema
const userSchema = new mongoose.Schema({ 
    name : {
        type: String,
        required: true
    },
    email : {
        type:  String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true
    },
});
const User = mongoose.model('User',userSchema);

//Routes
app.post('/api/register', async(req,res)=> {
    const{name,email,password} = req.body;
    try{ 
        const existingUser = await User.findOne({email});
        if(existingUser) { 
            return res.status(400).send("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({name,email,password:hashedPassword});
        await newUser.save();

        res.status(201).send("User registered!!");
    }
    catch(e) {
        console.log(e);
        res.status(500).send("Server Error!!");
    }
});

app.post('/api/login', async(req,res)=> {
    const{email,password} = req.body;
    try{ 
        const user = await User.findOne({email});
        if(!user) return res.status(400).send('User dont exist, Kindly Sign in first');

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).send('User credentials dont match') ;

        const token = jwt.sign({email:user.email , id: user._id}, process.env.JWT_SECRET, {expiresIn : '2h'});
        res.json({token});
    }   catch(e){ 
        console.error(e);
        res.status(500).send('Server errror!');
    } 
});

//Listening (console)
app.listen(process.env.PORT ,()=> {
    console.log(`Server is listening at ${process.env.PORT}`)
});

