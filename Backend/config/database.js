const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL , {
        useUnifiedTopology : true,
        useNewURLParser : true
    })
    .then( ()=> {console.log("DB connected")})
    .catch( (e)=> {console.log("Error connecting DB")
        console.error(e.message);
    })
}