const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const securepassword = async (password) => {
  const passwoordHash = await bcrypt.hash(password, 10);
  return passwoordHash;
};
const registerpage = async (req, res) => {
  try {
    const spassword = req.body.password;
    const hashpassword = await securepassword(spassword);
    req.body.password = hashpassword;
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    if (savedUser) {
      res
        .status(200)
        .send({ message: "User registered successfully", success: true });
    } else {
      res
        .status(500)
        .send({ message: "Internal Server Error", success: false });
    }
  } catch (error) {
    console.log(error);
  }
};

const loginpage = async(req,res)=>{
  try {
    
    const{username,password}=req.body
    
    const isexist = await User.findOne({username:username})
    
    if(isexist){
      const passwordcheck =await bcrypt.compare(password,isexist.password)
      if(!passwordcheck){
        res.status(200).send({message :"incorrect password",success:false})

      }else{
        
        console.log('logined');
      }
    }

    
  } catch (error) {
    res.status(500).send({success:false, message:"something wrong"})
    
  }
}

module.exports = {
  registerpage,
  loginpage
};
