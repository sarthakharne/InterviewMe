import { get } from "mongoose";
import React from "react";
import "./pagestyling/Meetings.css"
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react';
import Header from "./components/Header"
let meeting_list =[["meeting 1","interview 1",1],["meeting 2","interview 2",2],["meeting 3","interview 3",3],["meeting 4","interview 4",4],["meeting 5","interview 5",5],["meeting 6","interview 6",6]]
export default function Meetings() {
  const [nameme , setnameme] = useState("")
  const getmeet = () => {
    // console.log("Works");
    fetch("http://localhost:4000/Meetings")
      .then((response) => response.json())
      .then((data) => {
        //nameme= data.
        //console.log("y u no work");
        setnameme(data.name);
        // <Link to = "/Meetings"> <Meetings name = {nameme} /> </Link>
      });
  };
  useEffect (()=>
  {
    getmeet();
  })
  getmeet();
  //console.log(nameme);
     async function getvid ()
    {
      fetch('http://localhost:5001/')
      .then(response => response.json())
      .then(data => console.log(data));
    }
    const theUrl = 'http://localhost:5001/'
    function httpGetAsync(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          {console.log("ok")
            window.location.href = "https://localhost:5001/1";
          }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
const url = "http://localhost:5001/"
function url_redirect(url){
  var X = setTimeout(function(){
      window.location.replace(url);
      return true;
  },300);

  if( window.location = url ){
      clearTimeout(X);
      return true;
  } else {
      if( window.location.href = url ){
          clearTimeout(X);
          return true;
      }else{
          clearTimeout(X);
          window.location.replace(url);
          return true;
      }
  }
  return false;
};
    // console.log(nameme)
  const sty = {
    boxsizing: "border-box",
    padding: "2vh",
    margin: "20px 20px 20px 20px",
    borderradius: "10px",
  };
  const ty = {
      display : "flex",
      justifyContent : "Space-between",
      boxsizing : "border-box",
      marginLeft : "300px",
      marginRight :"300px"
  }
//   console.log(nameme)
  return (
    <>
    {/* <Header/> */}
      {/* <div style={sty} className="meeting_card_flex">
        
          {
            meeting_list.map((i) =>{
            <div className="card">
            <div className="card-header">Meeting 1: </div>
              <div className="card-body">
                <h5 className="card-title">{nameme}</h5>
                <div style= {ty}>
                    <Link to = "/Meetings/Get1"><button className="btn btn-primary">Get data</button></Link>
                    <button className="btn btn-primary" onClick = {()=>url_redirect(url)}>start call</button>
                    </div>
              </div>
            </div>
          })
              
        }
      </div> */}
       <Header/>
      <div className="meeting_card_flex" >
      {
        meeting_list.map((i) => (
            
            <div className="card_" >
              <div key={i[2]} className="card-header_">{i[0]}</div>
              
                
                <div className="flex_meeting_">
                    <p className="flex_meeting_left">Interviewee:</p>
                    <p className="flex_meeting_right">{i[1]}</p>
                </div>
                <hr/>
                <div className="flex_meeting_2">
                    <Link to = {() =>{
                      const getstr = "/Meetings/Get/" + i[2].toString();
                      return getstr;
                    }}  style={{textDecoration:"none"}} ><p className="buttons_">Get data</p></Link>
                    
                    <p className="buttons_" onClick = {()=>{
                      const urln = url + i[2].toString()
                      url_redirect(urln)}}>Start call</p>

                    <Link to = {() =>{
                      const getstr = "/Meetings/Accept/" + i[2].toString();
                      return getstr;
                    }} style={{textDecoration:"none"}} ><p className="buttons_">Accept Applicant</p></Link>
                </div>
              
              
            </div>
        ))
      }
      </div>
    
      {/* <div style={sty}>
        <div className="card">
          <div className="card-header">Meeting 2 :</div>
          <div className="card-body">
            <h5 className="card-title">Interviewee 2</h5>
                <div style= {ty}>
                <Link to = "/Meetings/Get2"><button className="btn btn-primary">Get data</button></Link>
                <Link to = "/Meetings/callme2"><button className="btn btn-primary">start call</button></Link>
                </div>
          </div>
        </div>

      </div>
      <div style={sty}>
        <div className="card">
          <div className="card-header">Meeting 3 :</div>
          <div className="card-body">
            <h5 className="card-title">Interviewee 3</h5>
                <div style= {ty}>
                <Link to = "/Meetings/Get3"><button className="btn btn-primary">Get data</button></Link>
                <Link to = "/Meetings/callme3"><button className="btn btn-primary">start call</button></Link>
                </div>
          </div>
        </div>

      </div>
      <div style={sty}>
        <div className="card">
          <div className="card-header">Meeting 4 :</div>
          <div className="card-body">
            <h5 className="card-title">Interviewee 4</h5>
                <div style= {ty}>
                <Link to = "/Meetings/Get4"><button className="btn btn-primary">Get data</button></Link>
                <Link to = "/Meetings/callme4"><button className="btn btn-primary">start call</button></Link>
                </div>
          </div>
        </div>

      </div> */}
    </>
  );
}
// const [hisec, sethisec] = useState("");
//   const [ungraddeg, setungraddeg] = useState("");
//   const [ungradclg, setungradclg] = useState("");
//   const [postgraddeg, setpostgraddeg] = useState("");
//   const [postgradclg, setpostgradclg] = useState("");
//   const [pexp1, setpexp1] = useState("");
//   const [pexp2, setpexp2] = useState("");
//   const [pexp3, setpexp3] = useState("");
// if(data.hasOwnProperty("undergrad_degree"))
      // {setungraddeg(data.undergrad_degree);}
      // if(data.hasOwnProperty("undergrad_college"))
      // {setungradclg(data.undergrad_college);}
      // if(data.hasOwnProperty("postgrad_degree"))
      // {setpostgraddeg(data.postgrad_degree);}
      // if(data.hasOwnProperty("postgrad_college"))
      // {setpostgradclg(data.postgrad_colleg);}
      // if(data.hasOwnProperty("past_experience1"))
      // {setpexp1(data.past_experience1);}
      // if(data.hasOwnProperty("past_experience2"))
      // {setpexp2(data.past_experience2);}
      // if(data.hasOwnProperty("past_experience3"))
      // {setpexp3(data.past_experience3);}
