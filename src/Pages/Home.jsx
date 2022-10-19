import { Box, HStack, Image, Text, VStack, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


function Home() {
    const [data,setData] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:8080/movies`).then(res=>res.json()).then(res=>setData(res))

},[])



  return (
    <Wrap  width="90%" m={"10px auto" }>
        {
            data.map(el=><VStack p={4} key={el.id} width={"230px"}  border={"1px solid grey"}>
                <Image  src={el.poster_path}></Image>
                <Text>{el.title}</Text>
                <NavLink to={`/movie/${el.id}`}>More Details ...</NavLink>

            </VStack>)
        }

    </Wrap>
  )
}

export default Home