import {
  Image,  Box, Button, Card, Center, chakra, Flex, Input, Text,
} from '@chakra-ui/react';
import Header from '../components/common/Header';
import React from 'react';
import Link from 'next/link';
import FooterEndLinks from '../components/seller/footerEndLinks';
import FormInput from '../components/signup/formInput';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const tempData = {
  email: '',
  password: ''
}



export default function LogIn() {
  const [loginData, setloginData] = useState(tempData)
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      await axios.post(`http://194.59.165.140/test/app1/graphql`, {
    query: `
    query MyQuery($user: UserInput!) {
      user(user: $user) {
        email
        jwt
        phoneNumber
        id
      }
    }
  `,
    variables: {
      user: {
        email: loginData?.email,
        password: loginData?.password,
      }
    },
  }).then((res) => {
        if (res.status === 200) {
          window.alert("login Successfull");
          let temp = res.data.data.user
          localStorage.setItem('user-login', {...temp})
          router.push('/dashboard/seller')

        } else {
          window.alert("An error occured");
        }
      });
    } catch (err) {
      window.alert(err || 'an error occured');
    }
  }


  const handlechange = (event) => {
    const { name, value } = event.target;
    setloginData({ ...loginData, [name]: value });
  };

  return (
    <Flex flexDir="column" minH="100vh">
      <chakra.nav p='20px' display={'flex'} alignItems={'center'} justifyContent={'center'} >
        
        <Link href={'/'} >
    <Image src="/assets/images/logo.png" alt="logo" width={{base: '120px', md: '150px'}} />
    </Link>
    </chakra.nav>
      <Center flexGrow="1" position="relative" py="16">
        <Box position="absolute" bgColor="orange" top="50%" bottom="0" left="0" w="100%" />
        <Card mx="auto" w="538px" p="9">
          <chakra.form  onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }} >
          <Text my={'30px'} bg={'linear-gradient(180deg, #0D1E39 0%, #636D7C 100%)'} backgroundClip={'text'} lineHeight={'110%'} fontSize="4xl" textAlign="center">Welcome Back</Text>
        
          <Text textAlign="center">Sign in to your account</Text>
          <Button w='100%' colorScheme="blue" mt="10">Continue with Facebook</Button>
          <Button w='100%' mt="3">Continue with Google</Button>
          <Box position="relative" py="5">
            <Box bgColor="gray" h="1px" position="absolute" top="50%" left="0" w="100%" />
            <Text bgColor="white" padding="2" position="absolute" left="50%" top="0" transform="translateX(-50%)">or</Text>
          </Box>
          <FormInput value={loginData?.email} handleChange={handlechange} name={'email'} title={'Email Address'} type={'email'} placeHolder={'Your Email'} required={true} />
          <FormInput forgetPassword='/reset' value={loginData?.password} handleChange={handlechange} name={'password'} title={'Password'} type={'password'} placeHolder={'Password'} required={true} />
    
     
          <Button type={'submit'} w='100%' colorScheme="orange" mt="3">Sign In</Button>
          </chakra.form>
        </Card>
       
      </Center>
      <Box bgColor="orange" w='100%' px='80px'>
      <FooterEndLinks />
      </Box>
    </Flex>
  );
}
