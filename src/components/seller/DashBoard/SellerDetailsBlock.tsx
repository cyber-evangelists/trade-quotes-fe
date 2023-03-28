import { Box, Button,  Flex, Select, Text } from "@chakra-ui/react";
import Image from "next/image";
import { dateFormateHandler } from "../../../../utils/dateformat";
import TextAreaInput from "../../common/textAreaInput";

const SellerDetailsBlock = ({formData, openEdit, isEdit, handleChange}) => {

    return(<Flex bg={'#268BFF'} mt={'20px'} justify={'space-between'} position={'relative'} width={'100%'} p={'20px 30px'} rounded={'12px'}  >
        <Box onClick={() => {
            openEdit(!isEdit)
        }} position={'absolute'} top='2' right={'2'} cursor={'pointer'} >
        <Image src={'/assets/icons/edit-03 1.png'} alt={'EditIcon'} width={18} height={10} />
        </Box>
        <Flex>
        <Flex flexDirection={'column'} align={'center'}>
            <Box rounded={'full'} bg={'white'} width='100px' height={'100px'} border={'3px solid #82BCFF'} >
            </Box>
            <Flex p={'0px 10px'} mt={'10px'} rounded={'30px'} fontWeight={'semibold'} fontSize={'14px'} color={'#268BFF'} bg={"white"}>
                Proud Member

            </Flex>
        </Flex>
        <Box paddingTop={'20px'} px={'20px'}>
            <Text fontWeight={'semibold'} fontSize={'22px'} color={'white'} >{formData?.businessName || 'Business Name'}</Text>
            <Flex align={'center'}>
                <Box bg='#B1D2F9' rounded={'full'} width='20px' height={'20px'} border={'2px solid #82BCFF'}></Box>
            <Select bg={'#268BFF'} color={'white'} border={'none'}>
            <option style={{color: 'black'}} value='On Vacation' >On Vacation</option>
            <option style={{color: 'black'}} value='Busy' >Busy</option>
            <option style={{color: 'black'}} value='Available' >Available</option>
            </Select>
            </Flex>    
        </Box>
        </Flex>
        {!isEdit &&<Flex paddingTop={'20px'}>
            <Box w='1px' h='50px' bg='rgba(251, 252, 255, .2)'></Box>
        <Box   px={'20px'}>
            <Flex>
            <Image src={'/assets/icons/globe-01.5 1.png'} alt={'EditIcon'} width={18} height={10} />
            <Text fontWeight={'semibold'} ml={'10px'} color={"white"}>Local Time</Text>
            </Flex>
            <Text color={'white'}  fontWeight={'semibold'}>
          {dateFormateHandler(Date.now()).time}
        </Text>
        </Box>
        </Flex>}
        {!isEdit &&<Flex paddingTop={'20px'}>
            <Box w='1px' h='50px' bg='rgba(251, 252, 255, .2)'></Box>
        <Box   px={'20px'}>
            <Flex align={'center'} >
            <Image src={'/assets/icons/mail-01 3.png'} alt={'EditIcon'} width={18} height={10} />
            <Text fontWeight={'semibold'} ml={'10px'} color={"white"}>Email Address</Text>
            </Flex>
            <Text color={'white'}  fontWeight={'semibold'}>
          {formData?.email || 'work@powerwasher.com'}
        </Text>
        </Box>
        </Flex>}
        {!isEdit && <Flex paddingTop={'20px'}>
            <Box w='1px' h='50px' bg='rgba(251, 252, 255, .2)'></Box>
        <Box   px={'20px'}>
            <Flex align={'center'}>
            <Image src={'/assets/icons/phone-call-01 2.png'} alt={'EditIcon'} width={18} height={10} />
            <Text fontWeight={'semibold'} ml={'10px'} color={"white"}>Phone</Text>
            </Flex>
            <Text color={'white'}  fontWeight={'semibold'}>
          {formData?.phone || '+44 1234 4589'}
        </Text>
        </Box>
        </Flex>}

        {isEdit && <TextAreaInput value={formData?.about} handleChange={handleChange} name={'about'} title={'About'} placeHolder={'Company about'}  />}
        

    </Flex>)

}

export default SellerDetailsBlock;