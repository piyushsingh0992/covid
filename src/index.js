import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#efefef",
        color: "black",
      },
      a: {
        _hover: {
          textDecoration: "none !important",
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
