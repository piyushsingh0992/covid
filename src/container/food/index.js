import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import FoodFilter from "../../components/foodFilter";
const Food = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        <FoodFilter />
      </Container>
    </div>
  );
};

export default Food;
