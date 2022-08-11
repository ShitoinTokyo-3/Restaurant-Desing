import { configureStore } from "@reduxjs/toolkit";
import carousels from "../features/carouselMain/index";
import userInfo from "../features/user/index";

const store = configureStore({
    reducer: {
        carousels: carousels,
        user: userInfo,
    }
})

export default store;