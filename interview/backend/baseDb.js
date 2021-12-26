const mongoose = require('mongoose')

const interviewerModel = require('./models/interviewer')
const intervieweeModel = require('./models/interviewee')

// mongoose.connect('mongodb://localhost/newUsersDbs')

function makeDbs() {
    intervieweeModel.insertMany([
        {
        name: 'Sarthak Harne',
        gender: 'Male',
        age: 28,
        higher_secondary_school: 'Essar International School',
        undergrad_degree: 'BTech',
        undergrad_college: 'International Institute of Information Technology Bangalore',
        postgrad_degree: 'MTech',
        postgrad_college: 'International Institute of Information Technology Bangalore',
        __v: 0,
        uID: 1,
        past_experience1: 'Senior Software Engineer at Flexnit',
        past_experience2: 'Senior Software Engineer at Ippul'
        },
        {
        name: 'Shreyansh Rai',
        gender: 'Male',
        age: 28,
        higher_secondary_school: 'Smt. Sulochanadevi Singhania School',
        undergrad_degree: 'BTech',
        undergrad_college: 'International Institute of Information Technology Bangalore',
        postgrad_degree: 'MTech',
        postgrad_college: 'International Institute of Information Technology Bangalore',
        __v: 0,
        uID: 2,
        past_experience1: 'Junior Software Engineer at Macrosoft',
        past_experience2: 'Senior Software Engineer at Ippul',
        past_experience3: 'Product Manager at Lolcomm'
        },
        {
        name: 'Vatsal Dhama',
        gender: 'Male',
        age: 28,
        higher_secondary_school: 'Rawat Public School',
        undergrad_degree: 'BTech',
        undergrad_college: 'International Institute of Information Technology Bangalore',
        postgrad_degree: 'MTech',
        postgrad_college: 'International Institute of Information Technology Bangalore',
        __v: 0,
        uID: 3,
        past_experience1: 'Senior Software Engineer at Flexnit',
        past_experience2: 'Senior Software Engineer at Ippul'
        },
        {
        name: 'Kaushik Mishra',
        gender: 'Male',
        age: 28,
        higher_secondary_school: 'Delhi Public School',
        undergrad_degree: 'BTech',
        undergrad_college: 'International Institute of Information Technology Bangalore',
        postgrad_degree: 'MTech',
        postgrad_college: 'International Institute of Information Technology Bangalore',
        __v: 0,
        uID: 4,
        past_experience1: 'Junior Software Engineer at Macrosoft',
        past_experience2: 'Project lead at Silverman Sachs'
        },
        {
        name: 'Khushi Vyas',
        gender: 'Female',
        age: 34,
        higher_secondary_school: 'Fountainhead School',
        undergrad_degree: 'BCom',
        undergrad_college: 'Narsee Monjee Institute of Management Studies',
        postgrad_degree: 'MCom',
        postgrad_college: 'Narsee Monjee Institute of Management Studies',
        __v: 0,
        uID: 5,
        past_experience1: 'Senior Software Engineer at Flexnit',
        past_experience2: 'Project lead at Silverman Sachs',
        past_experience3: 'Product Manager at Lolcomm'
        },
        {
        name: 'Saket Gurjar',
        gender: 'Homosexual',
        age: 28,
        higher_secondary_school: 'VJ Public School Kolhapur',
        undergrad_degree: 'BTech',
        undergrad_college: 'International Institute of Information Technology Bangalore',
        postgrad_degree: 'MTech',
        postgrad_college: 'International Institute of Information Technology Bangalore',
        __v: 0,
        uID: 6,
        past_experience1: 'Junior Software Engineer at Macrosoft',
        past_experience2: 'Project lead at Silverman Sachs'
        },
        {
        name: 'Pratima Prasad',
        gender: 'Homosexual',
        age: 29,
        higher_secondary_school: 'DK Public School Mumbai',
        undergrad_degree: 'BTech',
        undergrad_college: 'National Institute of Technology Rourkela',
        postgrad_degree: null,
        postgrad_college: null,
        __v: 0,
        uID: 7,
        past_experience1: 'Senior Software Engineer at Flexnit',
        past_experience2: 'Project lead at Silverman Sachs'
        }
    ])
    .catch(err => {
        console.error(err)
    })
    
    interviewerModel.insertMany([
        {   
        name: 'Chacha Choudhary',
        company: 'Orange',
        meetings: [
            1, 2, 3, 4,
            5, 6, 7
        ]
        }
    ]
    )
    .catch(err => {
        console.error(err)
    })
}

module.exports = makeDbs;