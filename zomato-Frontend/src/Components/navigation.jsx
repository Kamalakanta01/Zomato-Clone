import { Box, Flex, Image, Text, Divider } from '@chakra-ui/react';
import { useState } from 'react';

const TabNavigation = ({ nav }) => {
  const [state, setState] = useState(1);
  return (
    <Box as="section" role="tablist" ml={20}>
      <Flex>
        <Flex onClick={() => { setState(1); nav(true) }} cursor="pointer">
          {/* Adjust the objectFit property to "contain"  */}
          <Box style={{ borderRadius: "50%", overflow: "hidden", backgroundColor: state===1?"#fceec0":"#f8f8f8", width: "90%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image h="50%" src={state === 1 ? "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" : "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"} objectFit="cover" />
          </Box>
          <Text mt={"7%"} ml={"5%"} fontSize={20} color={state === 1 ? "#ef5060" : "#6e6e6e"}>Delivery</Text>
          <Divider color="#ef5060" zIndex={2} />
        </Flex>
        <Flex onClick={() => { setState(2); nav(false) }} cursor="pointer">
          {/* Adjust the objectFit property to "contain" */}
          <Box style={{ borderRadius: "50%", overflow: "hidden", backgroundColor: state===2?"#e5f3f3":"#f8f8f8", width: "27%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image h="60%" src={state === 2 ? "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" : "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"} objectFit="contain" />
          </Box>
          <Text mt={"7%"} ml={"5%"} fontSize={20} color={state === 2 ? "#ef5060" : "#6e6e6e"}>Dining out</Text>
        </Flex>
        <Flex onClick={() => { setState(3); nav(false) }} cursor="pointer">
          {/* Adjust the objectFit property to "contain" */}
          <Box style={{ borderRadius: "50%", overflow: "hidden", backgroundColor: state===3?"#edf4ff":"#f8f8f8", width: "30%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image h="60%" src={state === 3 ? "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" : "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"} objectFit="contain" />
          </Box>
          <Text mt={"7%"} ml={"5%"} fontSize={20} color={state === 3 ? "#ef5060" : "#6e6e6e"}>Nightlife</Text>
        </Flex>
      </Flex>
      <Divider mt={"2%"} bg="#f1f1f1" />
    </Box>
  );
};

export default TabNavigation;