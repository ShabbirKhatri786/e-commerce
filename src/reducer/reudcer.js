import { createSlice } from "@reduxjs/toolkit";



export const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        addToCartCount:(state,actions)=>{
            console.log(actions.payload)
                if(actions.payload === "+"){
                    state.count += 1
                }else{
                    state.count -= 1
                }
                return state  
        }
    }
})

export const {addToCartCount} = counter.actions;

export default counter.reducer;