const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    brand:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    proid:{
        type:String,
        required:true
    },
    proimg:{
        type:String,
        required:true
    },
    details:[
        {
            availability:{
                type:String
            },
            condition:{
                type:String
            }
        }
    ]
})

module.exports = Item = mongoose.model('item',ItemSchema);