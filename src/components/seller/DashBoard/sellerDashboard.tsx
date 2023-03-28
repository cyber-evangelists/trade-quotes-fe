import { Box, Button, Switch, Flex, Text } from "@chakra-ui/react";
import { dateFormateHandler } from "../../../../utils/dateformat";
import SellerDetailsBlock from "./SellerDetailsBlock";
import {useState} from 'react'
import Image from "next/image";
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import Completeprofile from "./completeProfile";
import TradeCategories from "./tradeCategories";
import Reviews from "./Reviews";
import ProfileForm from "./profileForm";
import CreditsBoard from "./creditsBoard";


const formtempData = {
    name: '',
    about: '',
    businessName: '',
    address: '',
    email: '',
    phone: '',
    businessId: '',
    localTime: '',
    availability: 'On Vacation'
}

const SellerDashBoard = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [checkPayments, setCheckPayments] = useState(false);
    const [sellerData,setSellerData] = useState(formtempData);


    const handlechange = (event) => {
        const { name, value } = event.target;
        setSellerData({ ...sellerData, [name]: value });
      };

  return (
    <Box mb={'100px'} w={"100%"} h={"100%"} p={'20px 30px'}>
      <Flex w={'100%'} justify={'space-between'}>
        <Text fontSize={'18px'} fontWeight={'semibold'}>
          {dateFormateHandler(Date.now()).dayName},{" "}
          {dateFormateHandler(Date.now()).monthName}{" "}
          {dateFormateHandler(Date.now()).dateNumber}
        </Text>
        <Flex gap={'10px'}>
        <Text fontSize={'18px'} fontWeight={'semibold'}>Standard</Text>
        <Button bg="#0D1E39" color={'white'} size="sm" rounded="5px"  > Upgrade to Pro</Button>
       
        </Flex>
      </Flex>
      <Flex onClick={() => {
        if(checkPayments){
          setCheckPayments(false);
        }
      }}  fontSize={'28px'} gap={'10px'} align={'center'} cursor={checkPayments ? 'pointer' : ''} fontWeight={'semibold'} color={'#0A162B'}  >
      {checkPayments && <ArrowBackIcon />}
      { isEdit ? `Edit Your Profile` : checkPayments ? `Credits`: `Good Morning Ross`}
      </Flex>
      {!checkPayments ?  <Box>
      <SellerDetailsBlock formData={sellerData} openEdit={setIsEdit} isEdit={isEdit} handleChange={handlechange} />
        {!isEdit &&  <Flex my='10px' gap={'10px'}>
            <Box  w='100%' maxW={'350px'} p='10px 20px' minH={'100px'} border={'1px solid #E7E9ED'} rounded={'12px'}>
                <Text mb={'20px'} fontSize={'22px'} color='#0D1E39' fontWeight={'semibold'}   >Let us know if you’re busy</Text>
                <Flex align={'center'} gap={'10px'}>
                    <Text fontSize={'14px'} color='#0D1E39' fontWeight={'semibold'}  >Receiving Leads</Text>
                    <Switch size={'sm'} ></Switch>
                </Flex>
            </Box>
            <Box  w='100%' bg='#E9F3FF' maxW={'370px'} p='10px 20px' minH={'100px'} border={'1px solid #E7E9ED'} rounded={'12px'}>
                < Flex  gap={'10px'} align={'center'} mb={'20px'} fontSize={'22px'} color='#0D1E39' fontWeight={'semibold'}   > <span>
                <Image src={'/assets/icons/creditsLogo.png'} alt={'EditIcon'} width={18} height={10} />
                  </span>   Credits Available: <span style={{color: '#268BFF'}}>230</span></Flex>
              
                    <Text onClick={() => {
                      setCheckPayments(true)
                    }} ml={'30px'} cursor={'pointer'} fontSize={'14px'} color='#268BFF' fontWeight={'semibold'}  >Top up credit</Text>
                  
            </Box>
            <Box  w='100%' maxW={'320px'} p='10px 20px' minH={'100px'} border={'1px solid #E7E9ED'} rounded={'12px'}>
                <Text mb={'20px'} fontSize={'22px'} color='#0D1E39' fontWeight={'semibold'}   >Unread Leads <span style={{color: '#268BFF'}}>32</span></Text>
                <Flex align={'center'} gap={'10px'}>
                    <Text fontSize={'14px'} color='#0D1E39' fontWeight={'semibold'}  >Respond lead</Text>
                    <ArrowForwardIcon />
                </Flex>
            </Box>
        </Flex>}
        {!isEdit && <Completeprofile />}
        {isEdit && <Text mt={'20px'} fontWeight={"semibold"} lineHeight="150%"  > Information Detail</Text>}
        <Flex gap={'10px'} my={'10px'}>
          {isEdit && <ProfileForm formdata={sellerData} handleChange={handlechange} />}
          <TradeCategories />
        </Flex>
        {!isEdit && <Reviews />} 
        </Box> : <CreditsBoard />}
    </Box>
  );
};

export default SellerDashBoard;
