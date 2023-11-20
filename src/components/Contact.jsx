import { useState } from "react";
import { formspreeUrl } from "../data";
import {
  Alert,
  Button,
  Form,
  Spinner,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);
  const [dangerMessage, setDangerMessage] = useState(null);

  async function postData(data) {
    const response = await fetch(formspreeUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  }

  async function handleSubmit(event) {
    const form = event.currentTarget;
    setSuccess(false);
    setDanger(false);
    setDangerMessage(null);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsValidated(true);
    const { name, email, message } = form.elements;
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    if (form.checkValidity()) {
      event.preventDefault();
      event.persist();
      setIsProcessing(true);
      try {
        const response = await postData(data);
        if (!response.ok) {
          throw new Error(
            `${response.status} ${response.statusText}, check formspreeUrl in data.js`
          );
        }
        setIsProcessing(false);
        setIsValidated(false);
        event.target.reset();
        setSuccess(true);
      } catch (error) {
        setIsProcessing(false);
        setIsValidated(false);
        event.target.reset();
        setDangerMessage(error.message);
        setDanger(true);
      }
    }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact me"></img>
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Your name" />
                <Form.Control.Feedback type="invalid">
                  <h5>Name must be at least one character.</h5>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                  placeholder="email@address.com"
                />
                <Form.Control.Feedback type="invalid">
                  <h5>Please enter a valid email.</h5>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mx-auto mb-3 form-group"
                controlId="message"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Your message..."
                />
                <Form.Control.Feedback type="invalid">
                  <h5>Please provide a valid message.</h5>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mx-auto text-center form-group">
                {formspreeUrl && (
                  <Button
                    sm={12}
                    size="lg"
                    type="submit"
                    disabled={isProcessing}
                    className="my-4"
                  >
                    Submit{" "}
                    {isProcessing && (
                      <Spinner animation="border" variant="success" size="sm" />
                    )}
                  </Button>
                )}

                <Alert
                  show={success}
                  variant="success"
                  onClose={() => setSuccess(false)}
                >
                  <Alert.Heading>
                    Success! I will contact you soon.
                  </Alert.Heading>
                </Alert>
                <Alert
                  show={danger}
                  variant="danger"
                  onClose={() => setDanger(false)}
                  dismissible
                >
                  <Alert.Heading>{dangerMessage}</Alert.Heading>
                </Alert>
                <Alert show={!formspreeUrl} variant="danger">
                  <Alert.Heading>
                    You must provide a valid formspree url in data.js
                  </Alert.Heading>
                </Alert>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
