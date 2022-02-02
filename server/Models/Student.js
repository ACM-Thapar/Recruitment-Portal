
const express = require('express')
const mongoose = require('mongoose')
const emailValidator = require('email-validator')
const bcrypt = require("bcrypt")


const studentSchema = mongoose.Schema({

    // accessType:{
    //     type:String,
    //     default:'Login'
    // },
    name:{
        type:String,
    },
  
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true, 
        minLength:8,  
    },
    confirmPassword:{
        type:String,
        minLength:8,
        required:true,
        validate:()=>{
            return this.password === this.confirmPassword
        }
    },
    isEmailVerified: { 
        type: Boolean,
        default:false
    }
})
studentSchema.pre("save",async()=>{

    this.confirmPassword = undefined;
    let salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
})

const student = mongoose.model("student",studentSchema)
module.exports = student;