import { Center, Text,Flex, VStack,Input, InputGroup,InputLeftAddon, Box, HStack,  FormControl,
  FormLabel,
  FormErrorMessage,
    FormHelperText,
     Wrap, WrapItem,
Button} from '@chakra-ui/react'
import { Progress } from '@chakra-ui/progress'
import React from 'react'
import { SearchIcon } from "@chakra-ui/icons";
import { GoLocation } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";


const SignupSigninForget = () => {
    return (
        <>
            
        <Center>
            <VStack gap={0} mt={10}>
                <Text fontSize={28}>Fast & Easy, It only takes 2 mins</Text>
                <Text fontSize={28} color="gray" style={{ marginTop: -5 }}>to create your profile</Text>
                <Text width={350} fontSize={12} fontWeight={"semibold"} textAlign="center" style={{marginTop:20}}>Receive job leads from homeowners in your area & Receive job leads from homeowners in your area</Text>
            </VStack>
        </Center>
        <div style={{width:"350px", marginLeft:"auto", marginRight:"auto",marginTop:"20px"}}><Progress size={"sm"} value={50}/>
        </div>
        <Center mt={6} mb={100}>
            <VStack>
                <InputGroup size='sm' width={350} rounded="full">
                    <InputLeftAddon
                        color="blue.500"
                        py={3}
                        pl={4}
                        bg={"none"}
                        pointerEvents='none'
                        children={<GoLocation color='' />}/>
                
                    <Input py={3} pr={4} borderLeftColor="white" value={"Work post code"} />
                </InputGroup>
            
                <InputGroup size='sm' width={350} rounded="full">
                    <Input py={3} pr={4} placeholder="What type of trade are you?" />
                </InputGroup>
                    
                <Wrap flexWrap={true} width={350}>
                    <WrapItem>
                        <HStack bg={'gray.200'} fontSize={9} rounded="sm" p={2}>
                            <Text>Pressure Washing</Text>
                            <RxCross2 />
                        </HStack>
                    </WrapItem>
                    <WrapItem>
                        <HStack bg={'gray.200'} fontSize={9} rounded="sm" p={2}>
                            <Text>Pressure Washing</Text>
                            <RxCross2 />
                        </HStack>
                    </WrapItem>
                    <WrapItem>
                        <HStack bg={'gray.200'} fontSize={9} rounded="sm" p={2}>
                            <Text>Pressure Washing</Text>
                            <RxCross2 />
                        </HStack>
                    </WrapItem>
                    <WrapItem>
                        <HStack bg={'gray.200'} fontSize={9} rounded="sm" p={2}>
                            <Text>Pressure Washing</Text>
                            <RxCross2 />
                        </HStack>
                    </WrapItem>
                    <WrapItem>
                        <HStack bg={'gray.200'} fontSize={9} rounded="sm" p={2}>
                            <Text>Pressure Washing</Text>
                            <RxCross2 />
                        </HStack>
                    </WrapItem>
                </Wrap>

                <Text fontSize={10} color="gray">Let us know what type of work you do so we can match you with relevant jobs</Text>        
                <FormControl mt={2}>
                    <Text fontSize={14}>Where we can send the job leads?*</Text>
                    <Input type='email' placeholder='Email address'/>
                </FormControl>
                <FormControl mt={2}>
                    <Text fontSize={14}>Where we can send the job leads?*</Text>
                    <Input type='text' placeholder='Phone number'/>
                </FormControl>
                <FormControl mt={2}>
                    <Text fontSize={14}>We also send job leads via text message</Text>
                    <Input type='text' placeholder='Phone number'/>
                </FormControl>
                <Button backgroundColor="#F7941E" width={350}>Continue</Button>
            </VStack>
        </Center>
            
        </>
  )
}

export default SignupSigninForget