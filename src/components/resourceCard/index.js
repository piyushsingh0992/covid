import React, { useState } from "react";
import { Box, Text, Icon, Stack, Flex } from "@chakra-ui/react";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete,AiFillSave,AiOutlineSave } from "react-icons/ai";
import {FiShare2} from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
const ResouceCard = () => {
  const [upvoted, upVotedSetter] = useState(false);
  const [downvoted, downVotedSetter] = useState(false);

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
      <Stack direction="row" spacing={4} marginTop={5}>
        <Flex as="a" cursor="pointer">
          <Icon as={upvoted ? ImArrowUp : BiUpvote} color="green" w={6} h={6} />
          &nbsp;<Text>(33)</Text>
        </Flex>
        <Flex as="a" cursor="pointer">
          <Icon
            as={downvoted ? ImArrowDown : BiDownvote}
            color="red"
            w={6}
            h={6}
          />
          &nbsp;<Text>(33)</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ResouceCard;
