import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import '../css/Footer.css';
import logo from "../images/expediagroup.svg";

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Reserved">
            <div className="Container">
                <p>© 2022 Hotels.com is an Expedia Group company. All rights reserved.</p>
                <p>Hotels.com and the Hotels.com logo are trademarks or registered trademarks of Hotels.com, LP in the United States and/or other countries. All other trademarks are the property of their respective owners.</p>
            </div>
        </div> 
    </div>

  )
}

export default Footer

