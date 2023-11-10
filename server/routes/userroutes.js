const express = require('express')

user_routes = express.Router()

const usercontroller = require('../controller/userController')

user_routes.post("/register",usercontroller.registerpage)

module.exports=user_routes