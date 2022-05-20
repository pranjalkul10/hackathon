import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faEyeSlash } from "@fortawesome/free-solid-svg-icons";



const Form=()=>{

  const{useState}=React;
  
  const[inputs,setinputs]=useState({
  email:"",
  password:""
  });
  
  const[warnemail,setwarnemail]=useState(false);
  const[warnpass,setwarnpass]=useState(false);
  const[danger,setdanger]=useState(true);
  
  const[eye,seteye]=useState(true);
  const[pass,setpass]=useState("password");
  
  
  const inputEvent=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  if(name=="email"){
  if(value.length>0){
  setdanger(true);
  }
  }
  setinputs((lastValue)=>{
  return{
  ...lastValue,
  [name]:value
  }
  });
  };
  
  const submitForm=(e)=>{
  e.preventDefault();
  setwarnemail(false);
  setwarnpass(false);
  if(inputs.email.length<1){ setdanger(false); } if(inputs.email=="" ){ setwarnemail(true); } else if(inputs.password=="" ){ setwarnpass(true); } else{ alert("Logged in Successfully"); } }; const Eye=()=>{
      if(pass=="password"){
      setpass("text");
      seteye(false);
      }else{
      setpass("password");
      seteye(true);
      }
      }; 
  
      return(
      <>
      <div className="body">
          <div className="container">
              <div className="card">
                  <div className="form">
                      <div className="left-side">
                          <img src="https://i.pinimg.com/originals/23/a9/ca/23a9caf9229d9a4be0705d61730fabda.gif" />
                      </div>
  
                      <div className="right-side">
                          <div className="register">
                              <p>Not a member? <a href="#">Register Now</a></p>
                          </div>
  
                          <div className="hello">
                              <p>Welcome to CL Broadcasting Channel</p>                              
                          </div>
  
                          <form onSubmit={submitForm}>
  
                              <div className="input_text">
                                  <input className={` ${warnemail ? "warning" : "" }`} type="text" placeholder="Enter Email" name="email" value={inputs.email} onChange={inputEvent} />
                                  <p className={` ${danger ? "danger" : "" }`}><i className="fa fa-warning"></i>Please enter a valid email address.</p>
                              </div>
                              <div className="input_text">
                                  <input className={` ${warnpass ? "warning" : "" }`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                                  <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                              </div>                             
                              <div className="btn">
                                  <button type="submit">Sign in</button>
                              </div>  
                              <div className="recovery">
                                  <p> <a href="#">Forgot Password ?</a></p>
                              </div>
                          </form>                           
                      </div>
                  </div>
              </div>
          </div>
       </div>
      </>
   );
}
     export default Form;