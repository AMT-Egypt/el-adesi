import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/storeType';

const initialState: UserState = {
    searchValue: "",
    filterValue: "",
    typeService: ""
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTypeService: (state, action: PayloadAction<string>) => {
            state.typeService = action.payload
        },
    },
});

export const { setTypeService } = userSlice.actions;

export default userSlice.reducer;