import React from "react";
import {
  LoginForm,
  LoginPage,
  Username,
  Password,
  Text,
  Clicker,
  Button,
  Title,
  Label,
} from "./Login.styles.jsx";

function Login() {
  return (
    <>
      <LoginPage>
        <Title>Log In</Title>
        <LoginForm>
          <Label>Username</Label>
          <Username placeholder="Username"></Username>
          <Label>Password</Label>
          <Password placeholder="Password" type="password"></Password>
          <Button to="/e-auctiondetails">Login</Button>
        </LoginForm>
        <Text>
          Not Registered?<Clicker to="/register">Create an account</Clicker>
        </Text>
      </LoginPage>
    </>
  );
}
export default Login;
