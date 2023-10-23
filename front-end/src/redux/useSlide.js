import { createSlice } from '@reduxjs/toolkit';

const useSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'User',
        age: 'User-Age',
        image: 'https://i.redd.it/ib7scrg5t7w61.png',
        description: '',
        themeColor: '#ff9051',
        pending:false,
        error: false,
    },
    reducers: {
        updateStart:(state)=>{
            state.pending = true;
        },
        updateError:(state)=>{
            state.pending = false;
            state.error = true;
        },
        updateSuccess:(state,action)=>{
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.image = action.payload.image;
            state.description = action.payload.description;
            state.themeColor = action.payload.themeColor;
        }
        // update: (state, action) => {
        //     state.name = action.payload.name;
        //     state.age = action.payload.age;
        //     state.image = action.payload.image;
        //     state.description = action.payload.description;
        //     state.themeColor = action.payload.themeColor;
        // },
    },
});

export const { updateStart ,updateError,updateSuccess} = useSlice.actions;
export default useSlice.reducer;
