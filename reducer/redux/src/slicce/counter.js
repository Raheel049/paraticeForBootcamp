import { createSlice } from "@reduxjs/toolkit";

const counterSLice = createSlice({
    name : "counter",
    initialState : {
        value : 0
    },

    reducers : {
        increment : (state) => {
            state.value += 1;
        }
    }
})


export const {increment} = counterSLice.actions
export default counterSLice.reducer

