import React from 'react'
import { Switch } from 'react-router-dom';
import PostJob from '../forms/PostJob';

const ModelManager = ({ ModelName , payload }) => {
    switch ( ModelName ){
        case 'OpenPostJobForNewPost':
            return <PostJob />
        default:
            return null;
    }
}

export default ModelManager;
