import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    kinds: [],
};

const mainSlice = createSlice({
    name: "kinds",
    initialState,
    reducers: {
        setKinds: (state, action) => {
            state.kinds = action.payload;
        }
    }
});

export const { setKinds } = mainSlice.actions;
export default mainSlice.reducer;