// import React, { useState, useEffect } from "react";
// import { Button } from "antd";
// import { getCartProducts } from "../../utils/function/localStorage";
// import { cardData } from "../../layout/card/card";
// import "./style.css";

// export const Checkout = () => { // Rename "checkout" to "Checkout"
//   const [cartData, setCartData] = useState(getCartProducts() ?? []);
//   const productData = cardData.filter((v) => cartData.includes(v.id));

//   const calculateSubtotal = () => {
//     return productData.reduce((total, product) => total + (product.price * 1), 0);
//   };

//   const calculateGST = (subtotal) => {
//     return (subtotal * 17) / 100;
//   };

//   const calculateDeliveryCharges = () => {
//     return 50;  // Fixed delivery charge
//   };

//   const calculateGrandTotal = () => {
//     const subtotal = calculateSubtotal();
//     const gst = calculateGST(subtotal);
//     const deliveryCharges = calculateDeliveryCharges();
//     return subtotal + gst + deliveryCharges;
//   };

//   useEffect(() => {
//     setCartData(getCartProducts() ?? []);
//   }, []);

//   return (
//     <div className="checkout-container">
//       <h2>Checkout</h2>
//       <div className="product-summary">
//         {productData.map((product, index) => (
//           <div key={index} className="product-item">
//             <img src={product.image} alt={product.title} />
//             <div>{product.title}</div>
//             <div>Price: Rs. {product.price}</div>
//             <div>Quantity: 1</div>
//             <div>Total: Rs. {product.price}</div>
//           </div>
//         ))}
//       </div>
//       <div className="price-summary">
//         <div><strong>Subtotal:</strong> Rs. {calculateSubtotal()}</div>
//         <div><strong>GST (17%):</strong> Rs. {calculateGST(calculateSubtotal())}</div>
//         <div><strong>Delivery Charges:</strong> Rs. {calculateDeliveryCharges()}</div>
//         <div><strong>Grand Total:</strong> Rs. {calculateGrandTotal()}</div>
//       </div>
//       <Button type="primary">Proceed to Payment</Button>
//     </div>
//   );
// };
