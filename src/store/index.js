import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import shopReducer from "../features/shop/shopSlice.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: shopReducer,
    }
})
