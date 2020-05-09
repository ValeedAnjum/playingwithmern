import React from 'react'
import { connect } from 'react-redux';
import PostJob from '../forms/PostJob';

const ModelManager = ({ ModelName , payload , ClearAllModelsAndPayloads }) => {
    switch ( ModelName ){
        case 'OpenPostJobForNewPost':
            return <PostJob ClearAllModelsAndPayloads={ClearAllModelsAndPayloads} />
        case 'ClearAllModelsAndPayloads':
            return null;
        default:
            return null;
    }
}

const mapState = state => {
    return {
        ModelName:state.Model.ModelName,
        payload:state.Model.payload
    }
}
const mapDispatch = dispatch => {
    return {
        ClearAllModelsAndPayloads:() => dispatch({type:'ClearAllModelsAndPayloads'})
    }
}
export default connect( mapState , mapDispatch )(ModelManager);
