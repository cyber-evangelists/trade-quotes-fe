import {
  Image, Box, Button, Card, Center, chakra, Flex, Input, Text,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import FormInput from '../../components/signup/formInput';
import FooterEndLinks from '../../components/seller/footerEndLinks';
import { useRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from '../../constants';

const tempData = {
  email: '',
  otp: ''
}

export default function LogIn() {
  const [loginData, setloginData] = useState(tempData)
  const [isOtp, setOtp] = useState(false);
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      if (!isOtp) {
        await axios.post(`${API_URL}/graphql`, {
          query: `
      mutation MyMutation($user: CreateUserOtpInput!) {
        createUserOtp(user: $user)
      }
    `,
          variables: {
            user: {
              email: loginData?.email,
            }
          },
        }).then((res) => {
          if (res.status === 200) {
            if (res.data.data.createUserOtp) {
              window.alert("Otp Sent To your Email");
              setOtp(true)
            }
          } else {
            window.alert("An error occured");
          }
        });
      } else {
        await axios.post(`${API_URL}/graphql`, {
          query: `
      query MyQuery($user: UserInput!) {
        user(user: $user) {
          jwt
        }
      }
    `,
          variables: {
            user: {
              email: loginData?.email,
              otp: loginData?.otp
            }
          },
        }).then((res) => {
          if (res.status === 200) {
            window.alert("Redirecting To reset Page");
            setOtp(false)
            router.push(`/reset/${res.data.data.user.jwt}`)

          } else {
            window.alert("An error occured");
          }
        });
      }
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
          <Image src="/assets/images/logo.png" alt="logo" width={{ base: '120px', md: '150px' }} />
        </Link>
      </chakra.nav>
      <Center flexGrow="1" position="relative" py="16">
        <Box position="absolute" bgColor="#E7E9ED" top="50%" bottom="0" left="0" w="100%" />
        <Card mx="auto" w="538px" p="9">
          <chakra.form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}  >
            <Text my={'30px'} bg={'linear-gradient(180deg, #0D1E39 0%, #636D7C 100%)'} backgroundClip={'text'} lineHeight={'130%'} fontSize="4xl" textAlign="center">Forgot your password?</Text>
            <Text textAlign="center" fontWeight={'semibold'} >Please enter the email address associated with your Klaviyo account.</Text>


            <FormInput value={loginData?.email} handleChange={handlechange} name={'email'} title={'Email Address'} type={'email'} placeHolder={'Your Email'} required={true} />
            {isOtp && <FormInput value={loginData?.otp} handleChange={handlechange} name={'otp'} title={'O T P'} type={'text'} placeHolder={'Your OTP'} required={true} />
            }

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
