import React from 'react'
import "./stylingcomponents/Jobcard.css"
import { Link } from 'react-router-dom';

//variables
let job_role
let skills_list
let total_openings
let total_applicants





export default function Jobcard(props){
    return(
        <>
            <p className= "job_role">{props.job_role}</p>
        
        <div className="skills_needed">
            <p className="skill_item_h">Skills needed:</p>
            {
                props.skills_list.map((i) => (
                    <p key={i} className="skill_item">{i}</p>
                ))
            }
            
        </div>
        <div className="skills_needed">
            <p className="skill_item_h">Total Openings:</p>
            <p className="skill_item">{props.total_openings}</p>
        </div>
        <div className="skills_needed">
            <p className="skill_item_h">Total Applicants:</p>
            <p className="skill_item">{props.total_applicants}</p>
        </div>
        <Link to = "/Applicantinfo" className="applicant_info" >
                        Applicants Info
                    </Link>
        </>
        
    )
}
