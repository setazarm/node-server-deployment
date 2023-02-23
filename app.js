import express from "express"
import dotenv from "dotenv"
import axios from "axios"


//load our environment variables into process.env object
dotenv.config()
console.log(process.env)
const app=express()
const PORT= process.env.PORT || 4000


app.get("/",(req,res)=>{
    res.send("<h1>Hello Render</h1>")
})
app.get("/weather",async(req,res)=>{
    //proxy server
    const response= await axios.get(` https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.SECRET_KEY}`)
    res.send(response.data)
   
})
app.listen(PORT,()=>console.log("server is running on port:",PORT))