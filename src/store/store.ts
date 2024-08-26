import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import userInfo from './user/userInfo';

export default configureStore({
    reducer: {
        user: userSlice,
        userInfo: userInfo,
    }
});