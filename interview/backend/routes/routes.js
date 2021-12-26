const express = require('express')
const mongoose = require('mongoose')
// interviewee schema
const userSchema = require('../models/interviewee')
// interviewer schema
const interviewerSchema = require('../models/interviewer')

// connecting to mongoose
mongoose.connect('mongodb://localhost/userDbs')

// router for interviewer
const router = express.Router();

// actual code starts from here



// code ends here
router.get('/Meetings')

module.exports = router;