import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { auth0Webhooks } from "./controller/webhook.js";

const app = express();

// connect with Database
await connectDB()

app.use(cors())

app.get('/', (req , res)=>{
    res.send("Api working")
});

app.post("/auth0-webhook", express.json(), auth0Webhooks);

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{ console.log(`server is running on port ${PORT}`) })