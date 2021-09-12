import React, { useState } from "react";

import { stateData } from "../../utils/constant";
import { Box, Textarea, Select, Flex, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { toast } from "react-toastify";
const AddResources = () => {
  const [foodDetails, foodDetailsSetter] = useState({
    description: "",
    menu: [],
    state: null,
    type: null,
  });

  const [currentMenuItem, currentMenuItemSetter] = useState("");

  function post() {
    if (foodDetails.description.length < 1) {
      toast.error("Please add a description");
      return;
    }
    if (foodDetails.menu.length < 1) {
      toast.error("Please add a menu");
      return;
    }
    if (!foodDetails.state) {
      toast.error("Please select a state");
      return;
    }
    if (!foodDetails.type) {
      toast.error("Please select food type");
      return;
    }

    alert("dispatch");
  }

  function addToMenu() {
    foodDetailsSetter((value) => {
      return { ...value, menu: [currentMenuItem, ...value.menu] };
    });
    currentMenuItemSetter("");
  }

  return (
    <Box bg="white" color="black" my={4} p={4} borderRadius={5}>
      <Textarea
        placeholder="Add Description"
        size="lg"
        bg="white"
        color="black"
        m="1"
        value={foodDetails.description}
        onChange={(e) => {
          foodDetailsSetter((value) => {
            return { ...value, description: e.target.value };
          });
        }}
      />
      <Flex>
        <Input
          type="tel"
          placeholder="Add Menu"
          m="1"
          value={currentMenuItem}
          onChange={(e) => {
            currentMenuItemSetter(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.keyCode == 13 && currentMenuItem.length > 0) {
              addToMenu();
            }
          }}
        />
        <Button colorScheme="teal" size="md" m={1} onClick={addToMenu}>
          Add To Menu
        </Button>
      </Flex>
      <UnorderedList ml={7}>
        {foodDetails.menu.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </UnorderedList>
      <Flex justifyContent="space-between" alignItems="center" marginTop={4}>
        <Select
          border="1px solid black"
          bg="white"
          maxW={200}
          placeholder="Select a State"
          valie={foodDetails.state}
          onChange={(e) => {
            foodDetailsSetter((foodDetails) => {
              return { ...foodDetails, state: e.target.value };
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
          maxW={185}
          placeholder="Veg or Non-Veg"
          valie={foodDetails.type}
          onChange={(e) => {
            foodDetailsSetter((foodDetails) => {
              return { ...foodDetails, type: e.target.value };
            });
          }}
        >
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </Select>
        <Button colorScheme="teal" size="md" onClick={post}>
          Post
        </Button>
      </Flex>
    </Box>
  );
};

export default AddResources;
