import React from "react";
import { Link } from "react-router-dom"
import SingInForm from "../signupPage/form";
export default function PersonalInfo() {
    return (
        <>
            <div className="main-page">
                <div className="left-page">
                    <img className="pocketimg" src="./images/Asset 1 2.png" alt="" />
                </div>
                <div className="right-page">
                    <div className="form-div">
                        <h3>GETTING STARTED</h3>
                        <p>Fill in youe personal information</p>
                        <form className="modal-content animate" method="post">

                            <div className="container">
                                <label >Full Name</label><br />
                                <input type="text" /><br />
                               
                                <label >Profession</label><br />
                                <input type="text" /><br />

                                <label >Phone number</label><br />
                                <input type="text" />

                                <label >Email adress</label><br />
                                <input type="text" />

                                <button type="submit"> <Link to='/next'>Next</Link> </button>
                                


                            </div>


                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}