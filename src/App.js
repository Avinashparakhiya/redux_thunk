import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import {userAction} from '../src/redux/actions/userAction'
import  {User}  from './components/User';


function App() {

  const dispatch=useDispatch()
  const userList=useSelector(state => state.userList)
  console.log("userlist",userList);
  const {loading , user , error} = userList 
   
  useEffect(()=>
  {
    dispatch(userAction())
  },[dispatch])


  return (
    <div className="App">
    <h1>Welcome Hello World</h1>
    {loading ? <h2>loading...</h2> : error? <h2>{error}</h2> : <User user={user}/>}
    </div>
  );
}

export default App;
