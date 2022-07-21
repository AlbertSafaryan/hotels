import {NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import '../css/Header.css';
import logo from "../images/logo.png";
import MyCart from './MyCart'
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.userReducer.user);
  console.log(user)
  return (
    <div className="Header">
        <div className="Container">
                <div className="Logo">
               
                    <img src={logo} alt="logo" />
                  
                </div>
                <div className="Navbar">
                    <FontAwesomeIcon icon={faGlobe} />
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/admin'>List your property</NavLink>
                    <MyCart />
                    <NavLink to='/reg'>Sign Up</NavLink>
                    <NavLink to='/login'>Sign In</NavLink>
                </div>
                <div>
                  {user.name}
                </div>
        </div>   
    </div>
  )
}

export default Header