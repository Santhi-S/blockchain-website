import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownMenu = styled.ul`
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  background: red;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
`;

export const DropdownList = styled.li`
  background: #fff;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
  }
`;

export const DropdownLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #004289;
  padding: 16px;
  font-size: 14px;
`;
