import React from "react";
import { skillData } from "../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are the skills I'm proficient in as a software developer
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                  {skillData.map((skills) => {
                    return (
                      <Col
                        xs={4}
                        key={skills.id}
                        className="my-md-5 text-center align-items-center"
                      >
                        <figure>
                          {skills.skill}
                          <figcaption>{skills.name}</figcaption>
                        </figure>
                      </Col>
                    );
                  })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
