import styled from "styled-components";
import background from "../../bg-hero1.jpg";

export const HeroContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding: 160px;
  height: 100vh;
  overflow: hidden;
`;

export const HeroRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 120px 0px 0px 20px;
`;

export const Divider = styled.div`
  width: 20px;
  height: auto;
  display: inline-block;
`;

export const HeroImageWrapper = styled.div`
  max-width: 95%;
  padding-right: 0;
  margin: 0 0 0 10px;
`;
