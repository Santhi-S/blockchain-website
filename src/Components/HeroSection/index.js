import React from "react";
import {
  HeroContainer,
  HeroRow,
  ButtonWrapper,
  Divider,
} from "./HeroSection.styles.jsx";
import { Button } from "../Button/Button.styles.jsx";

function HeroSection() {
  return (
    <>
      <HeroContainer>
        <HeroRow>
          <ButtonWrapper>
            <Button to="/login">Login</Button>
            <Divider />
            <Button to="/register">Register</Button>
          </ButtonWrapper>
        </HeroRow>
      </HeroContainer>
    </>
  );
}
export default HeroSection;
