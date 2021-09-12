import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete, AiOutlineSave } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Votes from "../votes";
const ResouceCard = () => {
  return (
    <Box my={4} bg="white" py={4} px={6} borderRadius={5}>
      <Flex my={2} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">
          Cateogry
        </Text>
        <Flex alignItems="center" justifyContent="flex-end">
          <Text fontSize="lg" m={5}>
            Updated: time{" "}
          </Text>
          <Menu>
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
      </Flex>
      <Text my={2} fontSize="lg" fontWeight="semibold">
        State
      </Text>
      <Text my={2} fontSize="md">
        Description
      </Text>
      <Votes />
    </Box>
  );
};

export default ResouceCard;
