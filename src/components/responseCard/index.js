import React from "react";
import {
  Flex,
  Text,
  Heading,
  Button,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";

const ResponseCard = () => {
  return (
    <Flex
    justifyContent="space-between"
    p={5}
    my={5}
    bg="white"
    borderRadius={5}
    position="relative"
    >
      <Box>
        <Heading fontSize="xl">Request Details</Heading>
        <Text mt={4}>State : B+</Text>
        <Text mt={4}>Blood Group : B+</Text>
        <Text mt={4} fontSize="md">
          any message from doner
        </Text>

        <Heading fontSize="xl" mt={5}>
          If Expected
        </Heading>
        <Text mt={4}>State : B+</Text>
        <Text mt={4}>Blood Group : B+</Text>
        <Text mt={4} fontSize="md">
          any message from doner
        </Text>

        <ButtonGroup variant="outline" spacing="6" marginTop={5}>
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
            Status
          </Button>
        </ButtonGroup>
      </Box>
      <Menu position="absolute" top={5} right={5}>
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
          Cancel
        </Button>
      </Menu>
    </Flex>
  );
};

export default ResponseCard;
