import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"

import dalleRoutes from "./routes/dalle.routes.js"

dotenv.config() //set up env var

const app = express()
app.use(cors())//middleware
app.use(express.json({limit:"50mb"})) //weight of the payload

app.use('/api/v1/dalle' , dalleRoutes)

//demo route
app.get('/',(req,res)=>{
    res.status(200).json({ message: "Hello from DALL.E"})
})

app.listen(8080, ()=> console.log('Server has started in port 8080'))