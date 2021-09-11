import React from "react";
import Navbar from "../../components/navbar";
import PlasmaFilter from "../../components/plasmaFilter";
import { Container } from "@chakra-ui/react";
import PlasmaCard from "../../components/plasmaCard";

import AddPlasma from "../../components/addPlasma";
const Plasma = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        <AddPlasma/>
        <PlasmaFilter />
        <PlasmaCard />
        <PlasmaCard />
        <PlasmaCard />
      </Container>
    </div>
  );
};

export default Plasma;
