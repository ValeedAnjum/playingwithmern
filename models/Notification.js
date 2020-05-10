const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'pwmt_workwise_users'
    },
    message:{
        type:String
    }
})

module.exports = Notification = mongoose.model('Notifications',NotificationSchema);