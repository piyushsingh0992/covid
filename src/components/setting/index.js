import { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  FormControl,
  Select,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { PhoneIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import { stateData } from "../../utils/constant";
const CFaUserAlt = chakra(FaUserAlt);
const CMdEmail = chakra(MdEmail);

const Setting = () => {
  const [loader, loaderSetter] = useState(false);
  const [updateDetails, updateDetailsSetter] = useState({
    name: "",
    email: "",
    number: "",
    state: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    updateDetailsSetter((state) => {
      return {
        ...state,
        [name]: event.target.value,
      };
    });
  };

  function updating() {
    if (updateDetails.name.length < 1) {
      toast.error("please enter your name");
      return;
    }
    if (updateDetails.email.length < 1) {
      toast.error("please enter email");
      return;
    }
    if (!updateDetails.state) {
      toast.error("please Select a State");
      return;
    }
    if (updateDetails.number.length < 10) {
      toast.error("please enter Correct Phone number");
      return;
    }

    alert("hey");
  }

  return (
    <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
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
            value={updateDetails.name}
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
            value={updateDetails.email}
            onChange={changeHandler}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <InputGroup>
          <Select
            color="gray.500"
            placeholder="Select a State"
            valie={updateDetails.state}
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
            value={updateDetails.number}
            onChange={changeHandler}
          />
        </InputGroup>
      </FormControl>

      <Button
        borderRadius={0}
        type="submit"
        variant="solid"
        colorScheme="teal"
        width="full"
        onClick={updating}
      >
        Update
      </Button>
    </Stack>
  );
};

export default Setting;
