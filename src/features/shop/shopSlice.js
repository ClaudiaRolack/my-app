import { createSlice } from "@reduxjs/toolkit";
import { dataProducts } from "../../data/dataProducts.js";
import { dataCategories } from "../../data/dataCategories.js";

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        dataProducts,
        dataCategories,
        categorySelected: '',
        productIdSelected: '',
        productsFilteredByCategory: [],
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            state.productsFilteredByCategory = state.dataProducts.filter(product => product.categoryId === action.payload)
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload
        }
    }
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer