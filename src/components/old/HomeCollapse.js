      import React, { Component } from 'react'
      import Navbar from 'react-bootstrap/Navbar';
      import Container from 'react-bootstrap/Container';
      import Nav from 'react-bootstrap/Nav';
      import NavDropdown from 'react-bootstrap/NavDropdown';

      export class HomeCollapse extends Component {
              render() {

                      return (
                              <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


<Navbar collapseOnSelect expand="lg" bg="" variant="dark">
<Container>

<div className=" Home-bg">
<nav className="navbar  nc  py-0" >
<div className="brand-pad">
  <a className="navbar-brand " href="#">
      <img src="https://apsainik.org.in/assets/img/sainiklogo.png" width="30" height="28" alt="logo" />
  </a>
</div>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />

<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">

    <ul class="navbar-nav">
      <li class="nav-item active brand-pad">
        <a class=" underlineHover la "style={{color:'white'}} href="/">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <ul class="navbar-nav ">
      <li class="nav-item active brand-pad">
        <a class="underlineHover la "style={{color:'white'}} href="#contact">Contact Us <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <ul class="navbar-nav ">
      <li class="nav-item active brand-pad">
        <a class="underlineHover la"style={{color:'white'}} href="#rti">RTI <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active brand-pad">
        <a class="underlineHover la"style={{color:'white'}} href="/">Finance Scheme <span class="sr-only">(current)</span></a>
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0 logout-pad">
    <a ><button  class="login-btn" id="logout">Admin Login</button></a>

    </form>
</Nav>
    </Navbar.Collapse>

</nav>

<div className=" Home-bg" style={{height:'2px'}}>
</div>
</div>
</Container>

</Navbar>
                              </div>
                      )
              }
      }

      export default HomeCollapse
