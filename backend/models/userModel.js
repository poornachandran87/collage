const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const validator = require('validator')
const crypto = require('crypto')

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please enter name']
    },
    email:{
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    phone:{
        type: Number,
        required: [true, 'Please enter phone number'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Password must be more than 8 characters'],
        select: false
    },
    avatar: {
        type: String
    },
    role :{
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,
    createdAt :{
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    next();
  }
  this.password = await bcrypt.hash(this.password,10)
})

userSchema.method.isValidPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
userSchema.method.getJwtToken = function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}


let model = mongoose.model('user',userSchema)
module.exports = model;