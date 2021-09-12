import React from "react";
import Navbar from "../../components/navbar";
import { Container } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        <Tabs variant="enclosed" bg="white" minHeight="90vh">
          <TabList>
            <Tab>Settings</Tab>
            <Tab>Request's</Tab>
            <Tab>Response</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
};

export default Dashboard;
