import React from "react";

import "./pagestyling/Applicantinfo.css"
import Header from './components/Header';
import Applicant_datacard from "./components/Applicant_datacard";

//variables
let applicants_list

applicants_list = ["Applicant1","Applicant2","Applicant3","Applicant4","Applicant5","Applicant6","Applicant7","Applicant8","Applicant9"]



export default function Applicantinfo() {
  
  return (
    <>
      <Header/>
      <div className="main_flex">
        
        <div className="applicant_list_flex">
        
        {
          applicants_list.map((i) => (
            <p key={i} className="applicant_title">{i}</p>
          ))
        }
        </div>
        <div class="verticalLine">
        </div>
        <Applicant_datacard 
        applicant_name={"Applicant1"}
        pastexperience={["Tech Lead, Goggle","Senior Dev, Abode","Senior Dev, Macrosoft"]} 
        ugdegree={"Btech"} 
        ugcollege={"Delhi University, Delhi"}
        pgdegree={"Mtech"}
        pgcollege={"Indian Institute of Technology, Delhi"}
        hsschool={"DPS, Delhi"}/>
        <div className="meeting_sheduler">
          Shedule meeting
        </div>
      </div>
      
      
      
    </>
      
  );
}