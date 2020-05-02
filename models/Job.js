const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'pwmt_workwise_users'
    },
    dum:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    skills:{
        type:[String]
    },
    pricefrom:{
        type:Number,
        required:true
    },
    priceto:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    likes:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:'pwmt_workwise_users'
            }
        }
    ]
})

module.exports = Job = mongoose.model('pwmt_workwise_job',JobSchema);