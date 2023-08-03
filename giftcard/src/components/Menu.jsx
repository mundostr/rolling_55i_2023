import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Menu = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('cart_user')) || null;

  const logOut = () => {
    localStorage.clear('cart_user');
    navigate('/', { replace: true });
  };

  const logIn = () => {
    navigate('/login', { replace: false });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">GiftCards Shop</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="menu">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-item nav-link active': 'nav-item nav-link'}>Home</NavLink>
            <NavLink to="/giftcards" className={({isActive}) => isActive ? 'nav-item nav-link active': 'nav-item nav-link'}>GiftCards</NavLink>
          </Nav>
        </Navbar.Collapse>
        
        <Navbar.Collapse className=" justify-content-end">
          <Nav>
            {user ?
              <Button variant="warning" onClick={logOut}><i className="fa fa-sign-out me-1"></i>{user.username}</Button>
              :
              <Button variant="warning" onClick={logIn}><i className="fa fa-user"></i> Ingresar</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;