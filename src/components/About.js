import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section className="about-section py-5" id="about">
      <Container>
        <h2 className="section-title text-center mb-5">About Me</h2>
        <Row className="align-items-center">

          {/* <Col md={5} className="mb-4 mb-md-0">
            <div className="about-image-container">
              Replace with your image
              <Image
                src="https://via.placeholder.com/400x400"
                alt="Profile Photo"
                fluid
                roundedCircle
                className="about-image"
              />
            </div>
          </Col> */}
          <Col md={6}>
            <div className="about-content">
              <h3 className="mb-3">I'm <span className="highlight">Saikiran Paladi</span></h3>
              <h4 className="mb-3">Java Full Stack Developer</h4>
              <p className="about-text">
                I am a passionate and detail-oriented Java Full Stack Developer with a strong foundation in
                web development technologies. I recently completed my degree in Electrical and Electronics Engineering and
                I'm eager to apply my skills in a professional environment.
              </p>
              <p className="about-text">
                I have expertise in Java, Spring Boot, React.js, HTML, CSS, and JavaScript. I enjoy creating
                responsive and user-friendly applications that solve real-world problems. My goal is to
                continuously learn and grow as a developer while contributing to meaningful projects.
              </p>
            </div>
          </Col>
          <Col md={6} className="personal-info mt-4 mb-4 mb-md-0">
            <div className="personal-info mt-4">
              <Row>
                <Col md={6}>
                  <p><strong>Name:</strong> Saikiran Paladi</p>
                  <p><strong>Email:</strong> saikiran.paladi6@gmail.com</p>
                  <p><strong>Location:</strong> Hyderabad, Telangana</p>
                </Col>
                <Col md={6}>
                  <p><strong>Degree:</strong> Bachelor of Technology (B.Tech)</p>
                  <p><strong>Phone:</strong> +91 837 474 5738</p>
                  <p><strong>Freelance:</strong> Available</p>
                </Col>
              </Row>
            </div>
            <div className="mt-4">
              <a
                href="#contact"
                className="btn btn-primary me-3"
              >
                Hire Me
              </a>
              <a
                href="https://drive.google.com/file/d/1Q3X8AimyyFiZUq3bNrIMvZ72mLdaSjW4/view?usp=sharing"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
