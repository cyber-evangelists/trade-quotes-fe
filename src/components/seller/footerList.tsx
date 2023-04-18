import { Box, Link, Text,   Flex} from "@chakra-ui/react";

const FooterList = ({list}) => {

    return(<Box>
        <Text mb={'20px'} fontWeight={'bold'} fontSize={'14px'}>
        {list.title}
        </Text> 
        <Flex flexDirection={'column'}>
        {list.links.map((item,idx) => {
            return(
<Link fontWeight={'semibold'} fontSize={'14px'} key={idx} href={item.link}  >{item.name}</Link>
            )
        })
        }</Flex>
    </Box>)

}

export default FooterList;