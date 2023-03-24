import {
  Box, Button, chakra, Flex, Input, Text,
} from '@chakra-ui/react';
import React from 'react';

import Header from 'components/common/Header';

export default function SignUp() {
  return (
    <>
      <Header />
      <chakra.section pt="16">
        <Text fontSize="4xl" textAlign="center">Fast& Easy, It only takes 2 mins<br />to create your profile</Text>
        <chakra.form maxW="468" mx="auto">
          <Text textAlign="center">Receive job leads from homeowners in your area & Receive job leads from homeowners in your area</Text>
          <Flex mt="7">
            <Box w="50%" h="1.5" bgColor="blue.400" />
            <Box w="50%" h="1.5" bgColor="blue.100" />
          </Flex>
          <Input placeholder="Work Post Code" mt="5" borderColor="blue.400" />
          <Input placeholder="What type of trade are you?" mt="3" />
          <Text fontSize="xs" mt="3">Let us know what type of work you do so we can match you up with relevant jobs</Text>
          <Text mt="3">Where can we send the job leads? *</Text>
          <Input placeholder="Phone number" />
          <Text mt="3">We also send job leads via text message *</Text>
          <Input placeholder="Phone number" />
          <Button type="button" colorScheme="orange" mt="3" w="100%">Continue</Button>
        </chakra.form>
      </chakra.section>
    </>
  );
}
