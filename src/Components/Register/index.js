import React from "react";
import {
  RegisterForm,
  RegisterPage,
  Input,
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
          <Input placeholder="Username" />
          <Label>Password</Label>
          <Input placeholder="Password" type="password" />
          <Label>Re-Type Password</Label>
          <Input placeholder="Re-Type Password" type="password" />
          <Button to="/e-auctiondetails">Register</Button>
        </RegisterForm>
        <p>
          Already Registered?<Clicker to="/login">Sign In</Clicker>
        </p>
      </RegisterPage>
    </>
  );
}
export default Register;
