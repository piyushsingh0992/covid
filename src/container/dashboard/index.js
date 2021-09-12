import React from "react";
import Navbar from "../../components/navbar";
import { Container } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Setting from "../../components/setting";
import Requests from "../../components/requests";
import SavedPost from "../../components/savedPost";
import Responses from "../../components/responses";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        <Tabs variant="enclosed" bg="white">
          <TabList bg="white">
            <Tab>details</Tab>
            <Tab>Request's</Tab>
            <Tab>Response</Tab>
            <Tab>Saved Post's</Tab>
          </TabList>
          <TabPanels>
            <TabPanel bg="#efefef" px={0}>
              <Setting />
            </TabPanel>
            <TabPanel bg="#efefef" px={0}>
              <Requests />
            </TabPanel>
            <TabPanel bg="#efefef" px={0}>
              <Responses />
            </TabPanel>
            <TabPanel bg="#efefef" px={0}>
              <SavedPost />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
};

export default Dashboard;
