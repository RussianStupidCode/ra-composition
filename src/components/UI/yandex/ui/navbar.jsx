import React from "react";
import List from "../common/list";
import ListItem from "../common/listItem";
import Link from "../common/link";
import Text from "../common/text";

/**
 * Навгиационное меню над строкой поиска
 */
const Navbar = ({ navList }) => {
  return (
    <List direction="row">
      {navList.map((header) => (
        <ListItem>
          <Link>
            <Text text={header}></Text>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navbar;
