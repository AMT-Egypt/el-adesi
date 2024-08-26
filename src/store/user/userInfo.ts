import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
    name:"userInfo",
    initialState:{},
    reducers:{
        addUser:(state,action)=>{
            state=action.payload;
            return state;
        },
        deleteUser:(state)=>{
            state={};
            return state;
        }
    }
})

export const {addUser,deleteUser}=userInfo.actions;

export default userInfo.reducer;