import React from "react";
import {
  Text,
  Select,
  Flex,
  Stack,
  Radio,
  RadioGroup,
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
      <Flex justifyContent="space-between" alignItems="center">
        <Select
          border="1px solid black"
          bg="white"
          maxW={90}
          placeholder="State"
        >
          {stateData.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Select>
        <RadioGroup defaultValue="1" mx={10}>
          <Stack spacing={5} direction="row">
            <Radio colorScheme="teal" value="1">
              Veg
            </Radio>
            <Radio colorScheme="teal" value="2">
              non-veg
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <Text fontSize="xl" color="teal">
        Clear Filter
      </Text>
    </Flex>
  );
};

export default ResourceFilters;
