import React, { useEffect, useState } from "react";
import { Button, Drawer, message } from "antd";
import { getCartProducts, rempveFromCart } from "../../utils/function/localStorage";
import { cardData } from "../../layout/card/card";
import { useNavigate } from "react-router-dom";


const App = ({ open, setOpen }) => {
  const [cartData, setCartData] = useState(getCartProducts() ?? []);
  const productData = cardData.filter((v) => cartData.includes(v.id));
  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartData = cardData.filter(id => id !== productId);
    setCartData(updatedCartData);
    rempveFromCart(productId);
    message.success('Product Remove From Cart')
  };

  const CartFooter = () => {

    const productsWithAmount = productData.map(v => {
      return {
        ...v,
        amount: Number(v.price) * 1
      }
    })
    const total = productsWithAmount.reduce((amount, current) => {
      return amount + Number(current.amount)
    }, 0);

 

    const handleCheckoutClick = () => {
      navigate("/checkout");
    };

    return (
      <div>
        <div className="d-flex justify-content-between">
          <h4>Total</h4>
          <h4>Rs.${total}</h4>
        </div>
        <div className="mt-3">
          <Button type="primary" className="w-100" onClick={handleCheckoutClick}>
            Checkout
          </Button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setCartData(getCartProducts() ?? [])
  }, open);
  
  return (
    <>
      <Drawer
        title="My Cart"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
        footer={<CartFooter />}
      >
        {productData.map((v, i) => {
          return (
            <div key={i} className="cart__card d-flex border p-3 rounded mb-2">
              <div className="col-4">
                <img src={v.image} className="w-100" alt="" />
              </div>
              <div className="px-4">
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
