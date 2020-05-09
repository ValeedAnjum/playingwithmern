import React from 'react'
import { connect } from 'react-redux';
import PostJob from '../forms/PostJob';
import { savePost } from '../../store/actions/PostActions';

const ModelManager = ({ ModelName , payload , ClearAllModelsAndPayloads , SavePost}) => {
    switch ( ModelName ){
        case 'OpenPostJobForNewPost':
            return <PostJob
            SavePost={SavePost}
            ClearAllModelsAndPayloads={ClearAllModelsAndPayloads} />
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
        ClearAllModelsAndPayloads:() => dispatch({type:'ClearAllModelsAndPayloads'}),
        SavePost:data => dispatch(savePost(data)) 
    }
}
export default connect( mapState , mapDispatch )(ModelManager);
