import {
    Box, Image,
    Input, InputGroup, Text, InputLeftAddon,
    Button,
    Center,
    Container,
  HStack,
    VStack,Flex
} from '@chakra-ui/react'
import { Provider,Carousel } from "chakra-ui-carousel";
import { StarIcon,ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";



export default function LandingPage() {
  return (
    <Box mt={20} bgImage>
      <Box  style={{ 
                backgroundImage: "url('/images/bg.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
      }}>
        <Center>
          <Text fontSize="sm">
            HOW IT WORKS
          </Text>
        </Center>
        <Center mt="4">
          <Container maxW='container.sm'>
            <Center> 
              <Text fontSize="4xl" color="gray.600" fontWeight="extrabold" textAlign="center">
                TradeQuotes for Pros
              </Text>
            </Center>
          </Container>
        </Center>
        <Center mt="2">
          <Text width={370} fontSize="sm" align="center">          
           TradeQuotes is the Amazon of services. Millions of people use us worldwide find what they need everyday.
          </Text>
        </Center>
        <Center my={5}>
          <Image src='/images/person.png' />
        </Center>
        <Center>
          <Button backgroundColor="#F7941E">Join as Professional</Button>          
        </Center>          
      
        <Center mt={6}>
          <HStack>
            <Text>Excellent</Text>
            <HStack>
              <StarIcon color="white" bg="#00B67A" p={1}/>
              <StarIcon color="white" bg="#00B67A" p={1}/>
              <StarIcon color="white" bg="#00B67A" p={1}/>
              <StarIcon color="white" bg="#00B67A" p={1}/>
              <StarIcon color="white" bg="#00B67A" p={1}/>
            </HStack>
            <Text>128 Reviews on</Text>
            <HStack gap={0}>
              <StarIcon color="#00B67A"/>
              <Text>Trustpilot</Text>
            </HStack>
          </HStack>
        </Center>
      
      </Box>
      
      <Box>
        <Flex flexDirection="row" justify={"space-around"} mt={10} position="relative">
            <Image src='/images/keyboard.png' />
            <VStack width={350} align="flex-start" gap={5}>
                      <Text fontWeight={"semibold"} fontSize="2xl">Customers come to us with their needs</Text>
                      <Text>We support every imaginable service, for both individuals and small businesses. We collect detailed information about exactly what the customer is looking for.</Text>
                      <Text>Smart customers Bark it, not Google it. They know that we’ll provide relevant, professional companies that can meet their needs.</Text>
            </VStack>
            <Box position={"absolute"} width={250} backgroundColor="white" left={300} top={5} rounded="md" px={4} py={4}>
                    <InputGroup size='sm' maxW="400px" rounded="full">
                        <InputLeftAddon
                            py={5}
                            pl={4}
                            bg={"none"}
                            color="#268BFF"
                            pointerEvents='none'
                            children={<SearchIcon color='' />}/>
                
                        <Input py={5} pr={4} placeholder='search...' borderLeftColor="white" value={"Find Service"} />
                      </InputGroup>
                      <VStack align={"flex-start"}>
                          <Text color="#268BFF" width={"full"} mt={ 2} py={2} backgroundColor="#F4F9FF" rounded={"md"}>Patio services</Text>
                          <Text color="#268BFF" width={ "full"}  py={2} backgroundColor="#F4F9FF" rounded={"md"}>Patio services</Text>
                          <Text color="#268BFF" width={ "full"}  py={2} backgroundColor="#F4F9FF" rounded={"md"}>Patio services</Text>
                          <Text color="#268BFF" width={ "full"}  py={2} backgroundColor="#F4F9FF" rounded={"md"}>Patio services</Text>
                      </VStack>  
            </Box>
        </Flex>
        <Flex flexDirection="row" justify={"space-around"} mt={28}>
                  
                  <VStack width={350} align="flex-start" gap={5}>
                      <Text fontWeight={"semibold"} fontSize="2xl">Customers find you on TradeQuote</Text>
                      <Text>Customers then find you on Bark and can reach out to you. We’ll also send you all leads matching what you do.</Text>
                      <Text>We charge a small fee for each introduction and we give you the phone number and e-mail address of each potential customer so you can reach out.</Text>
                  </VStack>
                  <VStack width={350} align="flex-start" gap={5}>
                      <Text fontWeight={"semibold"} fontSize="2xl">Customers come to us with their needs</Text>
                      <Text>We support every imaginable service, for both individuals and small businesses. We collect detailed information about exactly what the customer is looking for.</Text>
                      <Text>Smart customers Bark it, not Google it. They know that we’ll provide relevant, professional companies that can meet their needs.</Text>
                  </VStack>
        </Flex>
      </Box>
      <Center mt={28} position="relative">
        <Image width="90%" src='/images/growbusiness.png' />
        <VStack position={"absolute"}  top={10} left={20}  width={300} color="white" align={"flex-start"}>
          <Text >Be Pro</Text>
          <Text fontSize={"2xl"} fontWeight="semibold" width={200} style={{marginTop:"30px"}}>Grow your business. Fast.</Text>
          <Text mt={10} fontSize={"sm"}>We take the hassle out of marketing your services. TradeQuote professionals receive hot, live leads as soon as they are placed. Join as a professional now and get instant access to leads for your business.</Text>
          <Input placeholder='Email Address' backgroundColor={"white"} style={{marginTop:"30px"}} />
          <Button rightIcon={<ArrowForwardIcon />} color={"black"} fontWeight="normal" width={"full"}>Get Started</Button>
        </VStack>
      </Center>
      <Box width={"full"} backgroundColor="#1F57C3" mt={30} py={10}>
        <Center>
            <VStack>
                <Text fontWeight={"bold"} fontSize="2xl" color={"white"}>Get started today</Text>
                <Text color={"white"} pb={5} fontWeight={"thin"}>Get Instant Quotes from The Best Trades People for Your Job</Text>
                <HStack>
                    <Button fontWeight={"normal"} rightIcon={<ArrowForwardIcon />}>Post JOb</Button>
                    <Button fontWeight={"normal"} rightIcon={<ArrowForwardIcon />}>Find JOb</Button>
                </HStack>
            </VStack>
        </Center>          
      </Box>
    </Box>
  )
}
