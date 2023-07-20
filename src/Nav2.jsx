import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nav2() {
    return (
        <div>
            <Navbar bg="dark"  className='fixed-top'>
                <Container>
                    <Navbar.Brand style={{ color: "white" }} href="#home">PROF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home" style={{ color: "white" }}>Home</Nav.Link>
                            <Nav.Link href='#' style={{ color: "white" }}>About Me</Nav.Link>
                            <Nav.Link href='#' style={{ color: "white" }}>What I Do</Nav.Link>
                            <Nav.Link href='#' style={{ color: "white" }}>Resume</Nav.Link>
                            <Nav.Link href='#' style={{ color: "white" }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav2