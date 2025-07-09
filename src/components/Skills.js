import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java', percentage: 85 },
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React.js', percentage: 80 },
    { name: 'Bootstrap', percentage: 90 },
    { name: 'SQL/MySQL', percentage: 75 },
    { name: 'Spring Boot', percentage: 80 },
    { name: 'Git/GitHub', percentage: 85 },
  ];

  const softSkills = [
    { name: 'Communication', percentage: 90 },
    { name: 'Teamwork', percentage: 85 },
    { name: 'Problem Solving', percentage: 90 },
    { name: 'Time Management', percentage: 80 },
  ];

  return (
    <section className="skills-section py-5" id="skills">
      <Container>
        <h2 className="section-title text-center mb-5">Technical Skills</h2>

        <Row>
          <Col lg={6}>
            <h3 className="mb-4">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <ProgressBar now={skill.percentage} variant="primary" />
              </div>
            ))}
          </Col>

          <Col lg={6}>
            <h3 className="mb-4">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <ProgressBar now={skill.percentage} variant="success" />
              </div>
            ))}

            <div className="other-skills">
              <h3 className="mb-4">Other Skills</h3>
              <Row>
                <Col xs={4} md={4} className="mb-4">
                  <div className="other-skill-item">
                    <i className="fa fa-check-circle me-2"></i>
                    <span>RESTful APIs</span>
                  </div>
                </Col>
                <Col xs={4} md={4} className="mb-4">
                  <div className="other-skill-item">
                    <i className="fa fa-check-circle me-2"></i>
                    <span>Responsive Design</span>
                  </div>
                </Col>
                <Col xs={4} md={4} className="mb-4">
                  <div className="other-skill-item">
                    <i className="fa fa-check-circle me-2"></i>
                    <span>JDBC</span>
                  </div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                  <div className="other-skill-item">
                    <i className="fa fa-check-circle me-2"></i>
                    <span>Data Structures and Algorithms</span>
                  </div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                  <div className="other-skill-item">
                    <i className="fa fa-check-circle me-2"></i>
                    <span>Linux</span>
                  </div>
                </Col>
                
                {/* <Col xs={6} md={4} className="mb-3">
                  <div className="other-skill-item">
                    <i className="fa fa-check-circle me-2"></i>
                    <span>JIRA</span>
                  </div>
                </Col> */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
