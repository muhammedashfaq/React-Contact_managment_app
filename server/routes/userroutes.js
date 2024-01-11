const express = require('express')

user_routes = express.Router()

const usercontroller = require('../controller/userController')

user_routes.post("/register",usercontroller.registerpage)
user_routes.post("/login",usercontroller.loginpage)


user_routes.get("/getproduct",async(req,res)=>{
    try {
        let name ={
            name:"ashfaw",
            place:"name",
            age:"2222"
        }

        res.status(200).send({message:"here names", data:name})
    } catch (error) {
        res.status(500).send({message:"catch worked"})
        
    }
})

module.exports=user_routes