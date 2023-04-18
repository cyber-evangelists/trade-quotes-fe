import { Box,  Flex, Text, Input, Image } from "@chakra-ui/react";
import FormInput from "../../common/formInput";


const CardInfoInput = ({formData, handleChange}) => {
    

    return(<Flex wrap={'wrap'} my='10px' align={'center'} gap={'10px'}>
         <Box
      w={"100%"}
      maxW={"520px"}
      p="5px 10px"
      rounded="6px"
      bg='white'
      height={'fit-content'}
      border={'1px solid #E7E9ED'}
    >
      <Text fontWeight={"semibold"} lineHeight="150%">
      Credit Card
      </Text>
      <Flex  w='100%' gap={'10px'} align={'center'} >
      <Input
        name={'cardNumber'}
        type={'text'}
        onChange={handleChange}
        placeholder={'Card Number'}
        value={formData.cardNumber || ""}
        required={true}
        border='none'
        bg='none'
        p={'0px 0px'}
      ></Input>
      <Image src="/assets/icons/credit-card.png" alt='cardNumber' />
      </Flex>
    </Box>
    <Box w='100%' maxW='160px'>
    <FormInput name="expiration" handleChange={handleChange} title={'Expiration'} type={'text'} value={formData.expiration} placeHolder={'00/00'}  />
    </Box>
    <Box w='100%' maxW='160px'>
    <FormInput name="cvv" handleChange={handleChange} title={'CVV'} type={'text'} value={formData.cvv} placeHolder={'000'} />
    </Box>     
    </Flex>)

}

export default CardInfoInput;