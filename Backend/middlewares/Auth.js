const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.auth = (req,res,next) => {
    try{ 
        const token = req.body.token;
        if(!token) {
            return res.status(401).json({
                success: false,
                message: 'Token Not Found'
            });
        }
        try{ 
            const validate = jwt.verify(token,process.env.JWT_SECRET);
            console.log("success validating",validate);
            req.user = validate; //storing
        }catch(e) { 
            return res.status(401).json({ 
                success:false,
                message:'Invalid Token'
            });
        }
        next();
    }catch(e){ 
        return res.status(401).json({ 
            success: false,
            message: 'something went wrong!'
        });
    }
}