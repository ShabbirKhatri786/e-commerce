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
import { addToCartCount, totalPayment } from "../../reducer/reudcer";
import { ApiUrl } from "../../api/configue";
import { GetTotal } from "../../utils/function/common";


const ProductsLayout = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const cartProd = getCartProducts()
  const [productsInCart, setProcutdsInCart] = useState(getCartProducts() ?? []);

  const cartCount = useSelector((state) => state.counter.count);
  console.log('cartCount==>>', cartCount)
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.counter.totalAmount);
  const searchQuery = useSelector((state) => state.search.query);



  const addToCard = (data) => {
    if (!data || !data.id) {
      console.error('Item ya item id undefined hai');
      return;
    }

    let getCartData = getCartProducts();


    if (getCartData.includes(data.id)) {
      const filteredData = getCartData.filter((id) => id !== data.id)
      addProductToCart(filteredData);
      setProcutdsInCart(filteredData)
      message.success("Product removed from Cart")
      dispatch(addToCartCount({ product: data, actionType: "remove" }));
    } else {
      getCartData.push(data.id)
      addProductToCart(getCartData)
      setProcutdsInCart(getCartData)
      message.success("Product Added to Cart")
      dispatch(addToCartCount({ product: data, actionType: "add" }));
    }
  }

  const goToprocut = (data) => {
    navigate(`/product/${data.id}`)
  }

  useEffect(() => {
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // const card = getCartProducts()
        // const filterData = data.filter((v) => card.includes(v.id))
        // const totalPrice = filterData.reduce((total, item) => total + (item.price), 0);
        dispatch(totalPayment(GetTotal(data)))
      })
      .catch((err) => {
        console.log('Error fetching products:', err);
      });
  }, []);

  return (
    <div className="products__layout__main">
      <div className="container">
        <div className="text-center">
          <h2 className="text-uppercase mb-4">new arrivals</h2>
          <p>Claritas est etiam processus dynamicus, qui sequitur.</p>
        </div>
        <div className="cards__section row">
          {product.map((v, i) => {

            const isAdded = cartProd?.includes(v.id)
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