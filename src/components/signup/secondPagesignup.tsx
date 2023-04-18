import {
    Box, Button,Image, chakra, Flex, Input, Text,
  } from '@chakra-ui/react';
import FormInput from './formInput';
import {useState, useRef} from 'react'

const SecondPageSignUp = ({formdata, handlechange}) => {
    const [file,setFile] = useState();

    const FileRef = useRef<HTMLInputElement>();

    const handleprofileimg = (e) => {
        const namef = e.target.name;
        let [file] = e.target.files;
    
        if (file) {
          let limit = file.size / 1024;
          let type = file.type.split("/")[0];
          if (type !== "image") {
            window.alert("Please insert an image");
          } else if (limit > 15000) {
            window.alert("File Cannot Be Greater than 150kb");
          } else {
            setFile(file);
          }
        }
      };

    return(
        <Box>
            <Text mt="3">Upload Photo </Text>
            <Flex align={'center'} gap={'20px'} mt={'20px'} >
            <input
                  ref={FileRef}
                  onChange={handleprofileimg}
                  type="file"
                  name={"profileImage"}
                  hidden
                ></input> 
                <Box w='69px' h='69px' rounded={'100%'} overflow={'hidden'}>
                    <Image src={ (file &&
                      (typeof file === "string"
                        ? file
                        : URL?.createObjectURL(file))) ||  '/assets/images/profile Default.png'} alt={'profile Image'} objectFit={'contain'} />
                </Box>
                <Button  onClick={() => FileRef.current.click()} type='button' boxShadow={'0px 0px 2px rgba(89, 100, 117, 0.1)'} bg={'white'} rounded={'4px'} border={'1px solid #E0E0E0'} >Change avatar</Button>
            </Flex>
  
    <FormInput value={formdata?.email} handleChange={handlechange} name={'email'} title={'Where can we send the job leads?'} type={'email'} placeHolder={'Phone number'} required={true} />
    <FormInput value={formdata?.name} handleChange={handlechange} name={'name'} title={'Full name'} type={'text'} placeHolder={'Your name'} />
    <FormInput value={formdata?.businessName} handleChange={handlechange} name={'businessName'} title={'Business Name'} type={'text'} placeHolder={'Business name'}  />
    <FormInput value={formdata?.phoneAlt} handleChange={handlechange} name={'phoneAlt'} title={'We also send job leads via text message'} type={'text'} placeHolder={'Phone number'} required={true} />
    
        </Box>
    )



}

export default SecondPageSignUp;