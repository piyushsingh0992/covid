import React from "react";
import Navbar from "../../components/navbar";
import { Container } from "@chakra-ui/react";
import DashBoardTabs from "../../components/dashBoardTabs";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        <DashBoardTabs />
      </Container>
    </div>
  );
};

export default Dashboard;
