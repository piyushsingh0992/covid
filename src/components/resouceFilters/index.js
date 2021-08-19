import React from "react";
import { Text, Select, Flex, Checkbox } from "@chakra-ui/react";
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

      <Checkbox size="md" colorScheme="teal" defaultIsChecked>
        Most upvoted
      </Checkbox>
      <Text fontSize="xl" color="teal">
        Clear All
      </Text>
    </Flex>
  );
};

export default ResourceFilters;
