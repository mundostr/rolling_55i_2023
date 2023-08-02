import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

function Menu() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/" className="btn">Home</NavLink>
            &nbsp;
            <NavLink to="/pagina2" className="btn">Carrito</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu