import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    loadingUser: true,
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserRedux: (state, action) => {
            state.userInfo = action.payload;
        },
        setLoadingUser: (state, action) => {
            state.loadingUser = action.payload;
        }
    }
});

export const { setUserRedux, setLoadingUser } = user.actions;
export default user.reducer;