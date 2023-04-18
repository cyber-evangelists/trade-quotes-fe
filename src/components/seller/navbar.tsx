import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Input,
  InputGroup,
  Text,
  InputLeftAddon,
  InputRightAddon,
  Button,
  ButtonGroup,
  Switch,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, BellIcon } from "@chakra-ui/icons";
import { dateFormateHandler } from "../../../utils/dateformat";
import { SellerSideBarOptions } from "../../../mocks/sellerDashboardOptions";
import { useRouter } from "next/router";
import NextLink from 'next/link'

const notifData = [
  {
    text: "Your account needs verifying",
    date: Date.now(),
    type: "important",
  },
  {
    text: "Your account needs verifying",
    date: Date.now(),
    type: "normal",
  },
  {
    text: "Your account needs verifying",
    date: Date.now(),
    type: "normal",
  },
];

const Navbar = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [showresNav, setShowresNav] = useState(false);
  const router = useRouter();


  return (
    <Flex px={{ base: '10px', md: 8 }} align={'center'} pt={2}>
      <Box >
        <Flex>
          <Image src="/assets/images/logo.png" alt="logo" width={{ base: '120px', md: '150px' }} />
        </Flex>
      </Box>
      <Spacer />
      <Box py="4">
        <Flex align={"center"} gap="4">
          <Flex

            cursor={'pointer'}
            align={"center"}
            position={"relative"}
            fontSize={{ base: '14px', md: '16px  ' }}
            gap="1"
          >
            <BellIcon />
            <span onClick={() => {
              setShowNotif(!showNotif);
            }}  >Notification</span>
            <Box bg={"#268BFF26"} color={"#268BFF"} rounded={"5px"} px={"4px"}>
              4
            </Box>
            {showNotif && (
              <Box
                rounded={"10px"}
                marginTop={{ base: '60px', md: "30px" }}
                right={"0"}
                left={{ base: '50%', md: '0' }}
                transform={{ base: 'translateX(-50%)', md: '' }}
                top={'0'}
                position={{ base: "fixed", md: 'absolute' }}
                bg={"white"}
                width={{ base: "90vw", md: '300px' }}
                zIndex={10}
                border={'1px solid #E7E9ED'}
                boxShadow={"0px 14px 24px rgba(13, 30, 57, 0.1)"}
              >
                <Flex
                  height={"40px"}
                  width={"100%"}
                  bg="#E7E9ED40"
                  roundedTop={"10px"}
                  align={"center"}
                  p={"4"}
                >
                  <Text fontWeight={"500"}>Recent Notification</Text>
                  <Spacer /> <Text>Read all</Text>
                </Flex>
                {notifData.map((noti, idx) => {
                  return (<Flex p={'2'} key={idx} borderTop={'1px solid rgba(16, 37, 71, 0.1)'} align={'flex-start'}>
                    <Box rounded={'100%'} w={'16px'} h={'16px'} bg={noti.type === 'important' ? '#102547' : '#268BFF'} ></Box>
                    <Box marginLeft={'10px'}>
                      <Text fontSize={'16px'} margin={'0px'}>{noti.text}</Text>
                      <Text fontSize={'14px'} color={'rgba(16, 37, 71, 0.5)'} margin={'0px'}>{dateFormateHandler(noti.date).standardDate}</Text>

                    </Box>
                  </Flex>)
                })}
              </Box>
            )}
          </Flex>

          <Stack display={{ base: 'none', md: 'flex' }} width='fit-content' direction="row" align={"center"}>
            <Switch colorScheme="blue" size="sm" />
            <Text>seller</Text>
          </Stack>
          <ButtonGroup display={{ base: 'none', md: 'block' }}>
            <NextLink href="/signup">
              <Button display={{ base: 'none', md: 'block' }} bg="#F7941E" size="sm" rounded="full">
                Account
              </Button>
            </NextLink>


          </ButtonGroup>
          <Box position='relative' display={{ base: 'block', md: 'none' }} >
            <Image onClick={(e) => {
              setShowresNav(!showresNav)
            }} src="/assets/icons/hamburgerMenu.png" alt='hamburger' objectFit={'contain'} />
            {showresNav && <Box onClick={(e) => {
              e.stopPropagation();
            }} border={'1px solid #E7E9ED'} top={0} right={0} w={'90vw'} mt={'45px'} boxShadow={"0px 14px 24px rgba(13, 30, 57, 0.1)"} bg='white' zIndex={'11'} position='absolute' rounded={'12px'} p='10px' >
              {SellerSideBarOptions.map((item, idx) => {
                return (
                  <Flex onClick={() => {
                    router.push(item.link)
                  }} filter={router.pathname === item.link ? 'invert(42%) sepia(76%) saturate(2763%) hue-rotate(198deg) brightness(103%) contrast(102%)' : ''} rounded={'10px'} cursor='pointer' key={idx} p={'10px 20px'} gap={'10px'} bg={router.pathname === item.link ? 'rgba(38, 139, 255, 0.1)' : ''} >
                    <Image src={item.icon} alt={'navIcon'} objectFit='contain' />
                    <Text fontWeight={'semibold'} color={router.pathname === item.link ? '#268BFF' : '#8792A3'}  >{item.title}</Text>

                  </Flex>)
              })}
              <Stack my={'10px'} width='fit-content' direction="row" align={"center"}>
                <Switch colorScheme="blue" size="sm" />
                <Text fontWeight={'semibold'} >seller</Text>
              </Stack>
              <NextLink href="/signup">
                <Button w={'100%'} bg="#F7941E" size="sm" rounded="full">
                  Account
                </Button>
              </NextLink>

            </Box>}
          </Box>





        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
