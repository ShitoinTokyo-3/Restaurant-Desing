import { configureStore } from "@reduxjs/toolkit";
import carousels from "../features/carouselMain/index";

const store = configureStore({
    reducer: {
        carousels: carousels
    }
})

export default store;