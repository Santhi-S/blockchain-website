import React from "react";
import {
  LoginForm,
  LoginPage,
  Input,
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
          <Input placeholder="Username" />
          <Label>Password</Label>
          <Input placeholder="Password" type="password" />
          <Button to="/e-auctiondetails">Login</Button>
        </LoginForm>
        <p>
          Not Registered?<Clicker to="/register">Create an account</Clicker>
        </p>
      </LoginPage>
    </>
  );
}
export default Login;
