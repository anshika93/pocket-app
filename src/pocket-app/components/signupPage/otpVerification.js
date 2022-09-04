import React from "react";
import { Link } from "react-router-dom";

export default function OtpVerification() {
    return (
        <>
            <div className="main-page">
                <div className="left-page">
                    <img className="pocketimg" src="./images/Asset 1 2.png" alt="" />
                </div>
                <div className="right-page">
                    <div className="form-div">
                        <h3>LOGIN</h3>
                        <p>With Number</p>
                        <h2>OTP verification</h2>
                        <p>Enter the OTP sent to +91xxxxxxxxxx</p>


                        <form className="modal-content animate" method="post">

                            <div className="container">
                            <label >Otp varfication</label><br />
                                <div className="otp_numbers">
                                   <input className="otp_number_boxes" type="text" />
                                   <input className="otp_number_boxes" type="text" />
                                   <input className="otp_number_boxes" type="text" />
                                   <input className="otp_number_boxes" type="text" />
                                   <input className="otp_number_boxes" type="text" />
                                   <input className="otp_number_boxes" type="text" />
                                </div>
                            
                                <button type="submit"> <Link to='/verifyAndProceed'>Verify and Proceed</Link> </button>
                                <p className="emailSignUp">Want to SignUp with <span><Link to='/email'>Email</Link></span>  </p>
                            </div>

                        </form>

                    </div>
                </div>

            </div>

        </>
    )
}