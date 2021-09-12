import React, { useState } from "react";
import { Text, Icon, Stack, Flex } from "@chakra-ui/react";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

const Votes = () => {
  const [upvoted, upVotedSetter] = useState(false);
  const [downvoted, downVotedSetter] = useState(false);
  return (
    <Stack direction="row" spacing={4} marginTop={5}>
      {upvoted ? (
        <Flex as="a" cursor="pointer">
          <Icon as={ImArrowUp} color="green" w={6} h={6} />
          &nbsp;<Text>(33)</Text>
        </Flex>
      ) : (
        <Flex as="a" cursor="pointer">
          <Icon as={BiUpvote} color="green" w={6} h={6} />
          &nbsp;<Text>(33)</Text>
        </Flex>
      )}
      {downvoted ? (
        <Flex as="a" cursor="pointer">
          <Icon as={ImArrowDown} color="red" w={6} h={6} />
          &nbsp;<Text>(33)</Text>
        </Flex>
      ) : (
        <Flex as="a" cursor="pointer">
          <Icon as={BiDownvote} color="red" w={6} h={6} />
          &nbsp;<Text>(33)</Text>
        </Flex>
      )}
    </Stack>
  );
};

export default Votes;
