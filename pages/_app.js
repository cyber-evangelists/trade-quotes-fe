import '@/styles/globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/header'
import "../pages/auth/signup.module.css";

export default function App({ Component, pageProps }) {
  return <ChakraProvider>
            <Header />
            <Component {...pageProps} />
          </ChakraProvider>

}
