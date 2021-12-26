import React from 'react'
import "./stylingcomponents/Applicant_datacard.css"




export default function Applicant_datacard(props){
    return(<>
        <div className= "applicant_card">
        <p className="applicant_name">
          {props.applicant_name}
        </p>
        <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>Name :</p>
                <p className= "applicant_element">{props.name}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>Gender :</p>
                <p className= "applicant_element">{props.gender}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>Age :</p>
                <p className= "applicant_element">{props.age}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize:"250%"}}>Past Experience 1:</p>
                <p className= "applicant_element">{props.pastexperience[0]}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>Past Experience 2:</p>
                <p className= "applicant_element">{props.pastexperience[1]}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>Past Experience 3:</p>
                <p className= "applicant_element">{props.pastexperience[2]}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>PG Degree:</p>
                <p className= "applicant_element">{props.pgdegree}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>PG College:</p>
                <p className= "applicant_element">{props.pgcollege}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>UG Degree:</p>
                <p className= "applicant_element">{props.ugdegree}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>UG College:</p>
                <p className= "applicant_element">{props.ugcollege}</p>
            </div>
            <div className="flex_applicant_element">
                <p style={{fontSize: "250%"}}>Higher secondary school:</p>
                <p className= "applicant_element">{props.hsschool}</p>
            </div>
            
            
            
            
        </div>
    
    </>)
}