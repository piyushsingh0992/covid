import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Setting from "../setting";
import Requests from "../requests";
import SavedPost from "../savedPost";
import Responses from "../responses";
const DashBoardTabs = () => {
  return (
    <Tabs variant="enclosed" isFitted bg="white">
      <TabList bg="white">
        <Tab>Saved Posts</Tab>
        <Tab>Requests</Tab>
        <Tab>Response</Tab>
        <Tab>details</Tab>
      </TabList>
      <TabPanels>
        <TabPanel bg="#efefef" px={0}>
          <SavedPost />
        </TabPanel>
        <TabPanel bg="#efefef" px={0}>
          <Requests />
        </TabPanel>
        <TabPanel bg="#efefef" px={0}>
          <Responses />
        </TabPanel>

        <TabPanel bg="#efefef" px={0}>
          <Setting />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DashBoardTabs;
