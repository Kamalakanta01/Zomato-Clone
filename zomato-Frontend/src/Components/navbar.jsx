import { Search2Icon } from "@chakra-ui/icons";
import { Box,Divider,Flex,Image, Input, Icon, Select } from "@chakra-ui/react";

export default function Navbar(){
    return (
        <Flex w={"100%"} marginBottom={"10%"} color={"black"} marginTop={"3%"}>
            <Box className="logo" w={"10%"} marginRight={"10%"}>
                <Image w={"100%"} src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"/>
            </Box>
            <Box w={"50%"} boxShadow='dark-lg' p='3' rounded={"md"}>
                <Flex justifyContent={"space-between"}>
                    <Icon mt={"1%"} mr={"3%"} viewBox="0 0 20 20" w={6} h={6} color="#ff7e8b" borderRadius="full">
                        <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z" />
                    </Icon>         
                    <Select variant='flushed' placeholder='patna' />
                    <Search2Icon mt={"2%"} mr={"3%"}/>
                    <Input variant='flushed' placeholder='search for restaurant, cuisine or a dish' _placeholder={{ color: 'black' }}/>
                </Flex>
            </Box>
        </Flex>
    )
}