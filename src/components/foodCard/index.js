import React from "react";

import {
  Flex,
  Text,
  Image,
  Heading,
  Link,
  Box,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import urlToImage from "../../assets/brand-icon-2.png";
const NewsCard = (props) => {
  return (
    <Box p={5} boxShadow="md" bg="white" my={5} borderRadius={5}>
      <Flex marginBottom={5} as="a">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={urlToImage}
          marginRight={5}
          bg="red"
        />
        <Flex flexDirection="column" justifyContent="flex-start">
          <Flex
            minHeight="100px"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Text fontSize="xl">Samay Food company</Text>
            <Text mt={1}>veg/non-veg</Text>
            <Text mt={2}>Menu Today</Text>
          </Flex>
          <UnorderedList mt={2}>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
      <Button color="white" bg="teal">
        Request Food
      </Button>
    </Box>
  );
};

export default NewsCard;
