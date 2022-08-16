import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://api.whatsapp.com/send?phone=+905556155387"><img src={navIcon1} alt="whatsapp" /></a>
              <a href="https://www.instagram.com/kutuksan/"><img src={navIcon3} alt="instagram" /></a>
              <a href="https://www.linkedin.com/in/necati-can-ta%C5%9Fl%C4%B1-09802b236/"><img src={navIcon2} alt="linkedin" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <p>Designed By: <a rel="nofollow" href="https://www.linkedin.com/in/necati-can-ta%C5%9Fl%C4%B1-09802b236/" className="designer">Necati Can Taşlı</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
