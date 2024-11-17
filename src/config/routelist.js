import { cart } from "../component/cart/cart";
// import { loginSignUp } from "../component/loginsignup/loginSignUp";
import Shop from "../pages/home/home";
import { kids } from "../pages/kids/kids";
import { mens } from "../pages/men/mens";
import { women } from "../pages/women/women";
import ProductDetails from "../pages/productDetails";

export const routeList = [
  {
    path: "/",
    Element: Shop,
  },
  {
    path: "/mens",
    Element: mens,
  },
  {
    path: "/women",
    Element: women,
  },
  {
    path: "/kids",
    Element: kids
  },
  // {
  //   path: "/loginSignUp",
  //   Element: loginSignUp,
  // },
  {
    path: "/cart",
    Element: cart,
  },
  {
    path:"/product/:id",
    Element: ProductDetails,
  }

];
