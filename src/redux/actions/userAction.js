import axios from 'axios'
import React from 'react'
import { GET_USERS_FAIL,GET_USERS_SUCCESS,GET_USERS_REQUEST } from '../constance/userConstance'

export const userAction =()=> async (dispatch)=> {
    try {
        dispatch({type:GET_USERS_REQUEST})
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({type:GET_USERS_SUCCESS , payload:data})
    } catch (error) {
        dispatch ({type:GET_USERS_FAIL , payload:error.data && error.response.message ? error.response.message : error.message })
    }


  }