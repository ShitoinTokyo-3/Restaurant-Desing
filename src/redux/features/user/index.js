import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    userInfoBackend: {},
    loadingUser: true,
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserRedux: (state, action) => {
            state.userInfo = action.payload;
        },
        setUserRedeuxBackend: (state, action) => {
            state.userInfoBackend = action.payload;
        },
        setLoadingUser: (state, action) => {
            state.loadingUser = action.payload;
        }
    }
});

export const { setUserRedux, setUserRedeuxBackend, setLoadingUser } = user.actions;
export default user.reducer;