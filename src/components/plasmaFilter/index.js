import React from "react";
import {
  Select,
  Flex,
  Checkbox,
} from "@chakra-ui/react";
import { stateData } from "./data";
const ResourceFilters = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginTop={4}
      bg="white"
      p={4}
      borderRadius={5}
    >
      <Select border="1px solid black" bg="white" maxW={90} placeholder="State">
        {stateData.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Select>
      <Checkbox colorScheme="red">A+</Checkbox>
      <Checkbox colorScheme="red">A-</Checkbox>
      <Checkbox colorScheme="red">B+</Checkbox>
      <Checkbox colorScheme="red">B-</Checkbox>
      <Checkbox colorScheme="red">AB+</Checkbox>
      <Checkbox colorScheme="red">AB-</Checkbox>
      <Checkbox colorScheme="red">O+</Checkbox>
      <Checkbox colorScheme="red">O-</Checkbox>
    </Flex>
  );
};

export default ResourceFilters;
