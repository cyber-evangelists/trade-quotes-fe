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

  return (
    <Flex px={8} pt={2}>
      <Box p="4">
        <Flex>
          <Image src="/assets/images/logo.png" alt="logo" />
        </Flex>
      </Box>
      <Spacer />
      <Box py="4">
        <Flex align={"center"}  gap="4">
          <Flex
            onClick={() => {
              setShowNotif(!showNotif);
            }}
            cursor={'pointer'}
            align={"center"}
            position={"relative"}
            gap="1"
          >
            <BellIcon />
            <span>Notification</span>
            <Box bg={"#268BFF26"} color={"#268BFF"} rounded={"5px"} px={"4px"}>
              4
            </Box>
            {showNotif && (
              <Box
                rounded={"10px"}
                marginTop={"30px"}
                right={"0"}
                top={'0'}
                position={"absolute"}
                bg={"white"}
                width={"300px"}
                zIndex={10}
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
                {notifData.map((noti,idx) => {
                    return(<Flex p={'2'} key={idx} borderTop={'1px solid rgba(16, 37, 71, 0.1)'} align={'flex-start'}>
                        <Box rounded={'100%'} w={'16px'} h={'16px'} bg={noti.type === 'important' ? '#102547' : '#268BFF'} ></Box>
                        <Box marginLeft={'10px'}>
                            <Text fontSize={'16px'}  margin={'0px'}>{noti.text}</Text>
                            <Text fontSize={'14px'} color={'rgba(16, 37, 71, 0.5)'} margin={'0px'}>{dateFormateHandler(noti.date).standardDate}</Text>

                        </Box>
                    </Flex>)
                })}
              </Box>
            )}
          </Flex>

          <Stack direction="row" align={"center"}>
            <Switch colorScheme="blue" size="sm" />
            <Text>seller</Text>
          </Stack>
          <ButtonGroup>
            <Button bg="#F7941E" size="sm" rounded="full">
              Account
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
