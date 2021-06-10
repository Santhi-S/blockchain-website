import styled from "styled-components";
import background from "../../bg-hero1.jpg";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 150px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 120px 0px 0px 20px;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: 12px 30px;
  color: #000;
  font-size: 16px;
  text-decoration: none;
  border: 2px solid #000;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
    border: 2px solid #fff;
  }
`;

export const Divider = styled.div`
  width: 20px;
  height: auto;
  display: inline-block;
`;
