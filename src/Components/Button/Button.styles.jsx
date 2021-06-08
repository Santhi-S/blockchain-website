import styled from "styled-components";
import { Link } from "react-router-dom";

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
