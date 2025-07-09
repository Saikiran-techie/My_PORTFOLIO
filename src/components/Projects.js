import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import MediConnectHospital from '../assets/images/MediConnectHospital.png';
import TaskMate from '../assets/images/TaskMate.png';
import Restaurant from '../assets/images/Restaurant.png';
import TinDog from '../assets/images/TinDog.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Appointment Booking Application',
      description: 'A full-stack Hospital Appointment Booking website built with javascript, React.js, Node.js. Features include user secure authentication, dynamic scheduling, and online payment integration. Designed to streamline patient-doctor interactions and improve healthcare appointment management efficiency. This project demonstrates my skills in full-stack development, including front-end and back-end technologies, as well as database management.',
      image: MediConnectHospital,
      technologies: ['HTML', 'CSS', 'Javascript', 'React.js', 'Node.js', 'MySQL', 'Bootstrap', 'Firebase Firestore'],
      github: 'https://github.com/Saikiran-techie/Hospital_Appointment_Booking_System',
      demo: 'https://hospital-appointment-booking-system-umber.vercel.app/',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application that allows users to create, update, and delete tasks. Built with Javascript and uses Firebase Firestore storage to persist data. Features include user authentication, real-time updates, and a responsive design. This project demonstrates my skills in front-end development and working with Firebase for backend services.',
      image: TaskMate,
      technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Firebase Firestore'],
      github: 'https://github.com/Saikiran-techie/Taskmate_JS_Project',
      demo: 'https://taskmate-js-project.vercel.app/',
    },
    {
      id: 3,
      title: 'Restaurant Management System',
      description: 'A restaurant management system that allows users to view the menu, place orders, and manage reservations. Built with HTML, CSS, Bootstrap. Features include a responsive design and user-friendly interface. This project demonstrates my skills in front-end development and responsive design. It is a great example of how to create a visually appealing and functional website using basic web technologies.',
      image: Restaurant,
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/Saikiran-techie/Html_CSS_Project',
      demo: 'https://html-css-project-five-azure.vercel.app/',
    }, 
    {
      id: 4,
      title: 'Tin Dog - A Dog Adoption Website',
      description: 'A simple dog adoption website that showcases available dogs for adoption. Built with HTML, CSS, and Bootstrap.  Features include a responsive design and user-friendly interface. This project demonstrates my skills in front-end development and responsive design. It is a great example of how to create a visually appealing and functional website using basic web technologies.',
      image: TinDog,
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/Saikiran-techie/TinDog_Website',
      demo: 'https://tin-dog-website-six.vercel.app/',
    },
    // {
    //   id: 5,
    //   title: 'E-Commerce Website',
    //   description: 'A full-stack e-commerce website built with Java, Spring Boot, and React.js. Features include user authentication, product listing, shopping cart, and payment integration.',
    //   image: 'https://via.placeholder.com/350x200',
    //   technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Bootstrap'],
    //   github: 'https://github.com/yourusername/ecommerce-website',
    //   demo: 'https://ecommerce-demo.example.com',
    // },
    // {
    //   id: 6,
    //   title: 'Weather Forecast App',
    //   description: 'A weather forecast application that allows users to search for weather information by city. Uses a third-party API to fetch weather data.',
    //   image: 'https://via.placeholder.com/350x200',
    //   technologies: ['React.js', 'JavaScript', 'Weather API', 'CSS', 'Bootstrap'],
    //   github: 'https://github.com/yourusername/weather-app',
    //   demo: 'https://weather-app-demo.example.com',
    // },
    // {
    //   id: 7,
    //   title: 'Personal Blog',
    //   description: 'A blog website where users can read and comment on articles. Admin can create, edit, and delete articles.',
    //   image: 'https://via.placeholder.com/350x200',
    //   technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'Bootstrap'],
    //   github: 'https://github.com/yourusername/personal-blog',
    //   demo: 'https://blog-demo.example.com',
    // },
  ];

  return (
    <section className="projects-section py-5" id="projects">
      <Container>
        <h2 className="section-title text-center mb-5">My Projects</h2>
        <p className="text-center mb-5">
          Here are some of the projects I've worked on. These showcase my skills and experience in web development.
        </p>

        <Row>
          {projects.map((project) => (
            <Col lg={6} className="mb-4" key={project.id}>
              <Card className="project-card h-100">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="technologies mb-3">
                    {project.technologies.map((tech, index) => (
                      <span className="badge bg-secondary me-2 mb-1" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <div className="d-grid gap-2 d-md-block">
                    <Button
                      variant="outline-primary"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="primary"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <a
            href="https://github.com/Saikiran-techie"
            className="btn btn-lg btn-outline-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More on GitHub
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
