import React from "react";
import { Link } from "react-router-dom";

export default function OTP(){
    return(
        <>
           <div className="main-page">
                <div className="left-page">
                    <img className="pocketimg" src="./images/Asset 1 2.png" alt="" />
                </div>
                <div className="right-page">
                    <div className="form-div">
                        <h3>LOGIN</h3>
                        <p>With Number</p>
                        <h2>Enter your Phone Number</h2>
                        <p>We will send you a 6 digit verification code</p>


                        <form className="modal-content animate"  method="post">
    
    <div className="container">
    <label >Phone Number</label><br />
      <input type="text" /><br />

      
        
      <button type="submit"> <Link to="/generateOtp">Generate OTP</Link> </button>
      
   
   

      <p className="emailSignUp">Want to SignUp with <span><Link to='/'>Email</Link></span>  </p>
    </div>

       <input className="termsANDpolicies" type="checkbox" /><span>accept all the terms and policies</span>
  </form>



                        
                    </div>
                </div>

            </div>

        </>
    )
}