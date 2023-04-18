import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image";
import { useRouter } from "next/router";
import { SellerSideBarOptions } from "../../../mocks/sellerDashboardOptions";


const SideBar = () => {
    const router = useRouter();
    return(
    <Box width={'100%'} display={{base: 'none', md: 'block' }} height={'100%'} maxWidth={'250px'} py={'10px'} paddingLeft={'30px'}>
        {SellerSideBarOptions.map((item,idx) => {
            return(
            <Flex onClick={() => {
                router.push(item.link)
            }} filter={router.pathname === item.link ? 'invert(42%) sepia(76%) saturate(2763%) hue-rotate(198deg) brightness(103%) contrast(102%)' : ''} rounded={'10px'} cursor='pointer' key={idx} p={'10px 20px'} gap={'10px'} bg={router.pathname === item.link ? 'rgba(38, 139, 255, 0.1)' : '' } > 
            <Image src={item.icon} alt={'navIcon'} width={18} height={10} />
            <Text fontWeight={'semibold'} color={router.pathname === item.link ? '#268BFF' : '#8792A3'}  >{item.title}</Text>
            
            </Flex>)
        })}

        </Box>)

}

export default SideBar;