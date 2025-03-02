import React from 'react'
import "./Header.css"
import Logos from "../Common/icon/Logo.png"
import { Link } from 'react-router-dom'
import Notificationpic from "../Common/icon/notification.png"
import chatimg from "../Common/icon/messenger.png"


export default function Header() {
    return (
        <div className="HeaderSection">
            <div className="Header-Logo-Section">
                <div className="Logos">
                    <img src={Logos} alt="" />
                </div>
                <div className="Not-Chat-Section">
                    <ul>
                        <li> <Link> <img src={Notificationpic} alt="" />  </Link> </li>
                        <li> <Link to={"./Chatting"}> <img src={chatimg} alt="" /> </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
