import { configureStore } from "@reduxjs/toolkit";
import carousels from "../features/carouselMain/index";
import userInfo from "../features/user/index";
import categories from "../features/categories/index";
import products from "../features/products/index";
import examples from "../features/examples/index";

const store = configureStore({
    reducer: {
        carousels: carousels,
        user: userInfo,
        categories: categories,
        products: products,
        examples: examples,
    }
})

export default store;