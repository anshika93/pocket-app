import React from "react";
import { Link } from "react-router-dom"
import SingInForm from "./form";

export default function SignupPageHeader() {
    
    return (
        <>
            <div className="main-page">
                <div className="left-page">
                    <img className="pocketimg" src="./images/Asset 1 2.png" alt="" />
                </div>
                <div className="right-page">
                    <div className="form-div">
                        <h3>LOGIN</h3>
                        <p>Don't have an account?<span> <Link to='/'>Sign Up</Link> </span></p>
                        <SingInForm/>
                    </div>
                </div>

            </div>
            
        </>
    )
}