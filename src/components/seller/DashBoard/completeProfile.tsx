import { Box, Button, Switch, Flex, Text } from "@chakra-ui/react";

const Data = [{
    title: 'Upload your Public Liability Insurance',
    reward: '1 credit lead reward',
    task: ''
},
{
    title: 'Verify your phone number',
    reward: '5 credit lead reward',
    task: ''
}]


const Completeprofile = () => {

    return(
    <Box my={'10px'} w='100%' p='10px 20px' minH={'100px'} border={'1px solid #E7E9ED'} rounded={'12px'}  >
        <Text mb={'10px'} fontSize={'22px'} fontWeight={'semibold'}  >🏆 Complete your profile and get reward</Text>
        <Text mb={'10px'}  fontWeight={'semibold'}  >Completing your profile is a great way to improve your chances of winning work!</Text>
        {Data.map((task,idx) => {
            return(<Flex rounded={'12px'} my={'6px'} bg='#EDFFE3' w='100%' key={idx} align={'center'} justify={'space-between'} p='20px' >
                <Box>
                    <Text fontWeight={'semibold'} mb={'10px'}  >{task.title}</Text>
                    <Text color={'#268BFF'} mb={'10px'}  >{task.reward}</Text>
                </Box>
                <Button fontSize={'14px'} bg='#268BFF' color={'white'} rounded='6px' >Complete Task</Button>
            </Flex>)
        })}
    </Box>)

}

export default Completeprofile;