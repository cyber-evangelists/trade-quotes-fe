import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../../components/seller/footer';
import Navbar from '../../../components/seller/navbar';
import SideBar from '../../../components/seller/sideBar';

export default function Leads() {
  return (
    <Box  w='100%'  min-height={'100vh'} color='black'>
      <Navbar />
      <Flex w='100%' height={'100%'} >
        <SideBar />

      </Flex>
      <Footer />
    </Box>
       
  );
}
