import React from 'react'
import {
    Flex, Spacer, Box, Image,
    Input, InputGroup, Text, InputLeftAddon, InputRightAddon,
    Button,
    ButtonGroup
} from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Flex px={8} pt={2} >
        <Box p='4'>
             <Flex> 
                <Image src='/images/logo.png' alt="logo"/>
                <Image ml={8} src='/images/expert.png' alt="expert" />
            </Flex>
        </Box>
        <Spacer />
        <Box py='4'>
            <Flex align={"center"} gap="4">
                <InputGroup size='sm'  rounded="full">
                  <InputLeftAddon
                      borderTopLeftRadius={20}
                      borderBottomLeftRadius={20}
                      bg={"none"}
                      pointerEvents='none'
                      children={<SearchIcon color='' />}
                  />
                  <Input placeholder='search...' borderLeftColor="white"/>
                  <InputRightAddon
                    borderTopRightRadius={20}
                    borderBottomRightRadius={20}
                    bg={"none"}
                    pointerEvents='none'
                      children={
                          <Flex align="center">
                              <Text size="xs">Post Code</Text>
                              <ChevronDownIcon />
                          </Flex>} />
                </InputGroup>
                <Text fontWeight="semibold">Login</Text>
                <ButtonGroup>
                    <Button bg="#F7941E" size="sm" rounded="full">Sign Up as Trader</Button>
                </ButtonGroup>
                
            </Flex>
        </Box>
    </Flex>
  )
}

export default Header