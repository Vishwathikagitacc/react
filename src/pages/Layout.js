import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import logo11 from './images/logo11.jpeg'
const Layout = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "lightpink" }}>
        <Container>
          <Navbar.Brand href="#">
            <img 
              src={logo11}
              alt="My IceCream shop" 
              style={{ width: '50px', height: '50px', objectFit: 'contain' }} 
            /> 
            My IceCream Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/"><FaHome /> Home</Nav.Link>
              <Nav.Link as={Link} to="/about"><FaInfoCircle /> About</Nav.Link>
              <Nav.Link as={Link} to="/contact"><FaEnvelope /> Contact</Nav.Link>
              <Nav.Link as={Link} to="/login"><FaSignInAlt /> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Layout;
