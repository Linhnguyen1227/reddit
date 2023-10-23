import { createSlice } from "@reduxjs/toolkit";

const usePost = createSlice({
    name: "post",
    initialState: {
        posts:[
            {
                title:'',
                description:'',
                tags:0
            }
        ],
    },        
    reducers:{
        createPost:(state,action)=>{
            state.posts = [...state.posts, action.payload];
        }
    }
})

export const { createPost } = usePost.actions;
export default usePost.reducer;