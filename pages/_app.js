import '@/styles/globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  return <ChakraProvider>
            {/* <Box bgImage="url('/images/bg.png')" bgSize="cover" bgPosition="center"> */}
            <Header />
            <Component {...pageProps} />
            {/* </Box> */}
          </ChakraProvider>

}
