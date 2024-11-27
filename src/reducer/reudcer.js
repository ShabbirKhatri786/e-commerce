import { createSlice } from "@reduxjs/toolkit";



export const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        addToCard: (state) => {
            state.count += 1
        },
        removeFromCart: (state) => {
            state.count -= 1
        },
        setCartCount: (state, action) => {
            state.count = action.payload
        }
    }
})

export const {addToCard, removeFromCart, setCartCount} = counter.actions;

export default counter.reducer;