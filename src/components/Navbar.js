import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownItem, NavbarText, DropdownToggle, DropdownMenu } from 'reactstrap'
import { Link } from "react-router-dom";

export default function Navbarr() {

    return (
        <>
            <Navbar color="dark" dark expand="md" fixed="top" full light>
                <NavbarBrand>
                    <Link to="/">

                        Home
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink>

                                <Link to="/Journaling2">Journaling2</Link>
                            </NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink>

                                <Link to="/Journaling3">Journaling3</Link>
                            </NavLink>
                        </NavItem>

                    </Nav>

                </Collapse>
            </Navbar>
        </>

    )

}
