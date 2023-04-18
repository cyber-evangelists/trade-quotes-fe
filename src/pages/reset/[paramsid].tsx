import {
    Image,  Box, Button, Card, Center, chakra, Flex, Input, Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import Link from 'next/link';
  import { useState } from 'react';
import FormInput from '../../components/signup/formInput';
import FooterEndLinks from '../../components/seller/footerEndLinks';
import { useRouter } from 'next/router';
import axios from 'axios';
  
  
  const tempData = {
    password: '',
    confirmPassword: ''
  }
  
  
  
  export default function LogIn() {
    const [loginData, setloginData] = useState(tempData)
    const router = useRouter()
    const id = router.query.paramsid;
    const headers = {
        Authorization: `Bearer ${id}`,
      };
    
    const handleSubmit = async () => {
      try {
        if(loginData?.password !== loginData?.confirmPassword){
            window.alert("passwords do not match!")
            return null;
        }
        await axios.post(`http://194.59.165.140/test/app1/graphql`, {
      query: `
      mutation MyMutation($user: UpdateUserInput!) {
        updateUser(user: $user){
            email
          }
      }
    `,
      variables: {
        user: {
          password: loginData?.password,
        }
      },
    },{headers}).then((res) => {
          if (res.status === 200) {
            if(res.data.data.updateUser.email){
            window.alert("Password Reset Successfull");
            router.push('/login')
        }else{
            window.alert("Password Reset Failed");
        }
           
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
          <Box position="absolute" bgColor="#E7E9ED" top="50%" bottom="0" left="0" w="100%" />
          <Card mx="auto" w="538px" p="9">
            <chakra.form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}  >
            <Text my={'30px'} bg={'linear-gradient(180deg, #0D1E39 0%, #636D7C 100%)'} backgroundClip={'text'} lineHeight={'130%'} fontSize="4xl" textAlign="center">Reset password</Text>
        <Text textAlign="center" fontWeight={'semibold'} >Please enter the your new password.</Text>
            
           
            <FormInput value={loginData?.password} handleChange={handlechange} name={'password'} title={'Password'} type={'password'} placeHolder={'password'} required={true} />
            <FormInput value={loginData?.confirmPassword} handleChange={handlechange} name={'confirmPassword'} title={'Confirm Password'} type={'password'} placeHolder={'password'} required={true} />

       
            <Button type={'submit'} w='100%' colorScheme="orange" mt="3">Send a Password Reset Email</Button>
            <Text textAlign="center" mt={'20px'} fontWeight={'semibold'} >Did it just come back to you? <Link href={'/login'}>Log in.</Link></Text>
            </chakra.form>
          </Card>
         
        </Center>
        <Box bgColor="#E7E9ED" w='100%' px='80px'>
        <FooterEndLinks />
        </Box>
      </Flex>
    );
  }
  