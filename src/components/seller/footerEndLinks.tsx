import { Box,  Text,Link,  } from "@chakra-ui/react";

const FooterEndLinks = () => {

    return(
        <Box w='100%' borderTop={'1px solid rgba(0, 0, 0, 0.1)'} p={'20px 0px'}>
        <Text display={{base: 'none', md: 'inline' }} fontWeight={'semibold'} lineHeight={'150%'} fontSize={'14px'}>Copyright © 2023 Trade Quotes.  <Link>Terms & Conditions</Link> /   <Link>Cookie policy</Link> /  <Link>Privacy policy </Link></Text>
        <Box display={{base: 'flex', md: 'none' }} flexDirection={'column'} fontWeight={'semibold'} lineHeight={'150%'} fontSize={'14px'}>
         <Link>Terms & Conditions</Link>   <Link>Cookie policy</Link>  <Link>Privacy policy </Link>Copyright © 2023 Trade Quotes. 
        </Box>
    </Box>
    )

}

export default FooterEndLinks;