const express = require("express");
const router = express.Router();
const {check, validationResult} = require('express-validator');
const Item = require('../../models/Item');

//@route    GET api/items 
//@des      Test Route 
//@access   Public
router.get('/', (req, res) => res.send('Item Route'));

//@route    GET API/users 
//@des      Test Route 
//@access   Public
router.post('/item', async (req,res) => {
  const {brand,category,date,name,price,proid,proimg} = req.body;
  try {
    const item = new Item({brand,category,date,name,price,proid,proimg});
    const sitem = await item.save();
    res.json(sitem);
  } catch (err) {
    res.status(400).send(err.message);
  }
})

router.put('/details',async (req,res) => {
  const {availability,condition} = req.body;
  const newDetails = {
    availability,
    condition
  }
  try {
    const item = await Item.findOne({_id:'5ea6d9059dbc380e508d5133'});
    item.details.unshift(newDetails);
    const sitem = await item.save();
    res.json(sitem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

router.delete('/details/:id',async (req,res) => {
    res.send(req.params.id);  
})

router.get('/search',async (req,res) => {
  try {
    //getting data in assend and des order 1 and -1
    // const items = await Item.find({}).sort({date:1});
    //How to get next document
    const items = await Item.find({'_id':{'$gt':'5ea71f6e8454ae2f14378a9b'}}).sort({date:1}).limit(1);

    res.json(items);
  } catch (err) {
    res.status(500).send('Server error');
  }
})
module.exports = router;