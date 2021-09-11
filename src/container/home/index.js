import React, { useState } from "react";
import Navbar from "../../components/navbar";
import CovidCases from "../../components/covidCases";
import { Box } from "@chakra-ui/layout";
import News from "../../components/news";
import Map from "../../components/map";
const Home = () => {
  const [currentStateDetails, currentStateDetailsSetter] = useState({});
  return (
    <div>
      <Navbar />
      <Box mx={[4, 4, 4, 5]} my={5}>
        <CovidCases
          currentStateDetails={currentStateDetails}
          currentStateDetailsSetter={currentStateDetailsSetter}
        />
        <Map
          currentStateDetails={currentStateDetails}
          currentStateDetailsSetter={currentStateDetailsSetter}
        />
        <News />
      </Box>
    </div>
  );
};

export default Home;
