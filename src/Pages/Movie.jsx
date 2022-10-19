import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Button,
  Input,
 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Movie() {
 
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [seats, setSeats] = useState();
  const [name, setName] = useState();
  const [booked, setBooked] = useState([]);
  const [details, setDetails] = useState({});
  const [flag,setFlag] = useState(false);

  function addBooking() {
    setFlag(!flag)
    const movie = {
      ...data,
      movie_id: data.id,

      seat: seats,
      name,
    };
    const body = JSON.stringify(movie);
    fetch(`http://localhost:8080/moviesBooked`, {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  function getDetails(id){
    
    fetch(`http://localhost:8080/moviesBooked/${id}`)
      .then((res) => res.json())
      .then((res) => setDetails(res))
      .catch((err) => console.log(err));


  }
  

  useEffect(() => {
    fetch(`http://localhost:8080/movies/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:8080/moviesBooked`)
      .then((res) => res.json())
      .then((res) => setBooked(res))
      .catch((err) => console.log(err));
  },[flag]);

  return (
    <Flex gap={"20px"}>
      
      <Box>
        <Image width={"400px"} src={data.poster_path}></Image>
      </Box>
      <VStack align={"start"}>
        <Text>{data.title}</Text>
        <Text>Language: {data.original_language}</Text>
        <Text>{data.release_date}</Text>
        <Text>Popularity : {data.popularity}</Text>
        <Text>Rating : {data.vote_average}</Text>
        <Text>Reviews : {data.vote_count}</Text>
        <Text textAlign={"left"}>{data.overview}</Text>
        <HStack>
          {!booked.find((el) => el.movie_id === data.id) ? (
            <>
              <Input
                width={"70px"}
                type={"text"}
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              ></Input>
              <Input
                width={"200px"}
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></Input>
              <Button onClick={addBooking}>BOOK TICKETS</Button>
            </>
          ) : (
            <Popover>
  <PopoverTrigger>
    <Button onClick={()=>getDetails(data.id)} >Show Booking Details</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Booking Details</PopoverHeader>
    <PopoverBody><Text>Movie id : {details.movie_id}</Text>
    <Text>Seat No : {details.seat}</Text>
    <Text>Name : {details.name}</Text></PopoverBody>
  </PopoverContent>
</Popover>
          )}
        </HStack>
      </VStack>
    </Flex>
  );
}

export default Movie;
