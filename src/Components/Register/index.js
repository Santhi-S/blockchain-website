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
} from "./Register.styles.jsx";

function Register() {
  return (
    <>
      <LoginPage>
        <Title>Register</Title>
        <LoginForm>
          <Label>Username</Label>
          <Username placeholder="Username"></Username>
          <Label>Password</Label>
          <Password placeholder="Password" type="password"></Password>
          <Label>Re-Type Password</Label>
          <Password placeholder="Re-Type Password" type="password"></Password>
          <Button to="/e-auctiondetails">Register</Button>
        </LoginForm>
        <Text>
          Already Registered?<Clicker to="/login">Sign In</Clicker>
        </Text>
      </LoginPage>
    </>
  );
}
export default Register;
