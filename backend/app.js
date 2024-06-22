import express from "express";
import { config } from "dotenv";
//import paymentRoute from "./routes/razorpay.routes.js";
import cors from "cors";
config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import subRoute from "./routes/subscription.routes.js"
app.use("/api", subRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.get("/ram",(req,res)=>{
    console.log("jai shree ram");
res.status(200).json({message:"Hello Ram"})
})