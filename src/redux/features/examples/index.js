import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    examples: [],
    actualExample: {},
};

const examples = createSlice({
    name: "examples",
    initialState,
    reducers: {
        setExampleRedux: (state, action) => {
            state.examples = action.payload;
        },
        cleanExampleRedux: (state) => {
            state.examples = [];
        },
        setActualExampleRedux: (state, action) => {
            state.actualExample = action.payload;
        }
    }
});

export const { setExampleRedux, setActualExampleRedux,cleanExampleRedux } = examples.actions;
export default examples.reducer;