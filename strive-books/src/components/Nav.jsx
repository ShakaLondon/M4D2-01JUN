import { Component } from "react" 
// import component from react for components
import { Nav, Navbar, Container,} from "react-bootstrap"
// import react bootstrap components
import SBLogo from "../assets/strivebooks-copy.png"

// import RocketLogo from "../Rocket-Icon/Rocket-icon.jsx"

// import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Mynav extends Component {
    state = {}
    render() {
      return (
        <Navbar className="fixed-top position-relative" bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="d-flex align-items-center">
              <FontAwesomeIcon icon={["fa", "rocket"]} className="fa-2x" id="rocketLogo"/>
              <img alt="" src={SBLogo} width="200" className="d-inline-flex align-top img-fluid px-2" id="stvBooks"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    }
  }
  
  export default Mynav
  