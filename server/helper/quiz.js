const express = require("express");

const questionModel = require('../Models/Question')
const answerModel = require('../Models/Answer')
//generating code for quizLink
function quizLink(){

    let result="";
    let randomChar = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz0123456789"
    let len = randomChar.length;

    for(let i=0;i<3;i++){

        for(let j=0;j<4;j++){
            result+=randomChar[Math.floor(Math.random() * (len))]
        }
        result += " "
    }
    // res.cookie("inviteLink",result,{httpOnly:true})
    res.json()
}

//getting  quiz
async function getQuiz(req,res){

    let userCode = req.params.id;
    //finding the code in the db
    let quiz = await questionModel.findOne({quizId:userCode})//replace question model with the model of the quiz

    if(!quiz){
        res.json("Invalid Code")
    }
    else{
        res.json(quiz)
    }
}


module.exports = {quizLink,getQuiz}

