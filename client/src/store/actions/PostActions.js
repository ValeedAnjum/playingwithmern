import axios from 'axios';
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/jobs/3');
        dispatch({type:'POST_FETCH_SUCCESS',payload:res.data})
    } catch (err) {
        console.log(err);
    }
}

export const savePost = data => async dispatch => {
    console.log(data);
}

export const deletePost = id => async dispatch => {
    try {
        console.log(id);
        const res = await axios.delete(`/api/jobs/delete/${id}`);
        console.log(res);
    } catch (err) {
        console.log(err.message);
    }
}