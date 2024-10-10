// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
