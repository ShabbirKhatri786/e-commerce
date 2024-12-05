import React, { useEffect, useState } from "react";
import { Button, Drawer, message } from "antd";
import { getCartProducts, rempveFromCart } from "../../utils/function/localStorage";
import { cardData } from "../../layout/card/card";
import { useNavigate } from "react-router-dom";
import { ApiUrl } from "../../api/configue";
// import Item from "antd/es/list/Item";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToCartCount, totalPayment} from "../../reducer/reudcer";
import { GetTotal } from "../../utils/function/common";


const App = ({ open, setOpen }) => {
  const [cartData, setCartData] = useState(getCartProducts() ?? []);
  console.log(cartData)
  const [filteredData, setFilteredData] = useState([])
  const productData = cardData.filter((v) => cartData.includes(v.id));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => {

        const productData = data.filter((product) => cartData.includes(product.id));
        setCartData(getCartProducts() ?? [])
        setFilteredData(productData)
      })
      .catch((err) => {
        console.log("error fetching product", err)
      });

  }, [open,]);

  const onClose = () => {
    setOpen(false);
  };

  const handleRemoveFromCart = (productId) => {
    console.log('productId', productId)
    const updatedCartData = filteredData.filter(Item => { 
      setData(Item)
     return Item.id !== productId

     });
    console.log(filteredData)
    console.log("update", updatedCartData)
    setFilteredData(updatedCartData)
    console.log(productData)
    rempveFromCart(productId);
    console.log('data==>>', data)
    dispatch(addToCartCount({actionType:"remove",product:data}))
    dispatch(totalPayment(GetTotal(filteredData)))

    message.success('Product Remove From Cart')
  };
  console.log(data,"<<==data")

  const CartFooter = () => {

    const productsWithAmount = filteredData?.map(v => {
      return {
        ...v,
        amount: Number(v.price) * 1
      }
    })
    const total = productsWithAmount.reduce((amount, current) => {
      return amount + Number(current.amount)
    }, 0);

    const handleCheckout = () => {
      localStorage.setItem("cartItems", JSON.stringify(filteredData));
      navigate("/checkout");
    }


    return (
      <div className="cart-footer">
        <div className="d-flex justify-content-between">
          <h4>Total</h4>
          <h4>Rs.${total}</h4>
        </div>
        <div className="mt-3">
          <Button type="primary" className="w-100 mt-3 checkout-btn" onClick={() => {navigate("/checkout");handleCheckout()}}  >
            Checkout
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Drawer
        title="My Cart"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
        footer={<CartFooter />}
        className="cart-drawer"
      >
        {filteredData?.map((v, i) => {
          return (
            <div key={i} className="cart-card">
              <div className="cart-card-image">
                <img src={v.image} className="w-100" alt="" />
              </div>
              <div className="cart-card-details">
                <h3>{v.title}</h3>
                <h2>Rs.{v.price}</h2>
                <div>Amount: Rs.${Number(v.price) * 1}</div>
                <Button type="button" onClick={() => handleRemoveFromCart(v.id)} style={{ color: "red" }}>Remove</Button>
              </div>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};
export default App;