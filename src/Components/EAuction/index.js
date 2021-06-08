import React from "react";
import {
  LoginForm,
  LoginPage,
  Username,
  Button,
  Title,
  FormWrapper,
  Label,
  Select,
} from "./EAuction.styles";

function EAuction() {
  return (
    <>
      <LoginPage>
        <Title>E-Auction Details</Title>
        <LoginForm>
          <FormWrapper>
            <Label>Commodity:</Label>
            <Select>
              <option>Yard lay beans</option>
              <option>Brinjal</option>
              <option>Banana</option>
              <option>Ginger</option>
              <option>Papaya</option>
              <option>Passion Fruit</option>
            </Select>
          </FormWrapper>
          <FormWrapper>
            <Label>Duration:</Label>
            <Username />
          </FormWrapper>
          <FormWrapper>
            <Label>Next Auction:</Label>
            <Username />
          </FormWrapper>
          <Button to="/liveauction">Enter Live Auction</Button>
        </LoginForm>
      </LoginPage>
    </>
  );
}
export default EAuction;
