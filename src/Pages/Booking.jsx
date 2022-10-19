
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

function Booking() {
    const [data,setData] = useState([]);     

    function handleDelete(id){
        fetch(`http://localhost:8080/moviesBooked/${id}`,{
            method:"DELETE",
            headers:{"Content-Type": "application/json"}
        })
        .then((res) => res.json())
        .then(() => getData())
        .catch((err) => console.log(err));

    }
    function getData (){
      fetch(`http://localhost:8080/moviesBooked`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));

    }
  
  useEffect(() => {
    getData()
   
  }, []);
  return (
    <TableContainer width={"60%"} margin="0 auto">
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>BOOKED MOVIES</TableCaption>
    <Thead>
      <Tr>
        <Th>Movie ID</Th>
        <Th>Title</Th>
        <Th >Remove</Th>
      </Tr>
    </Thead>
    <Tbody>
        {data.map(el=><Tr>
        <Td>{el.movie_id}</Td>
        <Td>{el.title}</Td>
        <Td ><Button onClick={()=>handleDelete(el.id)} >Cancel Booking</Button></Td>
      </Tr>)}
      
      
    </Tbody>
    
  </Table>
</TableContainer>
  );
}

export default Booking;
