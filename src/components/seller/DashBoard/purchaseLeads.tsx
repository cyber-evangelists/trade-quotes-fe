import { Box, Button, Switch, Flex, Text } from "@chakra-ui/react";

const leads = [
  {
    price: 5,
    description: "100 Leads + 10 Bonus",
  },
  {
    price: 10,
    description: "250 Leads + 20 Bonus",
  },
  {
    price: 15,
    description: "250 Leads + 20 Bonus",
  },
  {
    price: 20,
    description: "250 Leads + 20 Bonus",
  },
  {
    price: 25,
    description: "250 Leads + 20 Bonus",
  },
];

const PurchaseLeads = () => {
  return (
    <Box
      my="10px"
      w="100%"
      p="20px"
      minH={"100px"}
      border={"1px solid #E7E9ED"}
      rounded={"12px"}
    >
      <Text mb={"10px"} fontSize={"22px"} fontWeight={"semibold"}>
        Make the move
      </Text>
      <Text mb={"10px"} fontWeight={"semibold"}>
        Get Leads Credit and unlock access to a pool of potential customers.
        Access new leads. No recurring charges. Pay as you go.
      </Text>
      <Flex  wrap={'wrap'} align={"center"} gap={"10px"}>
        {leads.map((lead, idx) => {
          return (
            <Box
              key={idx}
              bg="#E9F3FF"
              fontWeight={"semibold"}
              padding="20px"
              rounded={"12px"}
            >
              {lead.price}$
              <Text color={"#268BFF"} fontSize={"14px"}>
                {lead.description}
              </Text>
            </Box>
          );
        })}
      </Flex>
      <Button
        w="100%"
        mt={"10px"}
        bg={"#268BFF"}
        color={"white"}
        padding={"17px 15px"}
      >
        Purchase Leads
      </Button>
    </Box>
  );
};

export default PurchaseLeads;
