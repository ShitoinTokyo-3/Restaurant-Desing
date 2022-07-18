import { configureStore } from "@reduxjs/toolkit";
import kindsReducer from "../features/mainKinds/index";

const store = configureStore({
    reducer: {
        mainKinds: kindsReducer
    }
})

export default store;