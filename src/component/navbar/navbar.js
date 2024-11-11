import React, { useState } from "react";
import './style.css'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'


const NavBar = () => {
    const [menu, setManu] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHABBIR</p>
            </div>
            <ul className="nav-manu">
                <li onClick={()=>{setManu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setManu("men")}}>Men {menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setManu("women")}}>Women {menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setManu("kids")}}>Kids {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}


export default NavBar;