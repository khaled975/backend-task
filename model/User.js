const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim :true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim :true
    },
    role:{
        type:[String],
        default:['Employee']
    }
}) 


const User = mongoose.model('User',userSchema)

module.exports = User