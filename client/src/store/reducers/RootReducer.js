import {combineReducers} from 'redux';
import { DummyReducer } from './Dummy';

export const RootReducer = combineReducers({
    Dummy:DummyReducer
})