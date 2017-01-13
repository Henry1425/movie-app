import React from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../../logo.svg'
// import './styles.css;'

const NavBar = () => (
<Menu>
<Menu.Menu>
  <Menu.Item>
    My React Movie App <img src={logo} alt="logo" className="NavBar-logo" />
  </Menu.Item>
</Menu.Menu>
<Menu.Menu position="right">
   <Menu.Item>
      Sign Up
   </Menu.Item>
   <Menu.Item>
      Login
   </Menu.Item>
</Menu.Menu>
</Menu>
);

export default NavBar;
