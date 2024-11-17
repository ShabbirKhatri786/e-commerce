import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../../layout/card/card";
import { Button, message } from "antd";
import { addProductToCart, getCartProducts } from "../../utils/function/localStorage";
import Navbar from "../../component/navbar/navbar";
import './ProductDetails.css';

const ProductDetails = () => {

    const [cartProducts, setCartProducts] = useState(getCartProducts());

  const params = useParams();
  const currentProduct = cardData.find(
    (v) => Number(v.id) === Number(params.id)
  );
  const isIncluded = cartProducts.includes(Number(params.id));
  
  const addToCard = () => {
    const data = currentProduct;
    let getCartData = getCartProducts();
    if(getCartData.find(v => v === data.id)){
      const filteredData = getCartData.filter(v => Number(v) !== Number(data.id))
      addProductToCart(filteredData);
      setCartProducts(filteredData)
      message.success("Product removed from Cart")
    }else{
      getCartData.push(data.id)
      addProductToCart(getCartData)
      setCartProducts(getCartData)
      message.success("Product Added to Cart")
    }
  }

  return (
    <div>
        <Navbar />
      <div className="container py-4">
        <div className="product-container">
          <div className="col-md-6">
            <img className="product__img" src={currentProduct?.image} alt={currentProduct?.title} />
          </div>
          <div className="col-md-6  product-info">
            <div>
              <h3 className="product-title">{currentProduct.title}</h3>
              <p className="product-description">{currentProduct?.description}</p>
              <h1 className="product-price">Rs.{currentProduct.price}</h1>
              <div className="add-to-cart-btn" >
                <Button onClick={addToCard}>{isIncluded ? "Remove from Cart": "Add to Cart"}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
