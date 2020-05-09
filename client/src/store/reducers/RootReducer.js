import {combineReducers} from 'redux';
import { PostReducer } from './PostReducer';
import AuthReducer from './AuthReducer';
import { ModelReducer } from './ModelReducer';

export const RootReducer = combineReducers({
    Post:PostReducer,
    auth:AuthReducer,
    Model:ModelReducer
})