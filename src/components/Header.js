import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <React.Fragment>
      <h1>Tripany</h1>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
