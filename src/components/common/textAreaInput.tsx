import { Box, Input, Text, Textarea } from "@chakra-ui/react";

interface props {
  value: string;
  handleChange: (event) => void;
  name: string;
  title: string;
  placeHolder?: string;
  required?: boolean;
}

const TextAreaInput = ({
  name,
  title,
  handleChange,
  placeHolder,
  value,
  required,
}: props) => {
  return (
    <Box
      w={"100%"}
      maxW={"520px"}
      p="10px"
      rounded="6px"
      height="100%"
      bg='white'
      border={'1px solid #E7E9ED'}
    >
      <Text fontWeight={"semibold"} lineHeight="150%">
        {title}
      </Text>
      <Textarea
        name={name}
        onChange={handleChange}
        placeholder={placeHolder}
        value={value || ""}
        required={required}
        border='none'
        bg='none'
        p={'10px 0px'}
      ></Textarea>
    </Box>
  );
};

export default TextAreaInput;
