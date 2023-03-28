import { Box, Select, Text, Flex} from "@chakra-ui/react";

interface props {
  value: string;
  handleChange: (event) => void;
  name: string;
  list: string[];
  title: string;
  handleVerification?: (id) => void;
  placeHolder?: string;
  required?: boolean;
}

const SelectInput = ({
  name,
  title,
  handleChange,
  placeHolder,
  value,
  required,
  list,
  handleVerification
}: props) => {
  return (
    <Box
      w={"100%"}
      maxW={"520px"}
      p="10px 0px 0px 10px"
      rounded="6px"
      bg='white'
      border={'1px solid #E7E9ED'}
    >
      <Text fontWeight={"semibold"} lineHeight="150%">
        {title}
      </Text>
      <Flex w='100%' align={'center'} >
      <Select
        name={name}
        onChange={handleChange}
        placeholder={placeHolder}
        defaultValue={value || ""}
        required={required}
        border='none'
        bg='none'
        p={'0px 0px'}
      >
        {list.map((opt,idx)=>{
             return(
            <option value={opt} key={idx} >
                {opt}

            </option>)
        })}
      </Select>
      { handleVerification &&  <Text onClick={() => {
        handleVerification(value)
      }} whiteSpace={'nowrap'} color={'#4CC111'} cursor={'pointer'} >Send Verification</Text>}
      </Flex>
    </Box>
  );
};

export default SelectInput;
