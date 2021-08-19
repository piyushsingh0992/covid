import React from "react";
import { stateData } from "./data";
import { Box, Textarea, Select, Flex, Button } from "@chakra-ui/react";
const AddResources = () => {
  return (
    <Box bg="white" color="black" my={4} p={4} borderRadius={5}>
      <Textarea
        placeholder="Add Resources"
        size="lg"
        bg="white"
        color="black"
        border="none"
      />
      <Flex justifyContent="space-between" alignItems="center" marginTop={4}>
        <Select
          border="1px solid black"
          bg="white"
          maxW={200}
          placeholder="Select a State"
          d={["none", "none", "none", "block", "block", "block"]}
        >
          {stateData.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Select>

        <Select
          border="1px solid black"
          bg="white"
          maxW={90}
          placeholder="State"
          d={["block", "block", "block", "none", "none", "none"]}
        >
          {stateData.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Select>

        <Select
          border="1px solid black"
          bg="white"
          maxW={250}
          placeholder="Select a Resource Cateogry"
          d={["none", "none", "none", "block", "block", "block"]}
        >
          <option value="a">Hospital Beds</option>
          <option value="a">Oxygen Beds</option>
          <option value="a">Oxygen concentrator</option>
          <option value="a">Oxygen Refill</option>
          <option value="a">Oxymeter</option>
        </Select>

        <Select
          border="1px solid black"
          bg="white"
          maxW={185}
          placeholder="Resource Cateogry"
          d={["block", "block", "block", "none", "none", "none"]}
        >
          <option value="a">Hospital Beds</option>
          <option value="a">Oxygen Beds</option>
          <option value="a">Oxygen concentrator</option>
          <option value="a">Oxygen Refill</option>
          <option value="a">Oxymeter</option>
        </Select>
        <Button colorScheme="teal" size="md">
          Add Resource
        </Button>
      </Flex>
    </Box>
  );
};

export default AddResources;
