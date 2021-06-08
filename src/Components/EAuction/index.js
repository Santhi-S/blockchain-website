import React from "react";
import {
  EAuctionForm,
  EAuctionPage,
  Input,
  Button,
  Title,
  FormWrapper,
  Label,
  Select,
} from "./EAuction.styles";

function EAuction() {
  return (
    <>
      <EAuctionPage>
        <Title>E-Auction Details</Title>
        <EAuctionForm>
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
            <Input />
          </FormWrapper>
          <FormWrapper>
            <Label>Next Auction:</Label>
            <Input />
          </FormWrapper>
          <Button to="/liveauction">Enter Live Auction</Button>
        </EAuctionForm>
      </EAuctionPage>
    </>
  );
}
export default EAuction;
