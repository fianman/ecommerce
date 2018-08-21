import React from 'react';
import { Navbar, NavbarNav, NavItem, NavLink, Fa } from 'mdbreact';


class NavbarFeatures extends React.Component {
    render() {
        return (
            <div className="container-fluid">
          <Navbar color="indigo" dark expand="md" sticky="top" scrolling id="header">
            <NavbarNav right>
              <NavItem>
                  <NavLink to="#">Diet Plan</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="#">Batch Calendar</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="#">FAQ</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="#">Testimonials</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="#">
                      <Fa className="ml-1" icon="shopping-cart" />
                  </NavLink>
              </NavItem>
              <NavItem data-toggle="tooltip" data-placement="bottom-right" title="Login/Register">
                  <NavLink to="/login">
                      <Fa className="ml-1" icon="user" />
                  </NavLink>
              </NavItem>
            </NavbarNav>
          </Navbar>
          </div>
        );
    }
}

export default NavbarFeatures;
