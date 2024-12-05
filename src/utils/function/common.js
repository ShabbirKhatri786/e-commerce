import { getCartProducts } from "./localStorage";

export const GetTotal = (data) => {
    const card = getCartProducts()
    const filterData = data.filter((v) => card.includes(v.id))
    const totalPrice = filterData.reduce((total, item) => total + (item.price), 0);
    return (
        totalPrice
    )
}