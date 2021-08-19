import React from "react";
import { Container } from "@chakra-ui/react";

import Navbar from "../../components/navbar";
import AddResources from "../../components/addResources";
import ResouceCard from "../../components/resourceCard";
import ResouceFilter from "../../components/resouceFilters";
const Resources = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        <AddResources />
        <ResouceFilter />
        <ResouceCard />
      </Container>
    </div>
  );
};

export default Resources;
