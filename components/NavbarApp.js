import { Dropdown, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import teoLogo from '../public/teo-logo.png'
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { withTranslation } from 'next-i18next';

const NavbarApp = ({ t }) => {
  const router = useRouter();

  const handleLocaleChange = (locale) => {
    router.push(`/${locale}`);
  };

  return (
    <Navbar expand="lg" fixed="top" style={{ zIndex: '10', background: 'rgb(0, 0, 0, .7)', backdropFilter: 'blur(5px)', height: '6rem' }}>
      <Container>
        <div style={{ flex: 6, alignItems: 'center', display: 'flex' }}>
          <Navbar.Brand href="/">
            <img
              style={{ filter: 'drop-shadow(0px 0px 5px #ffffff60)' }}
              src={teoLogo.src}
              width="70"
              className="d-inline-block align-top"
              alt="teo logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className='Brand' style={{ color: 'white', fontSize: '1.8rem' }} href="/">
            {t('home')}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle className='navbarColor' aria-controls="basic-navbar-nav" style={{ background: 'white' }} />
        <Navbar.Collapse className='collapse' id="basic-navbar-nav">
          <div style={{ display: 'flex', flex: 6,alignItems:'center' }}>
            <Nav className="me-auto" style={{ gap: '2rem' }}>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#nosotros">{t('about-us')}</Nav.Link>
              <Nav.Link href="#services">{t('services')}</Nav.Link>
              <Nav.Link href="#news">{t('news')}</Nav.Link>
              <Nav.Link href="#contact">{t('contact')}</Nav.Link>
            </Nav>

            <Dropdown drop='start' >
              <Dropdown.Toggle 
              style={{background:'transparent', border:'none', margin:'0', padding:'0'}}>
                {router.locale === "es" ? "Español" : "English"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLocaleChange("es")}>
                  Español
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocaleChange("en")}>
                  English
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
NavbarApp.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('navbar')(NavbarApp)