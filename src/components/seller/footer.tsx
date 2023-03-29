import { Box, Select, Text,Link,  Image, Flex} from "@chakra-ui/react";
import FooterList from "./footerList";

const List = [
    {title: 'For Customers',
    links: [
        {name: 'Find a Professional',
        link: ''},
        {name: 'How it works',
        link: ''},
        {name: 'Login',
        link: ''}
    ]},
    {title: 'For Professionals',
    links: [
        {name: 'How it works',
        link: ''},
        {name: 'Pricing',
        link: ''},
        {name: 'Join as a Professional',
        link: ''},
        {name: 'Help centre',
        link: ''},
        {name: 'Mobile App',
        link: ''}
    ]},
    {title: 'About',
    links: [
        {name: 'About TradeQuotes',
        link: ''},
        {name: 'Team',
        link: ''},
        {name: 'Careers',
        link: ''},
        {name: 'Affiliates',
        link: ''},
        {name: 'Blog',
        link: ''}
    ]}
]


const Footer = () => {

    return(<Flex w={'100%'} mt={'120px'} align={'center'} justify={'center'} p={'0px 30px'} >
        <Box w={'100%'} maxWidth={'1200px'}>
            <Flex wrap={'wrap'} w='100%' justify={'space-between'}  mb={'50px'}  p={'30px 0px'}>
            
            <Image src="/assets/images/logo.png" alt="logo" objectFit={'contain'} height={'fit-content'} />
            
            {List.map((item,idx) => {
                return(<FooterList list={item} key={idx} />)
            })}

            <Flex justifySelf={'flex-end'} flexDirection={'column'} align={'flex-end'}>
                <Text fontWeight={'semibold'} lineHeight={'150%'} fontSize={'14px'} textAlign='end' >help@tradequotes.co.uk</Text>
                <Text fontWeight={'semibold'} lineHeight={'150%'} fontSize={'14px'} textAlign='end' >020 3697 0237</Text>
                <Text fontWeight={'semibold'} lineHeight={'150%'} fontSize={'12px'} color={'rgba(39, 41, 39, 0.5)'} textAlign='end' >(open 24 hours a day, 7 days a week)</Text>
                <Select mt='30px' bg='#E7E9ED' border={'1px solid #F9F9FA'} borderRadius={'6px'} padding='9px' fontSize={'14px'}>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Australia</option></Select>
            </Flex>
            
            
            </Flex>
            <Box w='100%' borderTop={'1px solid rgba(0, 0, 0, 0.1)'} p={'20px 0px'}>
                <Text display={{base: 'none', md: 'inline' }} fontWeight={'semibold'} lineHeight={'150%'} fontSize={'14px'}>Copyright © 2023 Trade Quotes.  <Link>Terms & Conditions</Link> /   <Link>Cookie policy</Link> /  <Link>Privacy policy </Link></Text>
                <Box display={{base: 'flex', md: 'none' }} flexDirection={'column'} fontWeight={'semibold'} lineHeight={'150%'} fontSize={'14px'}>
                 <Link>Terms & Conditions</Link>   <Link>Cookie policy</Link>  <Link>Privacy policy </Link>Copyright © 2023 Trade Quotes. 
                </Box>
            </Box>

        </Box>

    </Flex>)


}

export default Footer;