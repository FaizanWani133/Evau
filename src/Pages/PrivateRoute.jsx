import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const {loading,error,isAuth} = useSelector(state=>state)
    const navigate = useNavigate();

    if(!isAuth){
       return <Navigate to="/login"/>
       
    }    
  return (
    children
  )
}

export default PrivateRoute