import axios from 'axios';
export const getPosts = () => async dispatch => {
    try {
        console.log('Start');
        const res = await axios.get('http://localhost:5000/api/jobs/3');
        dispatch({type:'POST_FETCH_SUCCESS',payload:res.data})
    } catch (err) {
        console.log(err);
    }
}

export const deletePost = id => async dispatch => {
    try {
        console.log(id);
    } catch (err) {
        alert.log(err);
    }
}