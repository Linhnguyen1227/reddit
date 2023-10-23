import axios from 'axios'
import { updateError,updateStart,updateSuccess } from './useSlide';

export const updateUser = async (user,dispatch)=> {
    dispatch(updateStart())
    try {
        const res = await axios.post("/v1/updates",user);
        console.log(res.data);
        dispatch(updateSuccess(res.data));
    } catch (error) {
        dispatch(updateError())
    }

}

