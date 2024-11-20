export const getCartProducts = () => {
    const data = localStorage.getItem("cart__data");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };
  
  export const addProductToCart = (products) =>
    localStorage.setItem("cart__data", JSON.stringify(products));
  
  
export const rempveFromCart = (productId) => {
let cart = JSON.parse(localStorage.getItem('cart__data')) || [];
const cartFilter = cart.filter(id => id !== productId);
console.log(cartFilter)
localStorage.setItem('cart__data', JSON.stringify(cartFilter));
};