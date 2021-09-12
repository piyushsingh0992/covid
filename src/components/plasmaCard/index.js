import React from "react";

import { Flex, Text, Heading, Button, Box } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete,AiFillSave,AiOutlineSave } from "react-icons/ai";
import {FiShare2} from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const PlasmaCard = () => {
  return (
    <Flex
      justifyContent="space-between"
      p={5}
      my={5}
      boxShadow="md"
      bg="white"
      borderRadius={5}
      position="relative"
    >
      <Box>
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
      </Box>
      <Menu position="absolute" top={5} right={5}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BsThreeDotsVertical />}
          variant="outline"
        />
        <MenuList>
        <MenuItem icon={<FiShare2 />}>Copy Link</MenuItem>
            <MenuItem icon={<AiOutlineSave />}>Save</MenuItem>
          <MenuItem icon={<AiFillDelete />}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default PlasmaCard;
