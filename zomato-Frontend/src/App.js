import './App.css';
import Cards from './Components/card';
import {Grid,Box, Center} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Components/navbar';

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(`https://run.mocky.io/v3/41cb1699-4257-4784-aae7-070916272db3`)
    .then(res=>{console.log(res.data);setData(res.data)})
    .catch(err=>{console.log(err)})
  },[])
  return (
    <Box bgColor={"white"} fontFamily={"Okra, Helvetica, sans-serif"}>
    <Center>
    <Box color={"black"} w={"80%"}>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} className="App">
          {
            data.map((ele)=>{
              return <Cards data={ele}/>
            })
          }
        </Grid>
    </Box>
    </Center>
    </Box>
  );
}

export default App;
