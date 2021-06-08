import React from "react";
import {
  RegisterForm,
  RegisterPage,
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
      <RegisterPage>
        <Title>Register</Title>
        <RegisterForm>
          <Label>Username</Label>
          <Username placeholder="Username"></Username>
          <Label>Password</Label>
          <Password placeholder="Password" type="password"></Password>
          <Label>Re-Type Password</Label>
          <Password placeholder="Re-Type Password" type="password"></Password>
          <Button to="/e-auctiondetails">Register</Button>
        </RegisterForm>
        <Text>
          Already Registered?<Clicker to="/login">Sign In</Clicker>
        </Text>
      </RegisterPage>
    </>
  );
}
export default Register;
