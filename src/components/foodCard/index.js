import React from "react";
import {
  Flex,
  Text,
  Image,
  Box,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import urlToImage from "../../assets/brand-icon-2.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { IconButton } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const NewsCard = (props) => {
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
      <Box  >
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
      <Menu position="absolute" top={5} right={5}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BsThreeDotsVertical />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<AiFillDelete />}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NewsCard;
