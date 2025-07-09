import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SaiProfile from '../assets/images/Sai_Profile.jpg'

const Banner = () => {
  return (
    <div className="banner-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col md={6}>
            <h1 className="display-4 fw-bold">Hello, I'm <span className="highlight">Saikiran Paladi</span></h1>
            <h2 className="my-4">Java Full Stack Developer</h2>
            <p className="lead mb-4">
              Passionate about creating robust and scalable web applications using Java, Spring Boot,
              React, and other modern technologies.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="primary" href="#contact" size="lg">Contact Me</Button>
              <Button variant="outline-primary" href="#projects" size="lg">View Projects</Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <div className="profile-img-wrapper">
              <img
                src={SaiProfile}
                alt="Saikiran Paladi Profile"
                className="profile-img"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Banner;
