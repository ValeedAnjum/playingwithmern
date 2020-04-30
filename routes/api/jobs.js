const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');
const { check , validationResult } = require('express-validator');
const Job = require('../../models/Job');
//@route    GET api/jobs
//@des      test      
//@access public
router.get('/', (req, res) => res.send('jobs Route'));

//@route    POST api/jobs
//@des      posting jobs      
//@access   Private

router.post('/',[
    auth,
    [
        check('title','title is required').not().isEmpty(),
        check('pricefrom','pricefrom is required').not().isEmpty(),
        check('priceto','priceto is required').not().isEmpty(),
        check('description','description is required').not().isEmpty(),

    ]
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res
        .status(400)
        .json({
            errors: errors.array()
        });
    }
    const {title,pricefrom,priceto,description,skills} = req.body;
    const job = Job({
        title,
        pricefrom,
        priceto,
        description,
        skills
    })
    try {
        const jobRes = await job.save();
        res.json(jobRes);
    } catch (err) {
        res.status(500).send('Server Error');
    }    
})
module.exports = router;