import React, { useEffect, useState } from "react";
import { Grid, Box } from "@chakra-ui/layout";
import { Text, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getCases } from "../../container/home/casesSlice";
import { Spinner } from "@chakra-ui/react";
const CovidCases = ({ currentStateDetails, currentStateDetailsSetter }) => {
  const cases = useSelector((state) => state.cases);
  const [loader, loaderSetter] = useState(true);
  const dispatch = useDispatch();
  const [casesDetails, casesDetailsSetter] = useState([]);
  const [currentState, currentStateSetter] = useState("");

  useEffect(() => {
    let details = casesDetails.find((item) => item.state === currentState);
    details && currentStateDetailsSetter(details);
  }, [currentState]);

  useEffect(() => {
    currentStateSetter(currentStateDetails.state);
  }, [currentStateDetails]);

  useEffect(() => {
    if (loader) {
      if (cases.status === "idle") {
        dispatch(getCases());
      } else if (cases.status === "fullfilled") {
        casesDetailsSetter(cases.casesArray);
        currentStateDetailsSetter(cases.casesArray[0]);
        currentStateSetter(cases.casesArray[0]?.state);
        loaderSetter(false);
      } else if (cases.status === "rejected") {
        loaderSetter(false);
      }
    }
  }, [cases]);

  return (
    <Box>
      <Select
        boxShadow="md"
        bg="white"
        borderColor="white"
        maxW={["100vw", "100vw", "20vw"]}
        defaultValue="option3"
        disabled={loader}
        onChange={(e) => {
          currentStateSetter(e.target.value);
        }}
        value={currentState}
      >
        {casesDetails.map((item) => {
          return <option value={item.state}>{item.state}</option>;
        })}
      </Select>
      <Grid templateColumns="repeat(5, 1fr)" gap={[2, 2, 6]} my={5}>
        <Box
          textAlign="center"
          w="100%"
          h={[100, 100, 150]}
          borderRadius={5}
          boxShadow="md"
          bg="white"
          p={[2, 2, 4]}
          color="red"
        >
          <Text fontSize={["md", "md", "2xl"]}>Total cases </Text>
          {loader ? (
            <Box py={3}>
              <Spinner />
            </Box>
          ) : (
            <Text fontSize={["md", "md", "xl"]} py={2}>
              {currentStateDetails.confirmed}
            </Text>
          )}
        </Box>
        <Box
          textAlign="center"
          w="100%"
          h={[100, 100, 150]}
          borderRadius={5}
          boxShadow="md"
          bg="white"
          p={[2, 2, 4]}
          color="red"
        >
          <Text fontSize={["md", "md", "2xl"]}>Active Cases</Text>
          {loader ? (
            <Box py={3}>
              <Spinner />
            </Box>
          ) : (
            <Text fontSize={["md", "md", "xl"]} py={2}>
              {currentStateDetails.active}
            </Text>
          )}
        </Box>
        <Box
          textAlign="center"
          w="100%"
          h={[100, 100, 150]}
          borderRadius={5}
          boxShadow="md"
          bg="white"
          p={[2, 2, 4]}
          color="red"
        >
          <Text fontSize={["md", "md", "2xl"]}>total Deaths</Text>
          {loader ? (
            <Box py={3}>
              <Spinner />
            </Box>
          ) : (
            <Text fontSize={["md", "md", "xl"]} py={2}>
              {currentStateDetails.deaths}
            </Text>
          )}
        </Box>
        <Box
          textAlign="center"
          textAlign="center"
          w="100%"
          h={[100, 100, 150]}
          borderRadius={5}
          boxShadow="md"
          bg="white"
          p={[2, 2, 4]}
          color="red"
        >
          <Text fontSize={["md", "md", "2xl"]}>Delta variant Cases</Text>
          {loader ? (
            <Box py={3}>
              <Spinner />
            </Box>
          ) : (
            <Text fontSize={["md", "md", "xl"]} py={2}>
              {currentStateDetails.deltaconfirmed}
            </Text>
          )}
        </Box>

        <Box
          textAlign="center"
          textAlign="center"
          w="100%"
          h={[100, 100, 150]}
          borderRadius={5}
          boxShadow="md"
          bg="white"
          p={[2, 2, 4]}
          color="green"
        >
          <Text fontSize={["md", "md", "2xl"]}>Total recovered</Text>
          {loader ? (
            <Box py={3}>
              <Spinner />
            </Box>
          ) : (
            <Text fontSize={["md", "md", "xl"]} py={2}>
              {currentStateDetails.recovered}
            </Text>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default CovidCases;
