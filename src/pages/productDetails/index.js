import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { cardData } from "../../layout/card/card";
import { Button, message } from "antd";
import { addProductToCart, getCartProducts } from "../../utils/function/localStorage";
import Navbar from "../../component/navbar/navbar";
import './ProductDetails.css';
import { ApiUrl } from "../../api/configue";

const ProductDetails = () => {
const {id} = useParams();
console.log('id==>>', id)
    const [cartProducts, setCartProducts] = useState(getCartProducts());
    const [product,setProduct]= useState(null)

  const params = useParams();
  const currentProduct = cardData.find(
    (v) => Number(v.id) === Number(params.id)
  );
  const isIncluded = cartProducts.includes(Number(params.id));

  console.log('isIncluded', cartProducts)

  
  const addToCard = () => {
    const data = currentProduct;
    let getCartData = getCartProducts();
    if(getCartData.find(v => v === data.id)){
      const filteredData = getCartData.filter(v => Number(v) !== Number(data.id))
      console.log('filteredData', filteredData)
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

  useEffect(() => {
    fetch(ApiUrl, {
      method: 'GET'
    }).then((res) => {
      res.json().then((res) => {
        console.log('res==>>', res)

        const response =  res?.find((v) => Number(v?.id) == Number(id))

        console.log('response==>>', response)

        setProduct(response)

      })
    }).catch((e) => {
      console.log('error', e)
    })
  }, [])
  

  return (
    <div>
        <Navbar />
      <div className="container py-4">
        <div className="product-container">
          <div className="col-md-6">
            <img className="product__img" src={product?.image} alt={product?.title} />
          </div>
          <div className="col-md-6  product-info">
            <div>
              <h3 className="product-title">{product?.title}</h3> 
               <p className="product-description">{product?.description}</p> 
              <h1 className="product-price">Rs.{product?.price}</h1>
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
