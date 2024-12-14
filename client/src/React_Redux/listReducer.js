
import { createSlice } from "@reduxjs/toolkit";



const listSlice = createSlice({
    name: "listApi",
    initialState: {},
    reducers: {

        LIST_REQUEST: (state) => {
            state.status = false
        },

        LIST_SUCCESS: (state, action) => {
            state.data = action.payload
            state.status = true

        }

    }
});


export const { LIST_REQUEST, LIST_SUCCESS } = listSlice.actions;
export default listSlice.reducer

