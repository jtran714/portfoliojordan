import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/chibimale.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const toRotate = ["Front-End Developer", "Full-Stack Developer", "Web Designer", "Pokemon Fan"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome to my Portfolio!</span>
              <h1>
                {`Hi! I'm Jordan Tran, `}{" "}
                <span
                  className="txt-rotate"
                  data-period="1000"
                  data-rotate={JSON.stringify(toRotate)}
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I'm a passionate Full-Stack developer focused on Front-End
                development. I'm committed to continuous learning and growth in
                a dynamic tech environment. I'm actively looking for
                opportunities to collaborate on exciting and innovative
                projects, so let us connect!
              </p>
              <a
                className="linkedin-connect"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
