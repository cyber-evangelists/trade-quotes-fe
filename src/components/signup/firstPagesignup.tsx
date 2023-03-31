import { SmallCloseIcon } from '@chakra-ui/icons';
import {
    Box, Button,Image, chakra, Flex, Input, Text,
  } from '@chakra-ui/react';
import { useState } from 'react';
import FormInput from './formInput';

const FirstPageSignUp = ({formdata, setform}) => {
    const [seller,setSeller] = useState('')

    const handlechange = (event) => {
        const { name, value } = event.target;
        setform({ ...formdata, [name]: value });
      };


    return(
        <Box>
             <Input value={formdata?.postCode || ''} name='postCode' onChange={handlechange} type={'text'} placeholder="Work Post Code" mt="5" borderColor="blue.400" />
    <Input value={seller} onChange={(e) => {
        const { name, value } = e.target;
        setSeller(value);
    }} onKeyDown={(e) => {
        if(e.key === 'Enter' && seller !== ''){
            let temp = formdata;
            temp.seller.push(seller);
            setform({...formdata,['seller']: temp.seller})
            setSeller('')
        }
    }} placeholder="What type of trade are you?" mt="3" />

    <Flex wrap={'wrap'} gap={'10px'} my={'10px'} >
    {formdata?.seller.map((item,idx) => {
        return(<Flex key={idx} align={'center'} px={'10px'} gap={'30px'} cursor={'pointer'} rounded={'6px'} fontSize={'12px'} lineHeight={'25px'} fontWeight={'semibold'} bg={'#E7E9ED'} >{item} <SmallCloseIcon onClick={() => {
            let temp = formdata.seller.filter(sell => sell !== item)
            setform({...formdata,['seller']: temp})
        }} /></Flex>)
    })}
    </Flex>


    <Text fontSize="xs" mt="3">Let us know what type of work you do so we can match you up with relevant jobs</Text>
  
    <FormInput value={formdata?.email} handleChange={handlechange} name={'email'} title={'Where can we send the job leads?'} type={'email'} placeHolder={'E-mail'} required={true} />
    <FormInput value={formdata?.phone} handleChange={handlechange} name={'phone'} title={'Where can we send the job leads?'} type={'text'} placeHolder={'Phone number'} required={true} />
    <FormInput value={formdata?.phoneAlt} handleChange={handlechange} name={'phoneAlt'} title={'We also send job leads via text message'} type={'text'} placeHolder={'Phone number'} required={true} />
    
        </Box>
    )



}

export default FirstPageSignUp;