import {Button, Box, Input } from '@chakra-ui/react'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getError, getLoading, getSuccess } from '../Store/Auth/Actions';


function Login() {
    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {loading,error,isAuth} = useSelector(state=>state)
    const navigate = useNavigate();


    function handleLogin(){
        dispatch(getLoading());
        const data = {
            email,
            password
        }
        const body = JSON.stringify(data);
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body,
            headers:{"Content-Type": "application/json"}
        }).then(res=>res.json()).then(res=>{dispatch(getSuccess())
        navigate("/")}).catch(err=>dispatch(getError()))

    }
    if(isAuth){
        <Navigate to="/"/>
    }

    
    
  return (
    <Box width="30%">

        <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <Input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <Button onClick={handleLogin}>Login</Button>
   
      </Box>
  )
}

export default Login