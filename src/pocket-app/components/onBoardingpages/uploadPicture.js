import React from "react";
import {Link} from 'react-router-dom'
export default function UploadPicture(){
    return(
        <>
        <div className="main-page">
                <div className="left-page">
                    <img className="pocketimg" src="./images/Asset 1 2.png" alt="" />
                </div>
                <div className="right-page">
                    <div className="form-div">
                        <h3>Getting started</h3>
                        <p>Upload a picture of yourself</p>
                        <p>It will help your contact to know you by your face</p>
                       
                    </div>
                </div>

            </div>
        </>
    )
}