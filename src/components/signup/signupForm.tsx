
import {
    Box, Button,Image, chakra, Flex, Input, Text,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FirstPageSignUp from './firstPagesignup';
import SecondPageSignUp from './secondPagesignup';

const steps = ['first','second']

const tempData = {
  postCode: '',
  email: '',
  phone: '',
  phoneAlt: '',
  seller: [],
  name: '',
  businessName: '',
}


const SignupForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [signupData, setsignupData] = useState(tempData)
    const router = useRouter()


    const handlechange = (event) => {
      const { name, value } = event.target;
      setsignupData({ ...signupData, [name]: value });
    };

    const renderStep = () => {
      switch(currentStep){
        case 1:
          return <FirstPageSignUp formdata={signupData} setform={setsignupData}  />
        case 2: 
        return <SecondPageSignUp formdata={signupData} handlechange={handlechange} />
        default:
          return
      }
      
    }

    const handleStep = (step) => {
      if(step === 'next' && currentStep !== steps.length ){
        setCurrentStep(currentStep + 1)
      }else if(step === 'back' && currentStep !== 0){
        setCurrentStep(currentStep - 1)
      }
    }

    const handleSubmit = async () => {
      try {
        await axios.post(`http://194.59.165.140/test/app1/graphql`, {
      query: `
      mutation MyMutation($user: CreateUserInput!) {
        createUser(user: $user) {
          email
          jwt
          phoneNumber
          id
        }
      }
    `,
      variables: {
        user: {
          email: signupData?.email,
          password: 'test1234',
          phoneNumber: signupData?.phone,
        }
      },
    }).then((res) => {
          if (res.status === 200) {
            window.alert("Account made");
            let temp = res.data.data.createUser
            localStorage.setItem('user-login', {...temp})
            router.push('/dashboard/seller')
          } else {
            window.alert("An error occured");
          }
        });
      } catch (err) {
        window.alert(err || 'an error occured');
      }
    }

    return(<chakra.form onSubmit={(e) => {
      e.preventDefault();
      if(currentStep !== steps.length){
        handleStep('next')

      }else{
          handleSubmit();
      }
    }} maxW="468" mx="auto">
    <Text textAlign="center">Receive job leads from homeowners in your area & Receive job leads from homeowners in your area</Text>
    <Flex gap={'4px'} mt="7">
      {steps.map((step,idx) => {
        return(
          <Box w="100%" onClick={() => {
            setCurrentStep(idx+1)
          }} key={idx} h="1.5" bgColor={currentStep === idx + 1 ? 'blue.400' : 'blue.100' } />
        )
      })}
    </Flex>

    {renderStep()}
   
    <Button  type="submit" colorScheme="orange" mt="3" w="100%">{currentStep === steps.length ? "Complete Profile" : 'Continue'}</Button>
  </chakra.form>)


}

export default SignupForm;