import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    actualCategory: {},
    actualCategoryWithProducts: {},
};

const services = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategoriesRedux: (state, action) => {
            state.categories = action.payload;
        },
        cleanCategoriesRedux: (state) => {
            state.categories = [];
        },
        setActualCategoryRedux: (state, action) => {
            state.actualCategory = action.payload;
        },
        setActualCategoryWithProductsRedux: (state, action) => {
            state.actualCategoryWithProducts = action.payload;
        },
        cleanActualCategoryWithProductsRedux: (state) => {
            state.actualCategoryWithProducts = {};
        }

    }
});

export const { 
    setCategoriesRedux, 
    cleanCategoriesRedux, 
    setActualCategoryRedux, 
    setActualCategoryWithProductsRedux,
    cleanActualCategoryWithProductsRedux
} = services.actions;
export default services.reducer;