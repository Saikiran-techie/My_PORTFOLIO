import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'Ericsson',
      issuer: 'ERICSSON INDIA GLOBAL SERVICES PRIVATE LIMITED',
      date: 'Oct 2023',
      description: 'Successfully completed a Web Development internship with Ericsson’s DS RAN team, contributing to the MBNL - HARDY Project. Gained hands-on experience in building responsive web applications and internal tools to enhance network operations.',
      credential: 'EGIL/HR-4985',
      link: 'https://drive.google.com/file/d/1C6Cj9uoFiXsg9d04CL_4DbCoydgs00fZ/view?usp=sharing'
    },
    {
      id: 2,
      name: 'Java Training',
      issuer: 'Besant Technologies',
      date: 'Dec 2023',
      description: 'Comprehensive Java programming course covering core concepts, OOP, data structures, and advanced features.',
      credential: 'BT-FT-245072',
      link: 'https://drive.google.com/file/d/1BzIFRfiT6hVFcv9dsGhHBqaqyuvdWLdh/view?usp=sharing'
    },
    {
      id: 3,
      name: 'SQL and Relational Databases',
      issuer: 'Cognitive Class powered by IBM Developer Skills Network',
      date: 'Mar 2024',
      description: 'Course on SQL database design, normalization, optimization, and best practices.',
      credential: '3f3620d179e94e7ebcdc09f6e1726edd',
      link: 'https://drive.google.com/file/d/197D13Cl-5UBPQ5QLhjiqXG8gCw2926_F/view?usp=sharing'
    },
    // {
    //   id: 4,
    //   name: 'React.js Developer Certification',
    //   issuer: 'Coursera',
    //   date: 'Aug 2022',
    //   description: 'Advanced course on React.js development, including hooks, context API, Redux, and building complex applications.',
    //   credential: 'CERT-5678901234',
    //   link: 'https://example.com/certificate2'
    // },
    // {
    //   id: 5,
    //   name: 'Spring Boot for Java Developers',
    //   issuer: 'Udacity',
    //   date: 'Nov 2022',
    //   description: 'Comprehensive course on building RESTful web services with Spring Boot, JPA, and Spring Security.',
    //   credential: 'ND-9012345678',
    //   link: 'https://example.com/certificate3'
    // },
    // {
    //   id: 6,
    //   name: 'Web Development Bootcamp',
    //   issuer: 'freeCodeCamp',
    //   date: 'May 2021',
    //   description: 'Complete web development bootcamp covering HTML, CSS, JavaScript, and responsive design principles.',
    //   credential: 'FCC-3456789012',
    //   link: 'https://example.com/certificate4'
    // },
    // {
    //   id: 7,
    //   name: 'Git & GitHub Essentials',
    //   issuer: 'Pluralsight',
    //   date: 'Jan 2022',
    //   description: 'Course on version control with Git and collaboration with GitHub for software development projects.',
    //   credential: 'PS-1234509876',
    //   link: 'https://example.com/certificate6'
    // }
  ];

  return (
    <section className="certificates-section py-5" id="certificates">
      <Container>
        <h2 className="section-title text-center mb-5">Certifications</h2>
        <p className="text-center mb-5">
          I continuously enhance my skills through various certifications and online courses.
          Here are some of my notable certifications.
        </p>

        <Row>
          {certificates.map((certificate) => (
            <Col md={6} lg={4} className="mb-4" key={certificate.id}>
              <Card className="certificate-card h-100">
                <Card.Body>
                  <Card.Title className="certificate-name">{certificate.name}</Card.Title>
                  <div className="certificate-issuer mb-2">
                    <span className="fw-bold">Issuer:</span> {certificate.issuer}
                  </div>
                  <div className="certificate-date mb-2">
                    <span className="fw-bold">Date:</span> {certificate.date}
                  </div>
                  <Card.Text className="certificate-description mb-3">
                    {certificate.description}
                  </Card.Text>
                  <div className="certificate-credential mb-3">
                    <span className="fw-bold">Credential ID:</span> {certificate.credential}
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white text-center border-0">
                  <a
                    href={certificate.link}
                    className="btn btn-sm btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
