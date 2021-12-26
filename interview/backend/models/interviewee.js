const mongoose = require('mongoose');

// schema for userDbs
let intervieweeSchema = new mongoose.Schema({
    // name gender age
    name: {type: String, required: true, unique: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    
    // school
    higher_secondary_school: {type: String, required: true},
    
    // undergrad
    undergrad_degree: {type: String},
    undergrad_college: {type: String},
    
    // postgrad
    postgrad_degree: {type: String},
    postgrad_college: {type: String},

    // past experience
    past_experience1: {type: String},
    past_experience2: {type: String},
    past_experience3: {type: String},

    // userId
    uID: {type: Number, required: true}
},
{
    collection : 'interviewee'
})

// export userSchema
module.exports = mongoose.model('Interviewee', intervieweeSchema);