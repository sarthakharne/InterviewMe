const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
// express app
cors = require('cors')
const intervieweeModel = require("./models/interviewee.js")
const interviewer = require("./models/interviewer")
const app = express();
const makeDbs = require('./baseDb')
app.use(cors());
app.set('view engine', 'ejs')
    mongoose.connect('mongodb://localhost/newUsersDbs')

    // intialise database if not empty
    intervieweeModel.countDocuments({}, function(err, c) {
        if(c === 0) {
            makeDbs()
        }
    })


const dbClass = require('./dbClass')

const obj = new dbClass()

console.log('asgsg')
app.use(express.json())

app.get('/Meetings', async (req, res) => {
    res.json({ message: 'connection success' })
})

app.post('/Meetings/Get/:id', async (req,res) => { 
    console.log(req.body)
    // find the user
    let user = await intervieweeModel.findOne({ uID: req.body.uID })

    console.log(user)
    
    // create the object to return
    let retObj = {
        higher_secondary_school: user.higher_secondary_school,
        undergrad_degree: user.undergrad_degree,
        undergrad_college: user.undergrad_college,
        postgrad_degree: user.postgrad_degree,
        postgrad_college: user.postgrad_college,
        past_experience1: user.past_experience1,
        past_experience2: user.past_experience2,
        past_experience3: user.past_experience3
    }

    console.log(retObj)
    res.json(retObj)
});

app.get('/Meetings/Accept/:id', async (req, res) => {
    res.json({ message: 'connection success' })
})

app.post('/Meetings/Accept/:id', async (req, res) => {
    console.log(req.body)

    // find the user
    let user = await intervieweeModel.findOne({ uID: req.body.uID })

    console.log(user)

    res.json(user)
    // res.json({name: "Sarthak Harne"})
})
app.listen(4000)