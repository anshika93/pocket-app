import React from "react";
import { Link } from "react-router-dom"
export default function SingInForm(){
    
    return(
        <>
    <form className="modal-content animate"  method="post">
    
    <div className="container">
    <label >Phone Number</label><br />
      <input type="text" /><br />
         <div className="linebreak">
            <hr className="lefthr_line" />
            or
            <hr className="righthr_line" />
         </div>
      <label >Email</label><br />
      <input type="text" /><br />

      <label >Password</label><br />
     <input type="password" />
        
      <button type="submit">Sign in</button>
      <label>
        <input type="checkbox"></input>
      </label>
      <span className="psw">Forgot your password?</span>
      <hr />
   
   <span className="otplogin">Forgotten password?.</span>
      <span><Link to='/loginviaOtp'>Login Via OTP</Link> </span>

      
    </div>

    
  </form>
        </>
    )
}