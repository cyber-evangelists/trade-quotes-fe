import { Box, Input, Text, Flex} from "@chakra-ui/react";

interface props {
  value: string;
  handleChange: (event) => void;
  name: string;
  title: string;
  type: string;
  handleVerification?: (id) => void;
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
  type,
  handleVerification
}: props) => {
  return (
    <Box
    my={'10px'}
      w={"100%"}
      maxW={"520px"}
      p="5px 10px"
      rounded="6px"
      bg='white'
      border={'1px solid #E7E9ED'}
    >
      <Text fontWeight={"semibold"} lineHeight="150%">
        {title}
      </Text>
      <Flex w='100%' align={'center'} >
      <Input
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeHolder}
        value={value || ""}
        required={required}
        border='none'
        bg='none'
        p={'10px 0px'}
      ></Input>
      { handleVerification &&  <Text onClick={() => {
        handleVerification(value)
      }} whiteSpace={'nowrap'} color={'#4CC111'} cursor={'pointer'} >Send Verification</Text>}
      </Flex>
    </Box>
  );
};

export default FormInput;
