
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';





  export default class BaseLayout extends React.Component {
    render(){
      return(
        <div>
          <Navbar color='blue' toggleable>

            <NavbarBrand href='/'>BankShot</NavbarBrand>

            <Nav navbar>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/users'>Users</NavLink>
              </NavItem>
            </Nav>

          </Navbar>
          {this.props.children}
        </div>
      )
    }
  }
