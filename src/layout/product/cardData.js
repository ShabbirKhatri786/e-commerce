import React, { useEffect, useState } from "react";
import "./style.css";
import { cardData } from "../card/card"
import TextBtn from "../../component/buttons/txtBtn";
// import { FaCartArrowDown } from "react-icons/fa";
import { message } from "antd";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { addProductToCart, getCartProducts } from "../../utils/function/localStorage";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCard, removeFromCart, setCartCount } from "../../reducer/reudcer";


const ProductsLayout = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [productsInCart, setProcutdsInCart] = useState(getCartProducts() ?? []);

  const cartCount = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const apiGet = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        if (json && json.length > 0) {
          setData(json);
        } else {
          console.error("Failed to fetch products:", json);
        }
      })
      .catch(e => {
        console.error("Error data", e);
      });
  };


  const addToCard = (data) => {


    let getCartData = getCartProducts();


    if (getCartData.find(v => v === data.id)) {
      const filteredData = getCartData.filter(v => Number(v) !== Number(data.id))
      addProductToCart(filteredData);
      setProcutdsInCart(filteredData)
      message.success("Product removed from Cart")
      dispatch(removeFromCart());
    } else {
      getCartData.push(data.id)
      addProductToCart(getCartData)
      setProcutdsInCart(getCartData)
      message.success("Product Added to Cart")
      dispatch(addToCard());
    }
  }

  const goToprocut = (data) => {
    navigate(`/product/${data.id}`)
  }

  useEffect(() => {

    apiGet()

  }, [])

  return (
    <div className="products__layout__main">
      <div className="container">
        <div className="text-center">
          <h2 className="text-uppercase mb-4">new arrivals</h2>
          <p>Claritas est etiam processus dynamicus, qui sequitur.</p>
        </div>
        <div className="cards__section row">
          {data.map((v, i) => {
            
            const isAdded = productsInCart?.includes(v.id)
            console.log("Is added", isAdded)
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={v.id}>
                <div className="card__main">
                  <div onClick={() => goToprocut(v)} className="image__box">
                    <img src={v.image} alt={v.title} />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3>{v.title}</h3>
                      <h5>${v.price}</h5>
                    </div>
                    <div>
                      <TextBtn
                        onClick={() => addToCard(v)}
                        text={
                          <div className="card__icon__container position-relative">
                            {isAdded && <div className="number__label">1</div>}
                            {isAdded ? <IoCart size={40} /> : <IoCartOutline size={40} />}
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
