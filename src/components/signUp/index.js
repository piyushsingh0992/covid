import { useState } from "react";
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
  Select,
} from "@chakra-ui/react";
import logo from "../../assets/brand-icon-2.png";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { PhoneIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import { stateData } from "../../utils/constant";
import { MdEmail } from "react-icons/md";
const CMdEmail = chakra(MdEmail);
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUp = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { currentModalSetter } = props;
  const handleShowClick = () => setShowPassword(!showPassword);
  const [loader, loaderSetter] = useState(false);
  const [signUpDetails, signUpDetailsSetter] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    state: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    signUpDetailsSetter((state) => {
      return {
        ...state,
        [name]: event.target.value,
      };
    });
  };
  const [confirmPassword, confirmPasswordSetter] = useState("");

  function signingUp() {
    if (signUpDetails.name.length < 1) {
      toast.error("Please enter your name");
      return;
    }
    if (signUpDetails.email.length < 1) {
      toast.error("Please enter email");
      return;
    }
    if (!signUpDetails.state) {
      toast.error("Please Select a State");
      return;
    }

    if (signUpDetails.number.length < 10) {
      toast.error("Please enter Correct contact Number");
      return;
    }
    if (signUpDetails.password.length < 1) {
      toast.error("Please enter password");
      return;
    }

    if (signUpDetails.password !== confirmPassword) {
      toast.error("Password didn't match try again");
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
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={signUpDetails.name}
                    onChange={changeHandler}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CMdEmail color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    name="email"
                    value={signUpDetails.email}
                    onChange={changeHandler}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Select
                    color="gray.500"
                    placeholder="Select a State"
                    valie={signUpDetails.state}
                    name="state"
                    onChange={changeHandler}
                  >
                    {stateData.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </Select>
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input
                    type="number"
                    placeholder="Number"
                    name="number"
                    value={signUpDetails.number}
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
                    name="password"
                    value={signUpDetails.password}
                    onChange={changeHandler}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
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
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      confirmPasswordSetter(e.target.value);
                    }}
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
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={signingUp}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>

      <Flex>
        Already a user?
        <Link
          color="teal.500"
          href="#"
          onClick={() => {
            currentModalSetter((value) => !value);
          }}
        >
          Sign In
        </Link>
      </Flex>
    </Flex>
  );
};

export default SignUp;
