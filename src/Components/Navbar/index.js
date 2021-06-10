import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import {
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBar,
} from "./Navbar.styles.jsx";
import Dropdown from "../Dropdown/index";
import Dropdown2 from "../Dropdown2/index";

function Navbar({ toggle }) {
  const [, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 900) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 900) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 900) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 900) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <>
      <NavBar>
        <NavLogo>Kerala Agricultue EAuction</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Participants
              <FaCaretDown />
            </NavLinks>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
            <NavLinks to="/" onClick={closeMobileMenu}>
              AWRMS in Kerala
              <FaCaretDown />
            </NavLinks>
            {dropdown2 && <Dropdown2 />}
          </NavItem>
          <NavItem>
            <NavLinks to="/e-auctiondetails" onClick={closeMobileMenu}>
              More Info
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/e-auctiondetails" onClick={closeMobileMenu}>
              e-Auction
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavBar>
    </>
  );
}

export default Navbar;
