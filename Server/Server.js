import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from "./controller/webhook.js";

const app = express();

// connect with Database
await connectDB()

app.use(cors())

app.get('/', (req , res)=>{
    res.json({
        success:false,
        result:"api is working fine"
    })
});

app.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhooks
);

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{ console.log(`server is running on port ${PORT}`) })