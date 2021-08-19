import React, { useState } from "react";
import { Box, Text, Icon, Stack, Flex } from "@chakra-ui/react";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
const ResouceCard = () => {
  const [upvoted, upVotedSetter] = useState(false);
  const [downvoted, downVotedSetter] = useState(false);

  return (
    <Box my={4} bg="white" py={4} px={6} borderRadius={5}>
      <Flex my={2} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">
          Cateogry
        </Text>
        <Text fontSize="lg">Updated: time</Text>
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
