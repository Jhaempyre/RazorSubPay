import {instance} from "../server.js"
export const buySubscription = async(req,res)=>{
    console.log("mae chali subscription kharidnee")


  const subscription = await instance.subscriptions.create({
        plan_id: process.env.PLAN_ID,
        customer_notify: 1,
        quantity: 1,
        total_count: 12,
    })

    res.status(201)
    .json({
        message:"Subscription created successfully",
        subscription
    })
}

export const paymentVerification = async(req,res)=>{
    console.log("payment verify karunga mae ")
}