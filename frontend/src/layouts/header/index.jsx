import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = ({ cart, addToCart, removeFromCart }) => {
const totalItems = Object.values(cart || {}).reduce(
  (sum, item) => sum + (item.quantity || 0),
  0
);



  return (
    <header className='header'>
      <Navbar bg="light" expand="lg" className="py-3 shadow-sm header">
        <Container>
          {/* Logo */}
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="src/assets/logo-1.jpg"
                alt="Kuruvi Crackers Logo"
                height="40"
                className="d-inline-block align-top me-2"
              />
            </Navbar.Brand>
          </LinkContainer>

          {/* Navbar Toggler */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Links */}
            <Nav className="mx-auto">
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/product"><Nav.Link>Product</Nav.Link></LinkContainer>
              <LinkContainer to="/giftbox"><Nav.Link>Giftbox</Nav.Link></LinkContainer>
              <LinkContainer to="/price"><Nav.Link>Pricelist</Nav.Link></LinkContainer>
              <LinkContainer to="/aboutus"><Nav.Link>About Us</Nav.Link></LinkContainer>
            </Nav>

            {/* Search + Cart */}
            <Nav className="ms-auto d-flex align-items-center">
           

              <LinkContainer to="/cart">
                <Nav.Link as={Link} to="/cart" className="position-relative">
                  <FaShoppingCart size={22} />
                  {totalItems > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {totalItems}
                    </span>
                  )}
                </Nav.Link>


              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
