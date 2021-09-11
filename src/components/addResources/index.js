import React, { useState } from "react";
import { stateData } from "./data";
import { Box, Textarea, Select, Flex, Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
const AddResources = () => {
  const [resourceDetails, resourceDetailsSetter] = useState({
    resource: "",
    state: null,
    cateogry: null,
  });

  function add() {
    if (resourceDetails.resource.length < 1) {
      toast.error("Please add a description");
      return;
    }
    if (!resourceDetails.state) {
      toast.error("Please select a state");
      return;
    }
    if (!resourceDetails.cateogry) {
      toast.error("Please select a cateogry for resource");
      return;
    }
    
    alert("dispatch");
  }

  return (
    <Box bg="white" color="black" my={4} p={4} borderRadius={5}>
      <Textarea
        placeholder="Add Resources"
        size="lg"
        bg="white"
        color="black"
        value={resourceDetails.resource}
        onChange={(e) => {
          resourceDetailsSetter((value) => {
            return { ...value, resource: e.target.value };
          });
        }}
        border="none"
      />
      <Flex justifyContent="space-between" alignItems="center" marginTop={4}>
        <Select
          border="1px solid black"
          bg="white"
          maxW={200}
          placeholder="Select a State"
          value={resourceDetails.state}
          onChange={(e) => {
            resourceDetailsSetter((value) => {
              return { ...value, state: e.target.value };
            });
          }}
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
          value={resourceDetails.state}
          onChange={(e) => {
            resourceDetailsSetter((value) => {
              return { ...value, state: e.target.value };
            });
          }}
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
          value={resourceDetails.cateogry}
          onChange={(e) => {
            resourceDetailsSetter((value) => {
              return { ...value, cateogry: e.target.value };
            });
          }}
        >
          <option value="a">Ventilator Beds</option>
          <option value="a">Oxygen Beds</option>
          <option value="a">Oxygen concentrator</option>
          <option value="a">Oxygen Refill</option>
          <option value="a">Oxymeter</option>
          <option value="a">Medicene</option>
          <option value="a">Medicene</option>
          <option value="a">Covid Tests</option>
        </Select>

        <Select
          border="1px solid black"
          bg="white"
          maxW={185}
          placeholder="Resource Cateogry"
          d={["block", "block", "block", "none", "none", "none"]}
          value={resourceDetails.cateogry}
          onChange={(e) => {
            resourceDetailsSetter((value) => {
              return { ...value, cateogry: e.target.value };
            });
          }}
        >
          <option value="a">Ventilator Beds</option>
          <option value="a">Oxygen Beds</option>
          <option value="a">Oxygen concentrator</option>
          <option value="a">Oxygen Refill</option>
          <option value="a">Oxymeter</option>
          <option value="a">Medicene</option>
          <option value="a">Medicene</option>
          <option value="a">Covid Tests</option>
        </Select>
        <Button colorScheme="teal" size="md" onClick={add}>
          Add Resource
        </Button>
      </Flex>
    </Box>
  );
};

export default AddResources;
