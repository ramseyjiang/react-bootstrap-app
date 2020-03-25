import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar,  Nav } from "react-bootstrap";

const Navigation = () => {
  //collapseOnSelect is not stable, it works for href, but not works for router to. That's why I build it by myself.
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Navbar expanded={expanded} fixed='top' expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="/">HooksHut</Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className="mr-auto">
          <NavLink
            exact
            className='nav-link'
            to='/'
            onClick={() => setExpanded(false)}>
            Home
          </NavLink>
          <NavLink
            className='nav-link'
            to='/tasks'
            onClick={() => setExpanded(false)}>
            Tasks
          </NavLink>
          <NavLink
            className='nav-link'
            to='/contact'
            onClick={() => setExpanded(false)}>
            Contact
          </NavLink>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
