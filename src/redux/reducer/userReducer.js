import React from 'react'
import { GET_USERS_FAIL,GET_USERS_REQUEST,GET_USERS_SUCCESS } from '../constance/userConstance'

export const userReducer = (state={user:[]},action) => {
switch(action.type)
{   

    case GET_USERS_REQUEST:
        return{loading:true,users:[]}
    case GET_USERS_SUCCESS:
        return{loading:false,user:action.payload};

        case GET_USERS_FAIL:
            return{loading:false,user:action.payload};
            
            default : 
            return state;
}
};

export default userReducer