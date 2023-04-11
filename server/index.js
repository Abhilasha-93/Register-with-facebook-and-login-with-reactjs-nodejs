
import express from 'express';
import cors from 'cors';
import {} from 'dotenv/config'
import "./db/connectedDB.js";

const app = express();

import authRoutes from "./routes/router.js";

app.use(express.json());
app.use(cors());



 app.use("/api/v1/auth", authRoutes);
app.use("*", function(req,res){
    res.status(404).json({
        error:404,
        message:"Not Found"
    })
})

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`app is runnning on port:${port}`);
})