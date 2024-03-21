// store.js

import { configureStore } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  userId: null // Initially set to null
};

// Define your reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload
      };
    default:
      return state;
  }
};

// Create your Redux store
const store = configureStore({ reducer: rootReducer });

export default store;
