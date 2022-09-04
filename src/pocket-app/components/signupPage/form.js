import React, { useState } from "react";
import { Link } from "react-router-dom"
export default function SingInForm() {
   const [userRegistration, setUserRegistration] = useState({
      phonenumber: "",
      email: "",
      password: "",
   })
   function handleInput(e) {
      setUserRegistration({
         [e.target.name]: e.target.value
      })
      console.log(userRegistration.phonenumber);
      console.log(userRegistration.email);
      console.log(userRegistration.password);
   }

   return (
      <>
         <form className="modal-content animate" method="post">

            <div className="container">
               <label >Phone Number</label><br />
               <input type="text" name="phonenumber" onChange={handleInput} /><br />
               <div className="linebreak">
                  <hr className="lefthr_line" />
                  or
                  <hr className="righthr_line" />
               </div>
               <label >Email</label><br />
               <input type="text" name="email" onChange={handleInput} /><br />

               <label >Password</label><br />
               <input type="password" name="password" onChange={handleInput} />

               <button type="submit">Sign in</button>
               <label>
                  <input type="checkbox"></input>
               </label>
               <span className="psw">Forgot your password?</span>
               <hr />

               <span className="otplogin">Forgotten password?.</span>
               <span>
                  <button >
                     <Link data={userRegistration} to='/loginviaOtp' 
                     state={{ data: userRegistration }}>Login Via OTP</Link>
                  </button>
               </span>


            </div>


         </form>
      </>
   )
}