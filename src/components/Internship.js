import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Internship = () => {
  const internships = [
    {
      id: 1,
      position: 'Domain Support Engineer',
      company: 'ERICSSON INDIA GLOBAL SERVICES PRIVATE LIMITED',
      location: 'Bangalore, Karnataka',
      period: 'March 2023 - Sept 2023',
      description: [
        'Collaborated with Ericsson’s DS RAN (Radio Access Network) team on the MBNL-HARDY Project, focusing on multi-technology network optimization and radio network performance improvement for both urban and rural telecom clusters in the UK region.',
        'Applied expertise in 2G, 3G, 4G, and 5G technologies to enhance network performance, resulting in a 15% improvement in data throughput and call quality.',
        'Worked closely with multi-vendor teams and cross-functional groups in a real-time network operations environment, developing strong teamwork, problem-solving, and technical reporting skills.',
        'Documented network architecture enhancements and procedural updates, supporting knowledge transfer and improving team efficiency by 20 % in project execution timelines.',
        'Assisted in RAN data analysis using Ericsson OSS tools (ENM, KPI Viewer, CNA Tool) and prepared daily and weekly network performance reports for internal stakeholders and MBNL client teams.'
      ],
      technologies: ['Telecommunications Networks (2G/3G/4G/5G)', '5G Network Architecture & Use Cases', 'Ericsson ENM (Ericsson Network Manager)', 'OSS KPIs Monitoring Tools (CNA Tool, KPI Viewer)', 'Neighbor cell list optimization']
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

                  <h6 className="mb-2">Responsibilities:</h6>
                  <ul className="internship-responsibilities">
                    {internship.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h6 className="mb-2">Technologies Used:</h6>
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
