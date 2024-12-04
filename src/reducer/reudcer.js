import { createSlice } from "@reduxjs/toolkit";



export const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        totalAmount: 0,
    },
    reducers: {
        addToCartCount:(state,actions)=>{
            console.log(actions.payload)
            const { product, actionType } = actions.payload;
                if(actionType  === "add"){
                    state.count += 1
                    state.totalAmount += product.price;
                }else if (actionType === "remove"){
                    state.count -= 1
                    state.totalAmount -= product.price
                }
                return state  
        }
    }
})

export const {addToCartCount} = counter.actions;

export default counter.reducer;