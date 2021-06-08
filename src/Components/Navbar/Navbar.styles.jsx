import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  z-index: 997;
  transition: all 0.5s;
  padding: 0px 20px 0px 20px;
  text-decoration: none;
  width: 100vw;
`;

export const NavLogo = styled.div`
  margin-left: 4rem;
  font-size: 26px;
  color: #fff;
  font-weight: bold;
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 10px;
  text-align: center;
  width: 90vw;
  justify-content: end;
  align-items: center;
  margin-right: 4rem;
`;

export const NavItem = styled.div`
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 14px;
  font-weight: bold;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #007bff;
    transition: all 0.2s ease-out;
  }
`;
