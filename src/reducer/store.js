import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../reducer/reudcer'



export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})


// export type AppDispatch = typeof store.dispatch