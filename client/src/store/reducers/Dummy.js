const intState = {
    dummy:true
}
export const DummyReducer = ( state = intState , action) => {
    switch (action.type) {
        case 'AK':
            return state;
        default:
            return state;
    }
}