import React, { useEffect, useState } from "react";
import "./style.css";
import { cardData } from "../card/card";
import TextBtn from "../../component/buttons/txtBtn";
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
  const cartProd = getCartProducts();
  const [productsInCart, setProcutdsInCart] = useState(cartProd ?? []);

  const cartCount = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.counter.totalAmount);
  const searchQuery = useSelector((state) => state.search.query);


  useEffect(() => {
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        dispatch(totalPayment(GetTotal(data)));
      })
      .catch((err) => {
        console.log('Error fetching products:', err);
      });
  }, []);


    // Filter products based on search query
    const filteredProducts = product.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

  const addToCard = (data) => {
    if (!data || !data.id) {
      console.error('Item ya item id undefined hai');
      return;
    }

    let getCartData = getCartProducts();

    if (getCartData.includes(data.id)) {
      const filteredData = getCartData.filter((id) => id !== data.id);
      addProductToCart(filteredData);
      setProcutdsInCart(filteredData);
      message.success("Product removed from Cart");
      dispatch(addToCartCount({ product: data, actionType: "remove" }));
    } else {
      getCartData.push(data.id);
      addProductToCart(getCartData);
      setProcutdsInCart(getCartData);
      message.success("Product Added to Cart");
      dispatch(addToCartCount({ product: data, actionType: "add" }));
    }
  };

  const goToprocut = (data) => {
    navigate(`/product/${data.id}`);
  };
  console.log("Hello, world!");

 

  return (
    <div className="products__layout__main">
      <div className="container">
        <div className="text-center">
          <h2 className="text-uppercase mb-4">new arrivals</h2>
          <p>Claritas est etiam processus dynamicus, qui sequitur.</p>
        </div>
        <div className="cards__section row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((v) => {
              const isAdded = cartProd?.includes(v.id);
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={v.id}>
                  <div className="card__main">
                    <div onClick={() => goToprocut(v)} className="image__box">
                      <img src={v.image} alt={v.title} />
                    </div>
                    <div className="card__details">
                      <h3>{v.title.length > 30 ? `${v.title.slice(0, 30)}...` : v.title}</h3>
                      <div className="price-cart">
                        <h5>${v.price}</h5>
                        <TextBtn
                          onClick={() => addToCard(v)}
                          text={
                            <div className="card__icon__container position-relative">
                              {isAdded && <div className="number__label">1</div>}
                              {isAdded ? (
                                <IoCart size={40} className="icon-added" />
                              ) : (
                                <IoCartOutline size={40} className="icon-not-added" />
                              )}
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
