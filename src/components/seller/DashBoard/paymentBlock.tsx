import { Box,  Button, Text, Link } from "@chakra-ui/react";
import CardInfoInput from "./CardInfoInputs";
import {useState} from 'react'
import FormInput from "../../common/formInput";


const formtempData = {
    cardName: '',
    expiration: '',
    cvv: '',
    name: '',
    address: '',
    email: ''
}


const PaymentBlock = () => {
    const [cardData,setCardData] = useState(formtempData);

    const handlechange = (event) => {
        const { name, value } = event.target;
        setCardData({ ...cardData, [name]: value });
      };



    return(<Box
        my="10px"
        w="100%"
        p="20px"
        minH={"100px"}
        border={"1px solid #E7E9ED"}
        rounded={"12px"}
      >
        <Text mb={"10px"} fontSize={"22px"} fontWeight={"semibold"}>
        Billing
        </Text>
        <Text mb={"10px"} fontWeight={"semibold"}>
        an order to purchase jobs from us, we require that your account has an active billable debit or credit card.For more information, check out <Link href="https://www.myjobquote.co.uk/help/tradespeople" target={'_blank'} rel={'noreferrer'} color={'#268BFF'} textDecoration={'underline'}  > our frequently asked questions.</Link>
        </Text >
        <Text mt={"20px"} fontWeight={"semibold"}  >Add a Card</Text>
        <CardInfoInput formData={cardData} handleChange={handlechange}  />
        <Text mt={"20px"} fontWeight={"semibold"}  >Billing Detail</Text>
        <FormInput name="name" handleChange={handlechange} title={'Name'} type={'text'} value={cardData.name} placeHolder={'Full name'} />
        <FormInput name="address" handleChange={handlechange} title={'Address'} type={'text'} value={cardData.address} placeHolder={'Street'} />
        <FormInput name="email" handleChange={handlechange} title={'Billing email'} type={'text'} value={cardData.email} placeHolder={'Email address'} />
        <Button
        w="100%"
        mt={"10px"}
        bg={"#268BFF"}
        color={"white"}
        padding={"17px 15px"}
      >
        Save Payment
      </Button>
        </Box>)

}

export default PaymentBlock;