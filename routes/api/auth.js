const express = require("express");
const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../../models/User');

//@route    GET api/items 
//@des      Test Route 
//@access   Public
router.get('/', (req, res) => res.send('Auth Route'));

//@route    POST api/register 
//@des      registration of user and getting back token
//@access   Public
router.post('/register', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'password is required').isLength({min: 6})
], async(req, res) => {
    //checking for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({
                errors: errors.array()
            });
    }
    //getting data from request body
    const {name, email, password} = req.body;

    //getting user dumy image url
    const avatar = config.get("userImage");
    try {
      //searching if user is already registered with email
      let user = await User.findOne({email});
      if(user){
        return res.status(400).json({errors:[{msg:'User already exists'}]});
      }
      user = new User({
        name,
        email,
        password,
        avatar
      });
      //encryption of password through bcryptjs package
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password,salt);
      //saving user credentials in the database
      await user.save();

      const payload = {
        user:{
          id:user.id
        }
      }
      //configuring and get json web token
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {expiresIn:360000},
        (error, token) => {
          if (error) throw error;
          res.json({token})
        }
      )
    } catch (err) {
      res.status(500).send('Server Error');
    }
})

//@route    POST api/signin 
//@des      authenticate user and get token
//@access   Public

router.post('/signin', [
  check('email','Email is required').isEmail(),
  check('password','password is required').not().isEmpty()
] ,async (req,res) => {
  //checking for errors
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:[{'msg':'Invaild credentials'}]});
  }
  const {email,password} = req.body;
  try {
    //finding the user
    const user = await User.findOne({email});
    //if user not exists
    if(!user){
      return res.status(400).json({errors:[{msg:'Invalid credentials'}]});
    }
    //matching user enterd password with database password
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({errors:[{msg:'Invalid credentials'}]});
    }

    const payload = {
      user:{
        id:user.id
      }
    }
    //configuring and get json web token
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {expiresIn:36000},
      (err,token) => {
        if(err) throw err;
        res.json({token});
      }
    )
  } catch (err) {
    res.status(500).send('Server Error');
  }
})
module.exports = router;