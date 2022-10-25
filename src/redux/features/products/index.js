import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    actualProduct: {},
};

const products = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProductsRedux: (state, action) => {
            state.products = action.payload;
        },
        setActualProductRedux: (state, action) => {
            state.actualProduct = action.payload;
        },
    }
});

export const { setProductsRedux, setActualProductRedux} = products.actions;
export default products.reducer;