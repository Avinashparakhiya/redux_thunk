import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {userReducer} from '../src/redux/reducer/userReducer';


const rootReducer = combineReducers(
    {
            userList : userReducer
    })

const initialState = [];

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store