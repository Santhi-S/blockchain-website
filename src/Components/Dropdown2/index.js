import React, { useState } from "react";
import { MenuItems } from "./MenuItems2";
import {
  DropdownList,
  DropdownMenu,
  DropdownLink,
} from "./Dropdown2.styles.jsx";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <DropdownMenu onClick={handleClick}>
        {MenuItems.map((item, index) => {
          return (
            <DropdownList key={index}>
              <DropdownLink
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </DropdownLink>
            </DropdownList>
          );
        })}
      </DropdownMenu>
    </>
  );
}

export default Dropdown;
