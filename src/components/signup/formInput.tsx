import { Box, Input, Text, Flex} from "@chakra-ui/react";
import Link from "next/link";

interface props {
  value: string;
  handleChange: (event) => void;
  name: string;
  title: string;
  type: string;
  forgetPassword? : string;
  placeHolder?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  title,
  handleChange,
  placeHolder,
  value,
  required,
  forgetPassword,
  type
}: props) => {
  return (
    <Box
    my={'10px'}
    
    >
        <Flex w='100%' justify={'space-between'} >
      <Text >{title} {required && '*'} </Text>
      {forgetPassword &&  <Link href={forgetPassword} >
      Forgot password?
      </Link>}
      </Flex>
    <Input onChange={handleChange} type={type} value={value || ''} name={name} placeholder={placeHolder ? placeHolder : ''} required={required} />
    </Box>
  );
};

export default FormInput;
