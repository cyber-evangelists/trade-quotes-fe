import { Center, Text, VStack,Input, InputGroup,InputLeftAddon, Box, HStack,  FormControl,
  FormLabel,
  FormErrorMessage,
    FormHelperText,
Button,Image} from '@chakra-ui/react'
import { Progress } from '@chakra-ui/progress'
import React from 'react'
import { SearchIcon } from "@chakra-ui/icons";


const Profile = () => {
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
                <HStack alignSelf={"flex-start"}>
                    <Image src={"/images/profile.png"} />
                    <Button variant="outline" fontSize={12} fontWeight="medium">Change avatar</Button>
                </HStack>        
                <FormControl mt={2}>
                    <Text fontSize={14}>Where we can send the job leads?*</Text>
                    <Input type='text' placeholder='Phone number'/>
                </FormControl>
                <FormControl mt={2}>
                    <Text fontSize={14}>Full name</Text>
                    <Input type='text' placeholder='Your name'/>
                </FormControl>
                <FormControl mt={2}>
                    <Text fontSize={14}>Business Name</Text>
                    <Input type='text' placeholder='Business name'/>
                </FormControl>
                <FormControl mt={2}>
                    <Text fontSize={14}>We also send job leads via text message*</Text>
                    <Input type='text' placeholder='Phone number'/>
                </FormControl>
                <Button backgroundColor="#F7941E" width={350}>Complete Profile</Button>
            </VStack>
        </Center>
            
        </>
  )
}

export default Profile