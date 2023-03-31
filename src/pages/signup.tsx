import {
  ButtonGroup,  Box, Button,Image, chakra, Flex, Input, Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Header from '../components/common/Header';
import FooterEndLinks from '../components/seller/footerEndLinks';
import SignupForm from '../components/signup/signupForm';

export default function SignUp() {

  const router = useRouter();


  return (
    <>
      <chakra.nav p='20px' display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
        
          <Link href={'/'} >
      <Image src="/assets/images/logo.png" alt="logo" width={{base: '120px', md: '150px'}} />
      </Link>
      <Flex align={'center'}>
      <Text onClick={() => {
        router.push('/login')
      }} mx={'20px'} cursor={'pointer'} fontWeight="semibold">Log In</Text>
          <ButtonGroup>
            <Button bg="#F7941E" size="sm" rounded="full">Sign Up</Button>
          </ButtonGroup>
          </Flex>
      </chakra.nav>
      <chakra.section pt="16" pb='200px'>
        <Text my={'30px'} bg={'linear-gradient(180deg, #0D1E39 0%, #636D7C 100%)'} backgroundClip={'text'} lineHeight={'110%'} fontSize="4xl" textAlign="center">Fast & Easy, It only takes 2 mins<br />to create your profile</Text>
        <SignupForm />
      </chakra.section>
      <Box w='100%' px='80px'>
      <FooterEndLinks />
      </Box>
    </>
  );
}
