import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", variant: "success" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mgvlpazd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({
          show: true,
          message: "✅ Thank you for your message! I will get back to you soon.",
          variant: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setValidated(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setToast({
        show: true,
        message: "❌ Something went wrong. Please try again later.",
        variant: "danger",
      });
    }
  };

  const contactInfo = [
    { icon: "fa-envelope", title: "Email", content: "saikiran.paladi6@gmail.com" },
    { icon: "fa-phone", title: "Phone", content: "+91 837 474 5738" },
    { icon: "fa-map-marker-alt", title: "Location", content: "Hyderabad, Telangana" },
  ];

  return (
    <section className="contact-section py-5" id="contact">
      <Container>
        <h2 className="section-title text-center mb-5">Contact Me</h2>
        <p className="text-center mb-5">
          Feel free to get in touch with me. I am always open to discussing new projects,
          creative ideas or opportunities to be part of your vision.
        </p>

        <Row>
          {/* Left Side - Contact Info */}
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="contact-info">
              <h3 className="mb-4">Let's get in touch</h3>
              <p className="mb-4">
                I’m currently seeking a full-time opportunity where I can bring value, grow, and take on meaningful challenges.
                If you have a position that aligns with my skills and experience, I'd be glad to connect and discuss how I can contribute to your team.
                Let’s connect and build something impactful together!
                <br />
                <br />
                I'm currently available for freelance work and full-time positions.
                If you have a project that you want to get started or need help with,
                feel free to contact me.
              </p>

              <Row>
                {contactInfo.map((info, index) => (
                  <Col md={6} className="mb-4" key={index}>
                    <Card className="contact-card h-100">
                      <Card.Body className="text-center">
                        <div className="contact-icon mb-3">
                          <i className={`fas ${info.icon} fa-2x`}></i>
                        </div>
                        <h5 className="contact-title">{info.title}</h5>
                        <p className="contact-content mb-0">{info.content}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Right Side - Contact Form */}
          <Col lg={7}>
            <div className="contact-form">
              <h3 className="mb-4">Send me a message</h3>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactEmail">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="contactSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a subject.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="contactMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

        {/* ✅ Animated Toast */}
        <ToastContainer position="top-end" className="p-3">
          <AnimatePresence>
            {toast.show && (
              <motion.div
                key="toast"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <Toast
                  bg={toast.variant}
                  onClose={() => setToast({ ...toast, show: false })}
                  show={toast.show}
                  delay={3000}
                  autohide
                >
                  <Toast.Body className="text-white">{toast.message}</Toast.Body>
                </Toast>
              </motion.div>
            )}
          </AnimatePresence>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default Contact;
