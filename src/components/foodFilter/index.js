import React from "react";
import {
  Text,
  Select,
  Flex,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
  Box,
  Button,
} from "@chakra-ui/react";
import { stateData } from "./data";
const ResourceFilters = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="white"
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
      <RadioGroup defaultValue="1">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="teal" value="1">
            Free Meals
          </Radio>
          <Radio colorScheme="teal" value="2">
            Paid Meals
          </Radio>
        </Stack>
      </RadioGroup>
      <RadioGroup defaultValue="1">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="teal" value="1">
            Veg
          </Radio>
          <Radio colorScheme="teal" value="2">
            non-veg
          </Radio>
        </Stack>
      </RadioGroup>
      <Text fontSize="xl" color="teal">
        Clear All
      </Text>
    </Flex>
  );
};

export default ResourceFilters;
