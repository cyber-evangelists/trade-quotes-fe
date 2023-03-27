import { EmailIcon } from '@chakra-ui/icons'
import {
    Center, AbsoluteCenter, Box, VStack,
    Text, Button, Divider, HStack,
    FormControl,
    Input
} from '@chakra-ui/react'
import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle } from 'react-icons/ai';

const ForgotPassword = () => {
  return (
    <Center h='calc(80vh)'>
        <Box border={"1px"} p={5} borderColor="gray.200">
        <VStack>
            <Text fontSize={"3xl"} fontWeight="medium" color={"gray.600"}>Forgot your password</Text>
            <Text fontSize={"sm"} fontWeight="semibold" color={"gray.600"} w={270} align="center" style={{ marginTop: "0px", marginBottom: "24px" }}>
                      Please enter the email address associated with your Klaviyo account.
            </Text>
              
            <FormControl mt={2}>
                <Text fontSize={14}>Your Email</Text>
                <Input type='email' placeholder='Email address'/>
            </FormControl>
            <Button backgroundColor="#F7941E" fontSize={"sm"} width={300}>Send a Password Reset Email</Button>
                  
            <Text fontSize={"sm"} fontWeight="semibold" style={{marginTop:"20px"}}>
                Did it just come back to you? Login in. 
            </Text>     
        </VStack>
        </Box>
    </Center>
  )
}

export default ForgotPassword