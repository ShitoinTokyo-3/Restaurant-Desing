import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { restApi } from '../restApi';

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
        [restApi.reducerPath]: restApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(restApi.middleware),
});
export default store;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);