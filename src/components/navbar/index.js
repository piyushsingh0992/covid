import React from "react";
import { Flex, Spacer, Heading, Text, Center, Image } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { IoFastFood } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";
import { RiDashboardFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import brandIcon from "../../assets/brand-icon-2.png";

const Navbar = () => {
  return (
    <Flex
      p="1"
      background="white"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex p="2" flex="1" alignItems="center">
        <Image boxSize="30px" objectFit="cover" src={brandIcon} alt="Sehyog" />
        <Heading size="md">SEHYOG</Heading>
      </Flex>
      <Spacer />
      <Flex flex="1" justifyContent="space-between">
        <Center w={["50px", "50px", "50px"]}>
          <Icon as={IoFastFood} w={6} h={6} d={["block", "block", "none"]} />
          <Text fontSize="md" d={["none", "none", "block"]}>
            Food
          </Text>
        </Center>
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
        <Center w={["50px", "50px", "100px"]}>
          <Icon as={ImHappy2} w={6} h={6} d={["block", "block", "none"]} />
          <Text fontSize="md" d={["none", "none", "block"]}>
            Wall Of Hope
          </Text>
        </Center>
        <Center w={["50px", "50px", "90px"]}>
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
        <Center w={["50px", "50px", "80px"]}>
          <Icon as={IoLogOut} w={6} h={6} d={["block", "block", "none"]} />
          <Text fontSize="md" d={["none", "none", "block"]}>
            Logout
          </Text>
        </Center>
      </Flex>
    </Flex>
  );
};

export default Navbar;
