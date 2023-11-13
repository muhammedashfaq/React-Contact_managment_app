const express = require('express')

user_routes = express.Router()

const usercontroller = require('../controller/userController')

user_routes.post("/register",usercontroller.registerpage)
user_routes.post("/login",usercontroller.loginpage)


module.exports=user_routes