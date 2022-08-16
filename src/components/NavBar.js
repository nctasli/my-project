import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useTranslation } from 'react-i18next';


export const NavBar = () => {
  const { t, i18n } = useTranslation();
  
  const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" width="30" height="30" viewBox="0 0 640 480">
  <path fill="#012169" d="M0 0h640v480H0z"/>
  <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
  <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
  <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
  <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
</svg>

  )
  const GlobeIcon2 = ({ width = 24, height = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 -30000 90000 60000">
	<title>Flag of Turkey</title>
	<path fill="#e30a17" d="m0-30000h90000v60000H0z"/>
	<path fill="#fff" d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z"/>
</svg>
  )

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln)
      console.log("Language Changed !")
    }
  }
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t("active navbar-link nav-link")}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t("skills")}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t("projects")}</Nav.Link>
            </Nav>
            <div className="lang-menu">
                <div className="language-select">
                  <div className="d-flex justify-content-end align-items-center language-select-root">
                  <button
                      onClick={changeLanguage("en")}   
                        type="button">
                        <GlobeIcon />
                      </button>
                      <button
                      onClick={changeLanguage("tr")}
                        type="button">
                        <GlobeIcon2 />
                      </button>
                  </div>
                </div>
              </div>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://api.whatsapp.com/send?phone=+905556155387"><img src={navIcon1} alt="whatsapp" /></a>
                <a href="https://www.instagram.com/kutuksan/"><img src={navIcon3} alt="instagram" /></a>
                <a href="https://www.linkedin.com/in/necati-can-ta%C5%9Fl%C4%B1-09802b236/"><img src={navIcon2} alt="linkedin" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="home"><span>{t('home')}</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </Router >
  )
}
