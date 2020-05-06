const intState = {
    post:false
}
export const PostReducer = ( state = intState , action) => {
    switch (action.type) {
        case 'POST_FETCH_SUCCESS':
            return {...state,post:action.payload};
        default:
            return state;
    }
}