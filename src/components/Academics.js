import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Academics = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
      institution: 'Sri Indu College of Engineering and Technology',
      year: '2019 - 2023',
      description: 'Graduated with First Class Honours. Participated in various coding competitions and hackathons. Participated in college fests and events and I served as a coordinator for the college S-HUB.',
      gpa: '8.0/10',
    },
    {
      id: 2,
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Sri Chitanya Jr. Kalasala',
      year: '2017 - 2019',
      description: 'Completed with 84% marks with specialization in Science (Physics, Chemistry, Mathematics).',
      gpa: '84%',
    },
    {
      id: 3,
      degree: 'Secondary Education (Class X)',
      institution: 'Arabindo High School',
      year: '2015',
      description: 'Completed with 84% marks.',
      gpa: '8.8/10',
    },
  ];

  const courses = [
    'Data Structures and Algorithms',
    'Object-Oriented Programming with Java',
    'Web Development with React.js',
    'Database Management Systems',
    'Software Engineering',
    // 'Computer Networks',
    // 'Operating Systems',
    // 'Cloud Computing',
  ];

  return (
    <section className="academics-section py-5" id="academics">
      <Container>
        <h2 className="section-title text-center mb-5">Academic Background</h2>

        <Row className="mb-5">
          <Col>
            <h3 className="mb-4">Education</h3>
            <div className="timeline">
              {education.map((item) => (
                <Card className="mb-4 timeline-item" key={item.id}>
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <h4 className="timeline-title">{item.degree}</h4>
                      <span className="timeline-year">{item.year}</span>
                    </div>
                    <h5 className="timeline-subtitle mb-2">{item.institution}</h5>
                    <p className="mb-2">{item.description}</p>
                    <div className="badge bg-primary">GPA: {item.gpa}</div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3 className="mb-4">Relevant Coursework</h3>
            <Row>
              {courses.map((course, index) => (
                <Col md={6} lg={3} key={index} className="mb-3">
                  <Card className="course-card h-100">
                    <Card.Body className="d-flex align-items-center justify-content-center">
                      <Card.Text className="text-center">{course}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Academics;
