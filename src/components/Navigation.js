import react from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import Logo from '../resources/images/riu-logo.png'
import "../styles/navigation.css";



function Navigation(){
    const [isShownExplore, setIsShownExplore] = useState(false);
    const [isShownWork, setIsShownWork] = useState(false);
    return(

        <Navbar  clasName = "nbar" bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img className="header_logo" src={Logo} alt="RIU logo" /> </ Navbar.Brand >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        
          <NavDropdown title="Explore" id="dropdown-basic" className="custom-dropdown-btn" onMouseEnter={() => setIsShownExplore(true)}
        onMouseLeave={() => setIsShownExplore(false)} show={isShownExplore} >
            <NavDropdown.Item href="#action/3.1" id="navitem">About us</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" id="navitem">Team members</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" id="navitem">Where are we now</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Work" id="dropdown-basic" onMouseEnter={() => setIsShownWork(true)}
        onMouseLeave={() => setIsShownWork(false)} show={isShownWork}>
            <NavDropdown.Item href="#action/3.1" id="navitem">Projects</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" id="navitem">Case Study</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#home">Events</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#link">Training</Nav.Link>
          <Nav.Link href="#link">Join us</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )  

}

export default Navigation;