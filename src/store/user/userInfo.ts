import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../types/storeType";

const initialState: UserInfo = {
    blocked: false,
    confirmed: false,
    createdAt: "",
    email: "",
    id: null,
    provider: "",
    updatedAt: "",
    username: ""
};


export const userInfo = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state = action.payload;
            return state;
        },
        deleteUser: (state) => {
            state = initialState;
            return state;
        }
    }
})

export const { addUser, deleteUser } = userInfo.actions;

export default userInfo.reducer;