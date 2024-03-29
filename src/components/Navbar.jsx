// src/components/Navbar.jsx
// 
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* <Nav>
            <Nav.Link href="#login">Signed in as: Mark Otto</Nav.Link>
          </Nav> */}
          <Nav className="md-auto">
            <Link to="/register">Register</Link>
           
            <Nav.Link href="/BMI">Features</Nav.Link>
            <Nav.Link href="/Priceplan">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;

