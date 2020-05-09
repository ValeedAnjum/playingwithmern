const intState = {
    ModelName:null,
    payload:null
}

export const ModelReducer = ( state = intState , action ) => {
    switch (action.type) {
        case 'OpenPostJobForNewPost':
            return { ...state , ModelName:'OpenPostJobForNewPost',payload:null}
        case 'ClearAllModelsAndPayloads':
            return { ...state , ModelName:null , payload:null }
        default:
            return state;
    }
}