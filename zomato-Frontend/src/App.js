import './App.css';
import Cards from './Components/card';
import {Grid,Box, Center, Text} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import TabNavigation from './Components/navigation';
import Filter from './Components/filter';
import Carousell from './Components/carousel';
import TopBrands from './Components/top-brands';


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
      <Box mt={"2%"} ml={"-6%"}>
        <TabNavigation nav={setNav}/>
      </Box>
      <Box ml={"-11%"} mt={"2%"}>
        <Filter/>
      </Box>
      <Center>
        {nav?
      <Box color={"black"}>
        <Box mt={"5%"} mb={"5%"}>
          <Carousell/>
          <TopBrands/>
        </Box>
        <Text fontSize={"2rem"} mb={5} ml={7}>Delivery Restaurants in Patna</Text>
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