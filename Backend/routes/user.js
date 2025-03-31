const express = require('express');
const router = express.Router();

//login and register controller
const{login,register} = require('../controllers/Auth');
router.post("/login",login);
router.post("/register",register);
//test
router.get("/test",auth,(req,res)=> {
    res.json({
        success: true,
        message: "test success", 
    });
});

module.exports = router;