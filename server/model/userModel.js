

const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isBlocked:{
        type:Boolean,
        default:false
    }

},
{
    timestamps:true
}
)


module.exports =mongoose.model('testuser',userschema)
