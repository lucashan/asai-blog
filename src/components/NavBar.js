import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Link to="/">
              <Navbar.Brand href="/">Cook With Ai</Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
              <Link to="/about">
                <Nav.Link href="/about">About</Nav.Link>
              </Link>
            </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="info">Search</Button>
          </Form>
      </Navbar>
    );
}

export default NavBar;