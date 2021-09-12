import React from "react";
import { Text, Box, Icon } from "@chakra-ui/react";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import useLogout from "../../customHooks/logout";
const Logout = () => {
  const token = useSelector((state) => state.auth.token);
  const logout = useLogout();
  return token ? (
    <Box w={["50px", "50px", "70px"]} onClick={logout}>
      <Icon as={IoLogOut} w={6} h={6} d={["block", "block", "none"]} />
      <Text fontSize="md" d={["none", "none", "block"]}>
        Logout
      </Text>
    </Box>
  ) : (
    <Link to="/login">
      <Box w={["50px", "50px", "70px"]}>
        <Icon as={CgProfile} w={6} h={6} d={["block", "block", "none"]} />
        <Text fontSize="md" d={["none", "none", "block"]}>
          Login
        </Text>
      </Box>
    </Link>
  );
};

export default Logout;
