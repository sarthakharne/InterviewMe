import React from "react";
import {Link} from "react-router-dom"
import Meetings from "./Meetings";
import Header from './components/Header';
import Jobcard from "./components/Jobcard";
import "./pagestyling/Landing.css"
export default function Landing() {

  
  
  return (
    <>
      <div className="main_landing">
      <Header/>
      <div className="heading_">
          Listed Jobs
      </div>
      <div className = "jobcard" >
        <Jobcard  job_role = {"Software Engineer"} skills_list = {["Java","C++","C","#C","Debugging","Software Testing"]} total_openings = {10} total_applicants = {52} />
        
      </div>  
      <div className = "jobcard">
        <Jobcard  job_role = {"Web Developer"} skills_list = {["HTML","CSS","JavaScript","Express","NodeJS","React"]} total_openings = {15} total_applicants = {32} />
      </div>
      <div className="footing_">
          Add new Job Vacancy
      </div>
      </div>
      
    </>
    
  );
}
