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
        setActualCategoryRedux: (state, action) => {
            state.actualCategory = action.payload;
        },
        setActualCategoryWithProductsRedux: (state, action) => {
            state.actualCategoryWithProducts = action.payload;
        }
    }
});

export const { setCategoriesRedux, setActualCategoryRedux, setActualCategoryWithProductsRedux } = services.actions;
export default services.reducer;