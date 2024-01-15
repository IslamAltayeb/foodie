import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const NavSBar = () => {
  return (
    <Navbar expand="lg" style={{'backgroundColor' : '#e60023'}}>
      <Container fluid>
        <Navbar.Brand href="/" className='logo'>Foodie</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='links'>Home</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/review">Review</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
            </NavDropdown>       
          </Nav>
          <Nav.Link as={Link} to='/cart' className='cart'>Cart <FaCartShopping /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSBar;