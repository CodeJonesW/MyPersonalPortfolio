import React, { Component } from 'react';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from "shards-react";

export default class MyNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {
        return (
            <Navbar id="navBaR" type="dark" theme="primary" expand="md">
                <NavbarBrand href="/">William Jones</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>

                        <NavItem>
                            <NavLink href="/contact">
                                Contact
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects">
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/art">
                                Art
                            </NavLink>
                        </NavItem>

                    </Nav>

                    <Nav navbar className="ml-auto">

                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}