import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
const Navber = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='text-dark'>
            <Container>
                <Navbar.Brand href="#home" style={{fontFamily: 'Poppins'}}>ATools</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#StartFree "><button className='btn btn-secondary'>Start Free Trial</button></Nav.Link>
                        <Nav.Link eventKey={2} href="#navbar">
                            <button className='btn btn-warning'>Login</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;