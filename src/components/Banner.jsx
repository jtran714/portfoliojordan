import { useState, useEffect } from "react";
import headerImg from "../assets/img/chibimale.png";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = [
    "Front-End Developer",
    "Full-Stack Developer",
    "Web Designer",
    "Pokemon Fan",
  ];
  const [delta, setDelta] = useState(200 - Math.random() * 100);
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
              <span className="tagline">Welcome to my page!</span>
              <h1>
                {`Hi, I'm Jordan Tran,`}{" "}
                <span
                  className="txt-rotate"
                  data-period="1000"
                  data-rotate={JSON.stringify(toRotate)}
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I am a Full-Stack developer with a deep passion for Front-End
                development. With a strong belief that technology is rapidly
                evolving, I am constantly seeking new opportunities to expand my
                skills and knowledge. My goal is to work in a dynamic and
                challenging environment where I can continue to grow as a
                developer and contribute to the development of innovative tech
                solutions. Currently seeking new opportunities to contribute to
                exciting projects, so let us connect and chat about creating
                innovative applications together.
              </p>
              <a
                className="linkedin-connect"
                href="https://www.linkedin.com/in/jordantran714/"
                target="_blank"
                rel="nopener noreferrer"
              >
                <button>
                  Let's Connect <ArrowRightCircle size={25} />
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
