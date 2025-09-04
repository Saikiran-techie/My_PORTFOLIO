import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Internship = () => {
  const internships = [
    {
      id: 1,
      position: 'Web Development Intern',
      company: 'ERICSSON INDIA GLOBAL SERVICES PRIVATE LIMITED',
      location: 'Bangalore, Karnataka',
      period: 'March 2023 - Sept 2023',
      description: [
        'Designed and developed internal web tools to support operational workflows and data visualization, improving internal team productivity by 20 %.',
        'Built responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap, ensuring cross-device compatibility and performance.',
        'Integrated Firebase for real-time data syncing and secure authentication across platforms.',
        'Collaborated with cross-functional teams to automate project tracking dashboards, reducing manual reporting time by 30%.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'MySql']
    },
    // {
    //   id: 1,
    //   position: 'Java Developer Intern',
    //   company: 'Tech Solutions Inc.',
    //   location: 'City, Country',
    //   period: 'May 2022 - Aug 2022',
    //   description: [
    //     'Developed and maintained Java web applications using Spring Boot and Hibernate.',
    //     'Collaborated with senior developers to implement new features and fix bugs.',
    //     'Participated in code reviews and daily stand-up meetings.',
    //     'Built RESTful APIs for client-side consumption.',
    //     'Wrote unit tests using JUnit to ensure code quality.'
    //   ],
    //   technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Git']
    // },
    // {
    //   id: 2,
    //   position: 'Web Development Intern',
    //   company: 'Digital Creations',
    //   location: 'City, Country',
    //   period: 'Dec 2021 - Feb 2022',
    //   description: [
    //     'Assisted in developing responsive web pages using HTML, CSS, and JavaScript.',
    //     'Created interactive UI components using React.js and Bootstrap.',
    //     'Optimized website performance and fixed cross-browser compatibility issues.',
    //     'Participated in client meetings and requirement gathering.',
    //     'Gained hands-on experience with version control using Git.'
    //   ],
    //   technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap']
    // }
  ];

  return (
    <section className="internship-section py-5" id="internship">
      <Container>
        <h2 className="section-title text-center mb-5">Internship Experience</h2>
        <p className="text-center mb-5">
          Here are details of my professional internships that have equipped me with practical experience
          and industry knowledge.
        </p>

        <Row>
          {internships.map((internship) => (
            <Col lg={6} className="mb-5" key={internship.id}>
              <Card className="internship-card h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between mb-2">
                    <h4 className="internship-position">{internship.position}</h4>
                    <span className="internship-period">{internship.period}</span>
                  </div>
                  <h5 className="internship-company mb-1">{internship.company}</h5>
                  <p className="internship-location mb-3">{internship.location}</p>

                  <h5 className="mb-2">Responsibilities:</h5>
                  <ul className="internship-responsibilities">
                    {internship.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h5 className="mb-2">Technologies Used:</h5>
                  <div className="technologies mb-2">
                    {internship.technologies.map((tech, index) => (
                      <span className="badge bg-primary me-2 mb-1" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Internship;
