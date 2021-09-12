import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Container } from "@chakra-ui/react";
import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";

const Login = () => {
  const [currentModal, currentModalSetter] = useState(true);
  const [signInDetails, signInDetailsSetter] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <Navbar />
      <Container maxWidth={750} my={3}>
        {currentModal ? (
          <SignIn
            currentModalSetter={currentModalSetter}
            signInDetails={signInDetails}
            signInDetailsSetter={signInDetailsSetter}
          />
        ) : (
          <SignUp
            currentModalSetter={currentModalSetter}
            signInDetailsSetter={signInDetailsSetter}
          />
        )}
      </Container>
    </div>
  );
};

export default Login;
