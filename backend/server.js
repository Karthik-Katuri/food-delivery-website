import express, { request, response } from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config

const app = express()

const port = 4000

//middleware

app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


//mongodb+srv://kkaturi2003:abgk1234@cluster0.mhqwgqy.mongodb.net/?appName=Cluster0