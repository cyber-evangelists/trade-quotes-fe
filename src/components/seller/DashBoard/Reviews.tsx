import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Switch, Flex, Text } from "@chakra-ui/react";

const total = 3.8;
const stars = [1,2,3,4,5]


const Reviews = () => {
    console.log(Math.ceil(total))

    return(<Box  w='100%' p='20px' minH={'100px'} border={'1px solid #E7E9ED'} rounded={'12px'} >
        <Flex w='100%' justify={'space-between'} >
        <Text mb={'10px'} fontSize={'22px'} fontWeight={'semibold'}  >Reviews</Text>
        <Button  bg={'#E7E9ED'} rounded={'6px'} p='5px 15px' fontWeight={'semibold'} > Sync Review</Button>
        </Flex>
        <Text mb={'10px'}  fontWeight={'semibold'}  >Stay on top Trades to get more instant lead</Text>
        <Flex align={'center'} fontWeight={'semibold '} >
        Clients rate Skilled 
        <Flex align={'center'} mx='5px'> {stars.map((star,idx) => {
            if(star <= Math.ceil(total)){
            return(<StarIcon key={idx} />)}
            else 
            return <></>
        })} </Flex>
        {total}/5
        <Text fontWeight={'semibold '} color={'rgba(16, 37, 71, 0.5 )'} ml={'5px'} > based on 36,051 client reviews</Text>
        </Flex>
    </Box>)

}

export default Reviews;