import React from "react";

import { Flex, Text, Heading, Button, Box } from "@chakra-ui/react";

const PlasmaCard = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      p={5}
      my={5}
      boxShadow="md"
      bg="white"
      borderRadius={5}
    >
      <Heading fontSize="xl">Piyush Singh</Heading>
      <Text mt={4}>State : B+</Text>
      <Text mt={4}>Blood Group : B+</Text>
      <Text mt={4} fontSize="md">
        any message from doner
      </Text>
      <Box marginTop={5}>
        <Button
          color="white"
          bg="teal"
          _hover={{
            color: "teal",
            bg: "white",
            border: "1px",
            borderColor: "teal",
          }}
        >
          Request Details
        </Button>
      </Box>
    </Flex>
  );
};

export default PlasmaCard;
