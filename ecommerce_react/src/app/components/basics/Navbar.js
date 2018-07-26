import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa } from 'mdbreact';


class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (

                <Navbar color="indigo" dark expand="md" sticky="top" scrolling id="header">
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem active>
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
                    </Collapse>

                </Navbar>

        );
    }
}

export default NavbarFeatures;
