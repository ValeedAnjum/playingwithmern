const mongoose = require('mongoose');
const Notification = require('./Notification');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

})

UserSchema.post('save', async function(doc){
    var newNotifictaion = new Notification({
        user:doc._id,
        message:`welcome ${doc.name} to my application`
    })
    await newNotifictaion.save();
})

module.exports = User = mongoose.model('pwmt_workwise_user',UserSchema);