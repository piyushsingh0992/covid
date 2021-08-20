import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import FoodFilter from "../../components/foodFilter";
import FoodCard from "../../components/foodCard";
const Food = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        <FoodFilter />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </Container>
    </div>
  );
};

export default Food;
