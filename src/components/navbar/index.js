import React from "react";
import { Flex, Spacer, Heading, Text, Center, Image,Box,Icon } from "@chakra-ui/react";
import { IoFastFood } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import brandIcon from "../../assets/brand-icon-2.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex
      p="1"
      background="white"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/">
        <Flex p="2" flex="1" alignItems="center">
          <Image
            boxSize="30px"
            objectFit="cover"
            src={brandIcon}
            alt="Sehyog"
          />
          <Heading size="md">SEHYOG</Heading>
        </Flex>
      </Link>
      <Spacer />
      <Spacer />
      <Flex flex="1" justifyContent="space-between">
        <Link to="/food">
          <Center w={["50px", "50px", "50px"]}>
            <Icon as={IoFastFood} w={6} h={6} d={["block", "block", "none"]} />

            <Text fontSize="md" d={["none", "none", "block"]}>
              Food
            </Text>
          </Center>
        </Link>
        <Link to="/resources">
          <Center w={["50px", "50px", "100px"]}>
            <Icon
              as={FaHandsHelping}
              w={6}
              h={6}
              d={["block", "block", "none"]}
            />
            <Text fontSize="md" d={["none", "none", "block"]}>
              Resources
            </Text>
          </Center>
        </Link>
        <Link to="/plasma">
          <Center w={["50px", "50px", "100px"]}>
          
            <Icon as={GiHealthNormal} w={6} h={6} d={["block", "block", "none"]} />
            <Text fontSize="md" d={["none", "none", "block"]}>
              Plasma Donar
            </Text>
          </Center>
        </Link>
        <Link to="/dashboard">
          <Center w={["50px", "50px", "100px"]}>
            <Icon
              as={RiDashboardFill}
              w={6}
              h={6}
              d={["block", "block", "none"]}
            />
            <Text fontSize="md" d={["none", "none", "block"]}>
              DashBoard
            </Text>
          </Center>
          </Link>
        <Link to="/login">
        <Box w={["50px", "50px", "70px"]}>
          <Icon as={IoLogOut} w={6} h={6} d={["block", "block", "none"]} />
          <Text fontSize="md" d={["none", "none", "block"]}>
            Login
          </Text>
        </Box>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
