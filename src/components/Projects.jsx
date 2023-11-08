import { useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";

export const Projects = () => {
  const project1 = [
    {
      title: "placeholder",
      description:
        "placeholder",
      imgUrl: projImg2,
    },
    {
      title: "laceholder",
      description:
        "placeholder",
      imgUrl: projImg1,
    },
    {
      title: "placeholder",
      description:
        "placeholder",
      imgUrl: projImg3,
    },
  ];

  const project2 = [
    {
      title: "placeholder",
      description:
        "placeholder",
      imgUrl: projImg4,
    },
    {
      title: "placeholder",
      description: "placeholder",
      imgUrl: projImg5,
    },
    {
      title: "placeholder",
      description: "placeholder",
      imgUrl: projImg6,
    },
  ];

  const project3 = [
    {
      title: "placeholder",
      description:
        "placeholder",
      imgUrl: projImg7,
    },
    {
      title: "placeholders",
      description:
        "placeholder",
      imgUrl: projImg8,
    },
    {
      title: "placeholder",
      description: "placeholdert",
      imgUrl: projImg9,
    },
  ];

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(".animate-on-visible");
    elementsToAnimate.forEach((element) => {
      element.classList.add("animate__animated", "animate__slideInLeft");
    });
  }, []);

  return (
    
  )
};
