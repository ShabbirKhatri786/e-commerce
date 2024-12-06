import React, { useEffect, useState } from "react";
import './style.css'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { addProductToCart, getCartProducts } from "../../utils/function/localStorage";
import CartDrawer from "../../layout/cartDrawer/index";
import LoginSignUp from "../../component/loginsignup/loginSignUp";
import { useSelector } from "react-redux";
import Search from "../search/search";
import 'font-awesome/css/font-awesome.min.css';


// Bootstrap
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';



const NavBar = () => {
    const [menu, setManu] = useState("shop");
    const [open, setOpen] = useState(false);
    const [productsInCart, setProcutdsInCart] = useState(getCartProducts() ?? [])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        setProcutdsInCart(getCartProducts() ?? []);
        console.log("okokok")
    }, []);

    const cartCount = useSelector((state) => state.counter.count)
    const totalAmount = useSelector((state) => state.counter.totalAmount);

    console.log('cartCoun==>>', cartCount)

    const openDrawer = () => setOpen(true);

    const openLoginModal = () => {
        setIsModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsModalOpen(false)
    }

    const handleAddToCart = (product) => {
        addProductToCart(product);
        const updatedProducts = getCartProducts();
        setProcutdsInCart(updatedProducts);
    };





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

                {/* loginModal */}
                <button onClick={openLoginModal}>Login</button>

                {/* <Search /> */}
                {/* Search Bar Toggle */}
                <div className="search-toggle">
                    <button onClick={() => setShowSearch(!showSearch)}>
                        <i className="fa fa-search"></i>
                    </button>
                    {showSearch && <Search />}
                </div>

                {/* cart icon or drawer */}
                <div onClick={openDrawer} className="cart-icon">
                    <img src={cart_icon} alt="Cart" />
                    {cartCount > 0 && (
                        <div className="nav-cart-count"> {cartCount}</div>
                    )}
                    <div className="totalAmount"> items | ${isNaN(totalAmount) ? 0 : totalAmount.toFixed(2)} </div>
                </div>

                <CartDrawer open={open} setOpen={setOpen} />
            </div>
            {isModalOpen && <LoginSignUp closeModal={closeLoginModal} />}
        </div>

    )
};


export default NavBar;