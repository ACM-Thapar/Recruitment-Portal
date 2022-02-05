const express= require('express')

const app=express();


app.use(express.json());

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("API is running")
})

app.listen(PORT,()=>{console.log('Server started on port '+PORT)})