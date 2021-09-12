import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import logo from "../../assets/brand-icon-2.png";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import {MdEmail} from "react-icons/md";
const CMdEmail=chakra(MdEmail);
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const App = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loader, loaderSetter] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const { currentModalSetter, signInDetails, signInDetailsSetter } = props;

  useEffect(() => {
    if (loader) {
      signingIn();
    }
  }, [loader]);

  const changeHandler = (event) => {
    const name = event.target.name;
    signInDetailsSetter((state) => {
      return {
        ...state,
        [name]: event.target.value,
      };
    });
  };

  function signingIn() {
    if (signInDetails.email.length < 1) {
      toast.error("please enter email");
      return;
    }
    if (signInDetails.password.length < 1) {
      toast.error("please enter password");
      return;
    }
    alert("hey");
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Image src={logo} h={20} />
        <Heading>SEHYOG</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CMdEmail color="gray.300" />}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="email address"
                    value={signInDetails.email}
                    onChange={changeHandler}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={signInDetails.password}
                    onChange={changeHandler}
                    name="password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={() => {
                  loaderSetter(true);
                }}
              >
                Login
              </Button>

              <Button
                borderRadius={0}
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={() => {
                  signInDetailsSetter({
                    email: "",
                    password: "",
                  });
                  loaderSetter(true);
                }}
              >
                Login as Guest
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Flex>
        New to us?
        <Link
          color="teal.500"
          onClick={() => {
            currentModalSetter((value) => !value);
          }}
        >
          Sign Up
        </Link>
      </Flex>
    </Flex>
  );
};

export default App;
