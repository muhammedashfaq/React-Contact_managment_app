const mongoose = require('mongoose')

require('dotenv').config()

module.exports={

    mongoDB:()=>{
        mongoose.connect(process.env.mongo_url,{}).then(()=>{
            console.log('connected mongodb')
        }).catch((err)=>{
            console.log(err);
        })
    }

}