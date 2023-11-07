import { useState, useEffect } from 'react';
import headerImg from "../assets/img/chibimale.png";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner = () => {
    const [loopNum, setLoopNum ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["Front-End Developer", "Web Designer", "Full-Stack Developer", "Pokemon Fan"];
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
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    };

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <div className='animate__animated animate__fadeIn'>
                        <span className='tagline'>Welcome to my page!</span>
                        <h1>{`Hi, I'm Jordan Tran,`} <span className='txt-rotate' data-period='1000' data-rotate={JSON.stringify(toRotate)}><span className='wrap'>{text}</span></span></h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

