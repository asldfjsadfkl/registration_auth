import { createSlice } from "@reduxjs/toolkit";


const userSlices = createSlice({
    name: "userApi",
    initialState: {
    },

    reducers: {

        getUserREQ: (state, action) => {
            state.status = false
        },

        getUserSUC: (state, action) => {
            state.status = true
            state.user = action.payload
        },
    }
})



export const { getUserREQ, getUserSUC } = userSlices.actions;
export default userSlices.reducer


