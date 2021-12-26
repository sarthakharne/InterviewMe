import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Applicant_datacard from "./components/ApplicantAccept";
export default function Accept() {
  const st = window.location.href;
  const id = st.slice(38, st.length);
  const appnum = "Applicant " + id;
  // console.log(id);
  const url = "http://localhost:4000/Meetings/Accept/" + id;
  const data = parseInt(id);
  const [name, setname] = useState("");
  const [gen , setgen] = useState("");
  const [age, setage] = useState("");
  const [hisec, sethisec] = useState("");
  const [ungraddeg, setungraddeg] = useState("");
  const [ungradclg, setungradclg] = useState("");
  const [postgraddeg, setpostgraddeg] = useState("");
  const [postgradclg, setpostgradclg] = useState("");
  const [pexp1, setpexp1] = useState("");
  const [pexp2, setpexp2] = useState("");
  const [pexp3, setpexp3] = useState("");
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ uID: data }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty("higher_secondary_school")) {
          sethisec(data.higher_secondary_school);
        }
        if (data.hasOwnProperty("undergrad_degree")) {
          setungraddeg(data.undergrad_degree);
        }
        if (data.hasOwnProperty("undergrad_college")) {
          setungradclg(data.undergrad_college);
        }
        if (data.hasOwnProperty("postgrad_degree")) {
          setpostgraddeg(data.postgrad_degree);
        }
        if (data.hasOwnProperty("postgrad_college")) {
          setpostgradclg(data.postgrad_college);
        }
        if (data.hasOwnProperty("past_experience1")) {
          setpexp1(data.past_experience1);
        }
        if (data.hasOwnProperty("past_experience2")) {
          setpexp2(data.past_experience2);
        }
        if (data.hasOwnProperty("past_experience3")) {
          setpexp2(data.past_experience3);
        }
        setname(data.name);
        setgen(data.gender);
        setage(data.age);
        //console.log(data.hasOwnProperty("higher_secondary_school"))
      });
  }, []);

  // fetch(url, {
  //       method: "POST",
  //       headers: {
  //           "Content-type": "application/json",
  //         },
  //       body: JSON.stringify({uID : data}),

  //     }).then((response) => response.json())
  //       .then((data) => {console.log(data)});
  return (
    <>
    <Header/>
    <div className="applicant_datacard">
      <Applicant_datacard
          applicant_name={appnum}
          pastexperience={[pexp1,pexp2,pexp3]} 
          pgdegree={postgraddeg}
          pgcollege={postgradclg}
          ugdegree={ungraddeg} 
          ugcollege={ungradclg}
          hsschool={hisec}
          name = {name}
          gender = {gen}
          age = {age}
        />
      </div>
  </>);
}
