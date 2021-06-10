import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 997;
  transition: all 0.5s;
  width: 100vw;
  font-weight: bold;
`;

export const NavLogo = styled.div`
  margin-left: 4rem;
  font-size: 26px;
  color: #fff;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4rem;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 14px;
  padding-inline: 10px;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #007bff;
    transition: all 0.2s ease-out;
  }
`;
