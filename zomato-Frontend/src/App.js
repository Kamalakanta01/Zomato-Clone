import './App.css';
import Cards from './Components/card';
import {Grid,Box, Center, Text} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import TabNavigation from './Components/navigation';
import Filter from './Components/filter';
import Carousell from './Components/carousel';


function App() {
  const [data,setData]=useState([])
  const [nav,setNav]=useState(true)
  useEffect(()=>{
    axios.get(`https://run.mocky.io/v3/41cb1699-4257-4784-aae7-070916272db3`)
    .then(res=>{console.log(res.data);setData(res.data)})
    .catch(err=>{console.log(err)})
  },[])
  return (
    <Box bgColor={"white"} fontFamily={"Okra, Helvetica, sans-serif"} w={"80%"} margin={"auto"}>
      <TabNavigation nav={setNav}/>
      <Filter/>
      <Center>
        {nav?
      <Box color={"black"}>
        <Carousell/>
        <Text fontSize={"2rem"} mb={5}>Delivery Restaurants in Patna</Text>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} className="App">
            {
              data.map((ele)=>{
                return <Cards data={ele}/>
              })
            }
          </Grid>
      </Box>
      :
      <Box>

      </Box>
      }
      </Center>
    </Box>
  );
}

export default App;