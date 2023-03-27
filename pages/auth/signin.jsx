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

const Signin = () => {
  return (
    <Center h='calc(80vh)'>
        <Box border={"1px"} p={5} borderColor="gray.200" mt={20}>
        <VStack>
              <Text fontSize={"4xl"} fontWeight="semibold">Welcome back</Text>
              <Text fontSize={"sm"} style={{ marginTop: "-5px",marginBottom:"24px" }}>Sign in to your account</Text>
              <Button leftIcon={<BsFacebook />} colorScheme='blue' variant='solid' width={350} fontWeight={"normal"}>
                Continue with Facebook
              </Button>
              <Button leftIcon={<AiFillGoogleCircle size={24} />} variant='solid' width={350} fontWeight={"normal"}>
                Continue with Google
              </Button>
              <HStack style={{marginTop:"20px"}}>
                  <div style={{backgroundColor:"lightgray",width:"150px", height:"1px"}}></div>
                  <div>or</div>
                  <div style={{backgroundColor:"lightgray",width:"150px", height:"1px"}}></div>
              </HStack>
              <FormControl mt={2}>
                <Text fontSize={14}>Email address</Text>
                <Input type='email' placeholder='Email address'/>
              </FormControl>
              <FormControl mt={2}>
                <HStack justify={"space-between"}>
                  <Text fontSize={14}>Password</Text>
                  <Text fontSize={14}>Forgot Password?</Text>
                </HStack>
                <Input type='password' placeholder='Password'/>
              </FormControl>
              <Button backgroundColor="#F7941E" width={350}>Sign in</Button>
        </VStack>
        </Box>
    </Center>
  )
}

export default Signin