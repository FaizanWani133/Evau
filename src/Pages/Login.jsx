import {Button, Input, HStack } from '@chakra-ui/react'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getError, getLoading, getSuccess } from '../Store/Auth/Actions';


function Login() {
    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isAuth} = useSelector(state=>state)
   


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
        }).then(res=>res.json()).then(res=>{if(res.token){
            dispatch(getSuccess());
        }else{
            dispatch(getError());
        }
        }).catch(err=>console.log(err))

    }
    if(isAuth){
       return <Navigate to="/"/>
    }

    
    
  return (
    <HStack mt={"30px"} width="30%" margin="0 auto" spacing={"20px"} p="4" border={"1px solid grey"} borderRadius="10px">

        <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <Input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <Button onClick={handleLogin}>Login</Button>
   
      </HStack>
  )
}

export default Login