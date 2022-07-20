import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carouselMainInfo: {},
};

const carousels = createSlice({
    name: "carousels",
    initialState,
    reducers: {
        setMainCarousel: (state, action) => {
            state.carouselMainInfo = action.payload;
        }
    }
});

export const { setMainCarousel } = carousels.actions;
export default carousels.reducer;