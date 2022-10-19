import {Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Flex align={"center"} pl="50px" color={"white"} width={"100%"} height="50px" bg={"teal"} gap="30px">
        <Link to={"/"}>Home</Link>
        <Link to={"/booking"}>Bookings</Link>
        <Link to={"/login"}>Login</Link>
        
    </Flex>
  )
}

export default Navbar