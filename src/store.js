// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './services/userSlice';

const store = configureStore({
    reducer: {
        auth: authReducer, // Add other reducers here as needed
    },
});

export default store;
