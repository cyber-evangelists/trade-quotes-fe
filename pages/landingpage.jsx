import {
    Box, Image,
    Input, InputGroup, Text, InputLeftAddon,
    Button,
    Center,
    Container,
  HStack,
    VStack
} from '@chakra-ui/react'
import { Provider,Carousel } from "chakra-ui-carousel";
import { SearchIcon, StarIcon,ArrowForwardIcon } from "@chakra-ui/icons";



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
          GET INSTANTS QUOTES FROM THE BEST TRADES PEOPLE FOR YOUR JOB
        </Text>
      </Center>
      <Center mt="4">
        <Container maxW='container.sm'>
         <Center> 
            <Text fontSize="3xl" fontWeight="extrabold" textAlign="center">
              Get <span style={{color:"#F7941E"}}>Instants Quotes</span> from the The Best Tradespeople for Your Job
            </Text>
          </Center>
        </Container>
      </Center>
      <Center mt="2">
        Get free quotes within minutes
      </Center>
      <Center mt="16" gap={2}>
        <InputGroup size='sm' maxW="400px" rounded="full">
          <InputLeftAddon
                py={5}
                pl={4}
                bg={"none"}
                pointerEvents='none'
                children={<SearchIcon color='' />}
            />
                
          <Input py={5} pr={4} placeholder='search...' borderLeftColor="white" value={"What would you like to have done?"} />
        </InputGroup>
        <Button variant='outline' color="gray.500" fontWeight="normal">Post Code</Button>
        <Button bg="#F7941E">Search</Button>
      </Center>
      <Center pl={4} mt={6}>
        <Container maxW="container.sm">
          <HStack gap={4}>
            <Box>Popular</Box>
            <Box color="#268BFF">Patio Services</Box>
            <Box color="#268BFF">House Cleaning</Box>
            <Box color="#268BFF">Handyman</Box>
            <Box color="#268BFF">Gardening</Box>
          </HStack>
        </Container>  
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
      <Center my={20}>
        <Text color="#0A162B" fontWeight="bold" fontSize={30} >Popular Trades</Text>
      </Center>
      
      <Provider>
        {/* <HStack gap={0}> */}
          <Carousel gap={20}>
          <Box position="relative">
            <Image rounded="xl" src='/images/populartrades.png' alt='popular trades' />
            <Box position="absolute" py={2} bottom={10} left={6} bg="#FFFFFF" w={250} rounded="xl">
                <Text pl={4} color="black" fontWeight="semibold">Plumbers</Text>
                <HStack>
                  <Text pl={4} color="black" fontSize="sm">Find People</Text>
                  <ArrowForwardIcon />
                </HStack>
            </Box>
          </Box>
          <Box position="relative">
            <Image rounded="xl" src='/images/populartrades.png' alt='popular trades' />
            <Box position="absolute" py={2} bottom={10} left={6} bg="#FFFFFF" w={250} rounded="xl">
                <Text pl={4} color="black" fontWeight="semibold">Cleaners</Text>
                <HStack>
                  <Text pl={4} color="black" fontSize="sm">Find People</Text>
                  <ArrowForwardIcon />
                </HStack>
            </Box>
          </Box>
          <Box position="relative">
            <Image rounded="xl" src='/images/populartrades.png' alt='popular trades' />
            <Box position="absolute" py={2} bottom={10} left={6} bg="#FFFFFF" w={250} rounded="xl">
                <Text pl={4} color="black" fontWeight="semibold">Bathroom Fitter</Text>
                <HStack>
                  <Text pl={4} color="black" fontSize="sm">Find People</Text>
                  <ArrowForwardIcon />
                </HStack>
            </Box>
          </Box>
          <Box position="relative">
            <Image rounded="xl" src='/images/populartrades.png' alt='popular trades' />
            <Box position="absolute" py={2} bottom={10} left={6} bg="#FFFFFF" w={250} rounded="xl">
                <Text pl={4} color="black" fontWeight="semibold">Plumbers</Text>
                <HStack>
                  <Text pl={4} color="black" fontSize="sm">Find People</Text>
                  <ArrowForwardIcon />
                </HStack>
            </Box>
          </Box>
          <Box position="relative">
            <Image rounded="xl" src='/images/populartrades.png' alt='popular trades' />
            <Box position="absolute" py={2} bottom={10} left={6} bg="#FFFFFF" w={250} rounded="xl">
                <Text pl={4} color="black" fontWeight="semibold">Plumbers</Text>
                <HStack>
                  <Text pl={4} color="black" fontSize="sm">Find People</Text>
                  <ArrowForwardIcon />
                </HStack>
            </Box>
          </Box>
          <Box position="relative">
            <Image rounded="xl" src='/images/populartrades.png' alt='popular trades' />
            <Box position="absolute" py={2} bottom={10} left={6} bg="#FFFFFF" w={250} rounded="xl">
                <Text pl={4} color="black" fontWeight="semibold">Plumbers</Text>
                <HStack>
                  <Text pl={4} color="black" fontSize="sm">Find People</Text>
                  <ArrowForwardIcon />
                </HStack>
            </Box>
          </Box>
          </Carousel>
        {/* </HStack> */}
      </Provider>
       <Center mt={10}>
        <Text color="#0A162B" fontWeight="bold" fontSize={30} >How it Works</Text>
      </Center>
      <Center mb={10}>
        <Text color="#0A162B"  fontSize={16} >Getting quotes from local tradesman has never been easier! Its free and only takes a minute!</Text>
      </Center>
      <Container maxW={"container.lg"}>
        <Center>
        <HStack gap={20}>
        <VStack position={"relative"}>
          {/* <Image src='/images/leftRect.png' position={"absolute"} left={0} top={ 5} /> */}
          {/* <Image src='/images/rightRect.png' position={"absolute"} left={5} /> */}
          {/* <Image src='/images/leftphon.png'/>
          <Image src='/images/rightphon.png' position={"absolute"} left={10} top={8} /> */}
          <Image src='/images/secondMan.png'/>
            
          <Text fontWeight={"semibold"} fontSize={20}>Post Your Job</Text>
          <Text width={200}>Ready, set go! Post your job and let the website alert skilled tradespeople in your area</Text>
        </VStack>
         <VStack position={"relative"}>
        
          <Image src='/images/secondMan.png'/>
          
          <Text fontWeight={"semibold"} fontSize={20}>Tradespeople Respond</Text>
          <Text width={200}>Get Instant quotes from Interested tradespeople who are excited to take on your project.</Text>
        </VStack>
        <VStack position={"relative"} >
      
          <Image src='/images/secondMan.png' mt={5}/>
          <Text fontWeight={"semibold"} fontSize={20}>Review and Choose</Text>
          <Text width={200} >Browse through their profiles, work history, and feedback, then choose the perfect candidate & a price that suits you!</Text>
        </VStack>
        </HStack>   
      </Center>
      </Container>
      <Center mt={200}></Center>
    </Box>
  )
}