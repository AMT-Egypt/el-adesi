import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/storeType';

const initialState: UserState = {
    searchValue: "",
    filterValue: "",
    typeService: "",
    delete: true
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTypeService: (state, action: PayloadAction<string>) => {
            state.typeService = action.payload
        },
        setDelete: (state) => {
            state.delete = !state.delete
        }
    },
});

export const { setTypeService, setDelete } = userSlice.actions;

export default userSlice.reducer;