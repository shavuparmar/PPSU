import Logos from "./icon/Logo.png"


import "./NavBar.css"
import Homeic from "./icon/home.png"
import Searchic from "./icon/Searchic.png"
import  NotiFicationimage from "./icon/notification.png"
import Folderic from "./icon/folder.png"
import Profilic from "./icon/UserP.png"
import { Link } from "react-router-dom"
   

function NavBar() {
    return (
     <div className="MainCotainer">
      <div className="Navigation-Deskview Right-Side">
       <div className="SideBar">
       <div className="Logos">
          <img src={Logos} alt="" />
        </div>
        <nav>
          <div className="icons ">
        <ul>
          <li> <img src={Homeic} alt="" />Home</li>
          <li> <img src={Searchic} alt="" />Search</li>
          <li> <img src={NotiFicationimage} alt="" />Notification</li>
          <li> <img src={Folderic} alt="" />Upload</li>
          <li>  <img src={Profilic} alt="" />Profile</li>
        </ul>
          </div>
        </nav>
       </div>
      </div>
      <div className="Mobile-View">
        <div className="Navigation">
          <ul>
            
            <li> <Link to={"/"}> <img src={Homeic} alt="" /> </Link> </li>
            <li>  <img src={Searchic} alt="" /> </li>
            <li> <img src={Folderic} alt="" /> </li>
            <li>  <Link to={"./Profile"}> <img src={Profilic} alt="" /></Link> </li>
          </ul>
        </div>
      </div>
     </div>
      
    );
  }
  
  export default NavBar;
  