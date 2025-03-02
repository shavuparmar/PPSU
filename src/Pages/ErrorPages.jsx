import React from 'react'
import "./Error.css"
// import Errorimg from "../Images/Errorimg.png"
import Errorloading from "../Images/errorloading.png"
import { Link } from 'react-router-dom'

export default function ErrorPages() {




    return (
        <div className="MainContainer">
            <div className="errorimage">
                
                <img src={Errorloading} alt="" />
            </div>
            
            <div className="NxtButton">
                <Link to="/">
                    <button>Back To Home</button>
                </Link>
            </div>
        </div>
    )
}
