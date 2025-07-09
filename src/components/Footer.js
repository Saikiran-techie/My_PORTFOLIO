import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="text-lg-start mb-3 mb-lg-0">
            <div className="footer-logo">
              <h3 className="text-white mb-0">Saikiran Paladi</h3>
              <p className="text-white-50 mb-0">Java Full Stack Developer</p>
            </div>
          </Col>

          <Col lg={4} className="text-center mb-3 mb-lg-0">
            <div className="footer-social">
              <a href="https://github.com/Saikiran-techie" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/saikiranpaladi" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="mailto:saikiran.paladi6@gmail.com" className="social-icon mx-2">
                <i className="fas fa-envelope fa-lg"></i>
              </a>
              <a href="https://wa.me/+918374745738" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
            </div>
          </Col>

          <Col lg={4} className="text-lg-end">
            <div className="footer-copyright">
              <p className="mb-0">
                &copy; {currentYear} Saikiran Paladi. All Rights Reserved.
              </p>
              <p className="mb-0 text-white-50">
                Designed & Built by Saikiran Paladi
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
