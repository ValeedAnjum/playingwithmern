import axios from 'axios';
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/jobs/50');
        dispatch({type:'POST_FETCH_SUCCESS',payload:res.data})
    } catch (err) {
        console.log(err);
    }
}

export const savePost = ({ title , pricefrom , priceto , skills , description }) => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ title , pricefrom , priceto , skills , description });
    try {
        const res = await axios.post('/api/jobs' , body , config);
        console.log(res);
    } catch (err) {
        console.log(err.response.statusText);
    }
}

export const deletePost = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/jobs/delete/${id}`);
    } catch (err) {
        console.log(err.message);
    }
}