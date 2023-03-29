import {
  Box, Button, Card, Center, chakra, Flex, Input, Text,
} from '@chakra-ui/react';
import Header from 'components/common/Header';
import React from 'react';

export default function LogIn() {
  return (
    <Flex flexDir="column" minH="100vh">
      <Header />
      <Center flexGrow="1" position="relative" py="16">
        <Box position="absolute" bgColor="orange" top="50%" bottom="0" left="0" w="100%" />
        <Card mx="auto" w="538px" p="9">
          <Text textAlign="center" fontSize="4xl">Welcome Back</Text>
          <Text textAlign="center">Sign in to your account</Text>
          <Button colorScheme="blue" mt="10">Continue with Facebook</Button>
          <Button mt="3">Continue with Google</Button>
          <Box position="relative" py="5">
            <Box bgColor="gray" h="1px" position="absolute" top="50%" left="0" w="100%" />
            <Text bgColor="white" padding="2" position="absolute" left="50%" top="0" transform="translateX(-50%)">or</Text>
          </Box>
          <Text mt="3">Email Address</Text>
          <Input placeholder="Your Email" />
          <Text mt="3">Password</Text>
          <Input placeholder="Password" type="password" />
          <Button colorScheme="orange" mt="3">Sign In</Button>
        </Card>
      </Center>
    </Flex>
  );
}
