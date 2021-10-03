import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container>
          <img className="logo" src={logo} alt="website logo" />
          <p>
            Recently updated for the 2021 tech market, "Become a Web Developer
            from Scratch (2021 version)" is probably one of the most complete
            and comprehensive online courses you will ever get to see covering
            web development from top to bottom.
          </p>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <p>Copyright - 2021 &copy; All Rights Reserved</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
