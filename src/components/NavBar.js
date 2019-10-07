import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

export default function NavBar() {
    return (
        <Nav>
            <NavItem>
                <NavLink active href="#">
                    Home
            </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Contact Link</NavLink>
            </NavItem>
        </Nav>
    );
}