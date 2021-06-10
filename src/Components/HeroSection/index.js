import React from "react";
import {
  HeroContainer,
  ButtonWrapper,
  Divider,
  Button,
} from "./HeroSection.styles.jsx";

function HeroSection() {
  return (
    <>
      <HeroContainer>
        <ButtonWrapper>
          <Button to="/login">Login</Button>
          <Divider />
          <Button to="/register">Register</Button>
        </ButtonWrapper>
      </HeroContainer>
    </>
  );
}
export default HeroSection;
