const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const Job = require('../../models/Job');
//@route    GET api/jobs 
//@des      test 
//@access public
router.get('/', (req, res) => res.send('jobs Route'));

//@route    POST api/jobs 
//@des      posting jobs 
//@access   Private

router.post('/', [
    auth,
    [
        check('title', 'title is required')
            .not()
            .isEmpty(),
        check('pricefrom', 'pricefrom is required')
            .not()
            .isEmpty(),
        check('priceto', 'priceto is required')
            .not()
            .isEmpty(),
        check('description', 'description is required')
            .not()
            .isEmpty()
    ]
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({
                errors: errors.array()
            });
    }
    const {title, pricefrom, priceto, description, skills , dum} = req.body;
    const job = Job({title, pricefrom, priceto, description, skills , dum})
    job.user = req.user.id;
    try {
        const jobRes = await job.save();
        res.json(jobRes);
    } catch (err) {
        res
            .status(500)
            .send('Server Error');
    }
})

// @route    POST api/jobs/like 
// @des      like the post and getting back upto date data
// @access   Private
router.put('/like/:id', auth, async(req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (job.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res
                .status(400)
                .json({msg: 'Post already liked'});
        }
        job.likes.unshift({user: req.user.id});
        await job.save();
        res.json(job);
    } catch (err) {
        res.status(500).send('Server Error');
    }
})
// @route    POST api/jobs/unlike 
// @des      like the post and getting back upto date data
// @access   Private
router.put('/unlike/:id', auth , async (req,res) => {
    try {
        const job = await Job.findById(req.params.id);
        
        if(
            job.likes.filter(like => like.user.toString() === req.user.id).length === 0
        ){
            return res.status(400).json({msg:'The post is not liked yet'});
        }
        // Get remove index
        const removeIndex = job.likes.map(like => like.user.toString()).indexOf(req.user.id);
        job.likes.splice(removeIndex,1);
        await job.save();
        res.json(job);
    } catch (err) {
        res.status(500).send('Server Error');
    }
})

// @route    POST api/jobs/update 
// @des      updating the existing post data
// @access   Private
router.post('/update/:id', auth , async (req,res) => {
    try {
        const job = await Job.findById(req.params.id);
        if(!job){
            return res.status(400).json({msg:'Post does not exists'});
        }
        const {title, pricefrom, priceto, description, skills} = req.body;
        if(title) job.title = title;
        if(pricefrom) job.pricefrom = pricefrom;
        if(priceto) job.priceto = priceto;
        if(description) job.description = description;
        if(skills.length > 0) job.skills = skills;
        await job.save();
        res.json(job);
    } catch (err) {
        res.status(500).send('Server Error');       
    }
})

// @route    delete api/delete/:id 
// @des      delete job
// @access   Private
router.delete('/delete/:id', auth , async (req,res) => {
    try {
        const job = await Job.findById(req.params.id);
        if(!job){
            return res.status(400).json({msg:'job does not exists'});
        }
        if(job.user.toString() !== req.user.id){
            return res.status(400).json({msg:'Your not authorized'});
        }
        await job.remove();
        res.json(job);
    } catch (err) {
        res.status(500).send('Server Error');
    }
})

// @route    get api/jobs/:quntify/:id 
// @des      get jobs by quntity and job id
// @access   publics
router.get('/:qun/:id', async (req,res) => {
    try {
        const jobs = await Job.find({'_id':{'$gt':req.params.id.toString()}}).sort({'_id':1}).limit(Number(req.params.qun));
        res.json(jobs);
    } catch (err) {
        res.status(500).send('Server Error');
    }    
})
// @route    get api/jobs/:quntify/:id 
// @des      get jobs by quntity and job id
// @access   publics
router.get('/:qun', async (req,res) => {
    try {
        const jobs = await Job.find({}).sort({'_id':1}).limit(Number(req.params.qun));
        res.json(jobs);
    } catch (err) {
        res.status(500).send('Server Error');
    }
})
module.exports = router;