import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PurchaseLeads from "./purchaseLeads";

const CreditsBoard = () => {
  return (
    <Box>
      <Box
        mt={"20px"}
        w="100%"
        bg="#E9F3FF"
        maxW={"370px"}
        p="10px 20px"
        minH={"100px"}
        border={"1px solid #E7E9ED"}
        rounded={"12px"}
      >
        <Flex
          gap={"10px"}
          align={"center"}
          mb={"20px"}
          fontSize={"22px"}
          color="#0D1E39"
          fontWeight={"semibold"}
        >
          {" "}
          <span>
            <Image src={"/assets/icons/creditsLogo.png"} alt={"EditIcon"} />
          </span>{" "}
          <span style={{ color: "#268BFF" }}>230</span>
        </Flex>

        <Text   
          ml={"30px"}
          fontSize={"22px"}
          color="#0D1E39"
          fontWeight={"semibold"}
        >
          Credits Available
        </Text>
      </Box>
      <PurchaseLeads />
    </Box>
  );
};

export default CreditsBoard;
