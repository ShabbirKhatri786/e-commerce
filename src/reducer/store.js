import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../reducer/reudcer'



const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})


export default store;