import {combineReducers} from 'redux';
import { PostReducer } from './PostReducer';
import AuthReducer from './AuthReducer';
import ModelManager from '../../component/Models/ModelManager';

export const RootReducer = combineReducers({
    Post:PostReducer,
    auth:AuthReducer,
    Model:ModelManager
})