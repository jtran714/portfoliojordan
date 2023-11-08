import { useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/summary1.png";
import projImg2 from "../assets/img/summary2.png";
import projImg3 from "../assets/img/summary3.png";
import projImg4 from "../assets/img/threads1.png";
import projImg5 from "../assets/img/threads2.png";
import projImg6 from "../assets/img/threads3.png";
import projImg7 from "../assets/img/anime1.png";
import projImg8 from "../assets/img/anime2.png";
import projImg9 from "../assets/img/anime3.png";

export const Projects = () => {
  const project1 = [
    {
      title: "User History",
      description: "A feature for users that may want to go back where they left off should they feed the application more URLs",
      imgUrl: projImg1,
    },
    {
      title: "Quick Response",
      description: "All the user have to do is to feed the application a news URL and the program will quickly generate a summary",
      imgUrl: projImg2,
    },
    {
      title: "Foreign News Translatation to English",
      description: "This news article came from a Vietnamese news site and the AI can quickly translate it into an English summary",
      imgUrl: projImg3,
    },
  ];

  const project2 = [
    {
      title: "placeholder",
      description: "placeholder",
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
      description: "placeholder",
      imgUrl: projImg7,
    },
    {
      title: "placeholders",
      description: "placeholder",
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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here is a selection of the projects that I have created,
                    both on my own and in partnership with skilled people. This
                    portfolio, represents my ongoing adventure in software
                    development. In this comparatively short time, I've accepted
                    a lot of learning chances and have gained knowledge and
                    insight that have been quite helpful. Every project I work
                    on is a major turning point in my journey through the world
                    of coding, and I have been incredibly satisfied with every
                    step of the way. I cordially encourage you to investigate
                    these initiatives and, if you have any thoughts, please
                    share them. Your viewpoint is really helpful to me as I
                    continue to hone my abilities and broaden my horizons in the
                    field of software development.
                    <b>Thank you</b>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center alig-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Summary News</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Threads</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Anime Reactor</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <div className="animate-on-visible">

                        </div>
                        <div className="animate-on-visible">
                          <Row>
                            {project1.map((project1, index) => {
                              return <ProjectCard key={index} {...project1} />;
                            })}
                          </Row>
                          <div className="project-title">Summary News</div>
                          <p>
                            A SaaS application using OpenAI api that will turn
                            any news articles into concise summary and if you're
                            curious about what news are happening around the
                            world, this application can also translate foreign
                            news articles into English
                          </p>
                        </div>
                        <div className="animate-on-visible">
                          <ul>
                            <li>GPT-4-Powered Summarization: The project leverages GPT-4, known for its improved accuracy and faster text generation compared to GPT-3.5, to provide concise and coherent summaries of news articles.</li>
                            <li>Translation Capability: In addition to summarization, the AI has the ability to translate foreign news articles into the user's preferred language, breaking down language barriers to access news from around the world.</li>
                            <li>URL History: The project includes a URL history feature that allows users to revisit previously read articles or input new article URLs for summarization. This feature provides a user-friendly way to keep track of their reading history.</li>
                            <li>News Article Summarization: The AI system is designed to automatically summarize news articles, making it easier for users to quickly grasp the main points and key information from lengthy news reports.</li>
                            <li>Versatile News Source Support: The system can process news articles from a wide range of sources, making it a versatile tool for staying informed about current events.</li>
                            <li>Potential for Future Expansion: As AI technology evolves, there is potential for further expansion and enhancement of the project's capabilities to meet the changing needs of users and news consumers.</li>
                          </ul>
                          <p>
                            <b style={{marginRight: '10px'}}>Skills: JavaScript - React - TailwindCSS</b>
                            <a href="https://github.com/jtran714/summary" style={{marginRight: '10px'}} alt='github link'>GitHub</a>
                            <a href="https://aquamarine-chimera-41f377.netlify.app/" alt='summary'>Link</a>
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
