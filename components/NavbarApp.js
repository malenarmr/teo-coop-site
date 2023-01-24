import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import teoLogo from '../public/teo-logo.png'
export const NavbarApp = () => {
  return (
    <Navbar expand="lg" fixed="top" style={{zIndex:'10', background:'rgb(0, 0, 0, .7)', backdropFilter:'blur(2px)', height:'6rem'}}>
      <Container>
        <div style={{flex:6}}>
      <Navbar.Brand href="/">
            <img
              src={teoLogo.src}
              width="70"
              className="d-inline-block align-top"
              alt="teo logo"
            />
          </Navbar.Brand>
        <Navbar.Brand className='Brand' style={{color:'white', fontSize:'1.8rem'}} href="/">Inicio</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:'white'}}/>
        <Navbar.Collapse className='collapse' id="basic-navbar-nav">
         <div style={{display:'flex', flex:6}}>
          <Nav className="me-auto" style={{gap:'2rem'}}>
            <Nav.Link style={{color:'white',fontSize:'1.3rem'}} href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link style={{color:'white', fontSize:'1.3rem'}} href="#nosotros">Nosotrxs</Nav.Link>
            <Nav.Link style={{color:'white', fontSize:'1.3rem'}} href="#servicios">Servicios</Nav.Link>
            <Nav.Link style={{color:'white', fontSize:'1.3rem'}} href="#noticias">Noticias</Nav.Link>
            <Nav.Link style={{color:'white', fontSize:'1.3rem'}} href="#contacto">Contacto</Nav.Link>
          </Nav>
          <NavDropdown style={{marginTop:'.5rem', color:'white', fontSize:'1.3rem'}} title="Lenguaje">
              <NavDropdown.Item href="#action/3.1">Español</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
            </NavDropdown>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
