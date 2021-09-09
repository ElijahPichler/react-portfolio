import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" fixed="top">
                <Container  >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="mx-auto">
                           <span><Nav.Link href="#home" className="nav">Home</Nav.Link></span> 
                           <span><Nav.Link href="#projects" className="nav">Projects</Nav.Link></span> 
                           <span><Nav.Link href="#aboutMeContainer" className="nav">About Me</Nav.Link></span> 
                           <span><Nav.Link href="#contact" className="nav">Contact Me</Nav.Link></span> 
                            
                        </Nav>
                  
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
