const mongoose = require('mongoose')

const interviewerModel = require('./models/interviewer')
const intervieweeModel = require('./models/interviewee')

// mongoose.connect('mongodb://localhost/usersDbs')

class dbClass {
    // create an interviewee document
    createInterviewee(nme, gndr, age, hscschool, ugdeg = null, ugclg = null, 
        pgdeg = null, pgclg = null, pe1 = null, pe2 = null, pe3 = null) {
        let newInterviewee = new intervieweeModel({
            name: nme,
            gender: gndr,
            age: age,
            higher_secondary_school: hscschool,
            undergrad_degree: ugdeg,
            undergrad_college: ugclg,
            postgrad_degree: pgdeg,
            postgrad_college: pgclg,
            past_experience1: pe1,
            past_experience2: pe2,
            past_experience3: pe3
        })
        
        intervieweeModel.create(newInterviewee)
        .catch(err => {
            console.error(err)
        })
        console.log("ban gaya")
    }

    // create an interviewer document
    createInterviewer(nme, cmpy, meetings) {
        let newInterviewer = new interviewerModel({
            name: nme,
            if(cmpy) {company: cmpy},
            if(meetings) {meetings: meetings}
        })

        interviewerModel.create(newInterviewer)
        console.log("interviewer bana")
    }
}

module.exports = dbClass