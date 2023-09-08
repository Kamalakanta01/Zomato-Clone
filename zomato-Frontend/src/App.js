import './App.css';
import Cards from './Components/card';
import {Grid,Box, Center, Text} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import TabNavigation from './Components/navigation';
import Filter from './Components/filter';
import Carousell from './Components/carousel';
import TopBrands from './Components/top-brands';
import Dining from './pages/Dining';


function App() {
  const [data,setData]=useState([])
  const [nav,setNav]=useState(true)
  useEffect(()=>{
    axios.get(`https://zomato-clone-backend-drgp.onrender.com/items`,
    {
      headers:{
        Authorization:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGU1OWNmOTM0ZDNiN2E4YWE0NGY5N2MiLCJpYXQiOjE2OTM1NjExMDV9.jcY1PeySwnE4w0YSbn8lWM_4u4mV5uQcHv6bi1Lpx6o"
      }
    })
    .then(res=>{console.log(res.data);setData(res.data);console.log(res.data)})
    .catch(err=>{console.log(err)})
  },[])

  return (
    <Box bgColor={"white"} fontFamily={"Okra, Helvetica, sans-serif"} w={"80%"} margin={"auto"}>
      <Box mt={"2%"} ml={"-6%"}>
        <TabNavigation nav={setNav}/>
      </Box>
      <Center>
      {nav?
      <Box color={"black"}>
        <Box ml={"-11%"} mt={"2%"}>
          <Filter/>
        </Box>
        <Box mt={"5%"} mb={"5%"}>
          <Carousell/>
          <TopBrands/>
        </Box>
        <Text fontSize={"2rem"} mb={5} ml={7}>Delivery Restaurants in Patna</Text>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} className="App">
            {
              data.everyitem && data.everyitem.length>0 && data.everyitem.map((ele)=>{
                return <Cards data={ele}/>
              })
            }
          </Grid>
      </Box>
      :
      <Box>
        <Dining/>
      </Box>
      }
      </Center>
    </Box>
  );
}

export default App;