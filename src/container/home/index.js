import React from "react";
import Navbar from "../../components/navbar";
import CovidCases from "../../components/covidCases";
import { Box } from "@chakra-ui/layout";
import News from "../../components/news";

const Home = () => {

  return (
    <div>
      <Navbar />
      <Box mx={[4, 4, 4, 5]} my={5}>
        <CovidCases />
        <News />
      </Box>
    </div>
  );
};

export default Home;
