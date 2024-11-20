import React, { useEffect, useState } from "react";
import './style.css'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { addProductToCart, getCartProducts } from "../../utils/function/localStorage";
import CartDrawer from "../../layout/cartDrawer/index";
import LoginSignUp from "../../component/loginsignup/loginSignUp";


const NavBar = () => {
    const [menu, setManu] = useState("shop");
    const [open, setOpen] = useState(false);
    const [productsInCart, setProcutdsInCart] = useState(getCartProducts() ?? [])
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
    setProcutdsInCart(getCartProducts() ?? []);
    console.log("okokok")
    }, []);


    const openDrawer = () => setOpen(true);

    const handleAddToCart = (product) => {
        addProductToCart(product);
        const updatedProducts = getCartProducts();
        setProcutdsInCart(updatedProducts);
    };

const openLoginModal = () =>{
    setIsModalOpen(true);
};

const closeLoginModal= () =>{
    setIsModalOpen(false)
}

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHABBIR</p>
            </div>
            <ul className="nav-manu">
                <li onClick={() => { setManu("shop") }}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setManu("men") }}><Link style={{ textDecoration: 'none' }} to="/mens">Mens</Link> {menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setManu("women") }}><Link style={{ textDecoration: 'none' }} to="/women">Womens</Link> {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setManu("kids") }}><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
            <button onClick={openLoginModal}>Login</button> 
               <div onClick={openDrawer} className="cart-icon">
                    <img src={cart_icon} alt="Cart" />
                    {productsInCart.length > 0 && (
                        <div className="nav-cart-count">{productsInCart.length}</div>
                    )}
                </div>

                <CartDrawer open={open} setOpen={setOpen} />
            </div>
            {isModalOpen && <LoginSignUp closeModal={closeLoginModal} />}
        </div>

    )
};


export default NavBar;