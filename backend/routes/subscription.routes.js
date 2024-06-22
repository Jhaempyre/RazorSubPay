import express from "express"
import { buySubscription } from "../controllers/subscription.controllers.js";

const router = express.Router();

//Buy Subscriptions

router.route("/buySubscription").post(buySubscription)

export default router 