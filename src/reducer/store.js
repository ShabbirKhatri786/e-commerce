import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../reducer/reudcer'
import searchReducer from "../reducer/searchSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        search: searchReducer, 
    },
})


export default store;