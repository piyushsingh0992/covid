import React, { useEffect, useState } from "react";
import { Grid, Box } from "@chakra-ui/layout";
import { Text, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getCases } from "../../container/home/casesSlice";
import { Spinner } from "@chakra-ui/react";
const CovidCases = () => {
  const cases = useSelector((state) => state.cases);
  const [loader, loaderSetter] = useState(true);
  const dispatch = useDispatch();
  const [casesDetails, casesDetailsSetter] = useState([]);
  const [currentState, currentStateSetter] = useState("");
  const [currentStateDetails, currentStateDetailsSetter] = useState({
    activeCases: "",
    newInfected: "",
    recovered: "",
    newRecovered: "",
    totalInfected: "",
    region: "",
  });

  useEffect(() => {
    let details = casesDetails.find((item) => item.region === currentState);
    details && currentStateDetailsSetter(details);
  }, [currentState]);

  useEffect(() => {
    if (cases.status === "idle") {
      dispatch(getCases());
    } else if (cases.status === "fullfilled") {
      casesDetailsSetter(cases.casesArray);
      currentStateSetter(cases.casesArray[0]?.region);
      loaderSetter(false);
    } else if (cases.status === "rejected") {
      loaderSetter(false);
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
          return <option value={item.region}>{item.region}</option>;
        })}
      </Select>
      <Grid templateColumns="repeat(5, 1fr)" gap={[2, 2, 6]} my={5}>
        <Box
          textAlign="center"
          w="100%"
          h={[100,100,150]}
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
              {currentStateDetails.totalInfected}
            </Text>
          )}
        </Box>
        <Box
          textAlign="center"
          w="100%"
          h={[100,100,150]}
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
              {currentStateDetails.activeCases}
            </Text>
          )}
        </Box>
        <Box
          textAlign="center"
          w="100%"
          h={[100,100,150]}
          borderRadius={5}
          boxShadow="md"
          bg="white"
          p={[2, 2, 4]}
          color="red"
        >
          <Text fontSize={["md", "md", "2xl"]}>New cases</Text>
          {loader ? (
            <Box py={3}>
              <Spinner />
            </Box>
          ) : (
            <Text fontSize={["md", "md", "xl"]} py={2}>
              {currentStateDetails.newInfected}
            </Text>
          )}
        </Box>

        <Box
          textAlign="center"
          textAlign="center"
          w="100%"
          h={[100,100,150]}
          borderRadius={5}
          boxShadow="md"
          bg="white"
          p={[2, 2, 4]}
          color="green"
        >
          <Text fontSize={["md", "md", "2xl"]}>New recovered</Text>
          {loader ? (
            <Box py={3}>
              <Spinner />
            </Box>
          ) : (
            <Text fontSize={["md", "md", "xl"]} py={2}>
              {currentStateDetails.newRecovered}
            </Text>
          )}
        </Box>
        <Box
          textAlign="center"
          textAlign="center"
          w="100%"
          h={[100,100,150]}
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
