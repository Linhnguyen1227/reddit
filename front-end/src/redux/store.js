import { configureStore } from '@reduxjs/toolkit';
import useReducer from './useSlide';
import usePost from './postSlide';

export default configureStore({
    reducer: {
        user: useReducer,
        post: usePost,
    },
});
