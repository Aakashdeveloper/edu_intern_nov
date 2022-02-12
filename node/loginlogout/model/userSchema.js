const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    role:String
})

mongoose.model('InternUser',userSchema);
module.exports = mongoose.model('InternUser')