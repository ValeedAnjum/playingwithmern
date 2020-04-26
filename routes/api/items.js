const express = require("express");
const router = express.Router();
const Item = require('../../models/Item');
//@route    GET API/users
//@des      Test Route 
//@access   Public    
router.get('/', (req,res) => res.send('Item Route'));

router.post('/saveitem',async (req,res) => {
    item = new Item({
        name:'Product Name',
        price:'540'
    });

    try {
        await item.save();
        res.send('Item Stored in the database');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

})
module.exports = router;