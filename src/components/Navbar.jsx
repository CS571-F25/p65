import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-custom py-3">
      <Container>
        <Navbar.Brand style={{ color: 'white', fontWeight: '700', fontSize: '1.5rem' }}>
          ✨ TaskFlow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link style={{ color: 'white', fontWeight: '500', marginLeft: '20px' }}>
                Dashboard
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/add-task">
              <Nav.Link style={{ color: 'white', fontWeight: '500', marginLeft: '20px' }}>
                Add Task
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link style={{ color: 'white', fontWeight: '500', marginLeft: '20px' }}>
                About
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;