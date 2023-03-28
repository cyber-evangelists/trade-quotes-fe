import { Box, Button, Switch, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const TradeCategories = () => {
    const [leadType,setLeadType] = useState(['Roof Cleaning','Carpet Cleaning'])

    return(<Box  w='100%' p='20px' minH={'100px'} border={'1px solid #E7E9ED'} rounded={'12px'} >
        <Text mb={'10px'} fontSize={'22px'} fontWeight={'semibold'}  >Trade Categories</Text>
        <Text mb={'10px'}  fontWeight={'semibold'}  >You'll receive job leads for the following</Text>
        <Flex wrap={'wrap'} gap={'10px'} w='100%' mt={'10px'} >
            <Box cursor={'pointer'} border={'1px solid #268BFF'} color={'#268BFF'} rounded={'6px'} p='5px 15px'>
            + Add Trades
            </Box>
            {leadType.map((item,idx) => {
                return( <Box key={idx} bg={'#E7E9ED'} rounded={'6px'} p='5px 15px'>
                {item}
                </Box>)
            })}
        </Flex>
    </Box>)

}

export default TradeCategories;