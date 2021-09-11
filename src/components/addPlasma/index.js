import React ,{useState}from "react";
import { stateData } from "./data";
import { Box, Textarea, Select, Flex, Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
const AddResources = () => {
  const [plasmaDetails,plasmaDetailsSetter]=useState({
    message: "",
    state: null,
    bloodGroup: null,
  })

  function post() {
    
    if (!plasmaDetails.state) {
      toast.error("Please select a state");
      return;
    }
    if (!plasmaDetails.bloodGroup) {
      toast.error("Please select a blood group");
      return;
    }
    
    alert("dispatch");
  }

  return (
    <Box bg="white" color="black" my={4} p={4} borderRadius={5}>
      <Textarea
        placeholder="Any Additional Message "
        size="lg"
        bg="white"
        color="black"
        border="none"
        value={plasmaDetails.message}
        onChange={(e) => {
          plasmaDetailsSetter((value) => {
            return { ...value, message: e.target.value };
          });
        }}
      />
      <Flex justifyContent="space-between" alignItems="center" marginTop={4}>
        <Select
          border="1px solid black"
          bg="white"
          maxW={200}
          placeholder="Select a State"
          value={plasmaDetails.state}
          onChange={(e) => {
            plasmaDetailsSetter((value) => {
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
          placeholder="Select a Blood Group"
          value={plasmaDetails.bloodGroup}
          onChange={(e) => {
            plasmaDetailsSetter((value) => {
              return { ...value, bloodGroup: e.target.value };
            });
          }}

        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </Select>
        <Button colorScheme="teal" size="md" onClick={post}>
          post
        </Button>
      </Flex>
    </Box>
  );
};

export default AddResources;
