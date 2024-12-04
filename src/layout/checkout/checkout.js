import React, { useEffect, useState } from 'react';
import logo from '../../Assets/logo.png';
import './style.css';

export const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems"));
        if (items) {
            setCartItems(items)
        }
    });

    const total = () => {
        return cartItems?.reduce((acc, item) => acc + Number(item.price), 0);
    };

    return (
        <div className="checkout-page">
            <header className='header'>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>CHECKOUT</p>
                </div>
            </header>

            <div className="checkout-container">
                {/* Form */}
                <div className="checkout-form">
                    <h2>Customer Details</h2>
                    <form>

                        <div className="input-group">
                            <label>First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                            />
                        </div>



                        <div className="input-group">
                            <label>Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Phone Number:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                required
                            />
                        </div>


                        <div className="input-group">
                            <label>Address:</label>
                            <textarea
                                id="address"
                                name="address"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Zip Code:</label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                required
                            />
                        </div>

                        <button type="submit" >Submit</button>
                    </form>
                </div>

                {/* Divider Line */}
                <div className="divider"></div>

                {/* Product Container (you can add content here) */}
                <div className="cart-items">
                    <h3>Products in Your Cart</h3>
                    {cartItems && cartItems.length > 0 ? (
                        <div className='product-list'>
                            {cartItems.map((item) => (
                                <div key={item.id} className="product-card">
                                    <img src={item.image} alt={item.title} className="product-image" />
                                    <div className="product-details">
                                        <h4>{item.title}</h4>
                                        <p>Price: Rs.{item.price}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="total">
                                <h4>Total: Rs.{total()}</h4>
                            </div>
                        </div>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
