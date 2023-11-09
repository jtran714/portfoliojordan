import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoLogoLinkedin } from "react-icons/io";
import { PiFileDoc, PiGithubLogoBold } from "react-icons/pi";

export const Footer = () => {

    const iconHoverStyle = {
        filter: 'brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%)',
      }; /* to style react icons*/

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={6}>

        </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jordantran714/">
                <IoLogoLinkedin style={iconHoverStyle} className="display-6" />
              </a>
              <a href="https://docs.google.com/document/d/199aecPJrWbmR0e6ujgzhQ_vbardElXNPQCsj8WbK_rY/edit?usp=sharing">
                    <PiFileDoc style={iconHoverStyle} className="display-6" />
                </a>
                <a href="https://github.com/jtran714">
                    <PiGithubLogoBold style={iconHoverStyle} className="display-6" />
                </a>
            </div>
            <p>Jordan Tran 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
