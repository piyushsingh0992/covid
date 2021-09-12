import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Container } from "@chakra-ui/react";
import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";
import { Routes, Route } from "react-router-dom";
const Login = () => {
  const [currentModal, currentModalSetter] = useState(true);
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        {currentModal ? (
          <SignIn currentModalSetter={currentModalSetter} />
        ) : (
          <SignUp currentModalSetter={currentModalSetter} />
        )}
      </Container>
    </div>
  );
};

export default Login;
