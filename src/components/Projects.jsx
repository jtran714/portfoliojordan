import { useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/summary1.png";
import projImg2 from "../assets/img/summary2.png";
import projImg3 from "../assets/img/summary3.png";
import projImg7 from "../assets/img/anime1.png";
import projImg8 from "../assets/img/anime2.png";
import projImg9 from "../assets/img/anime3.png";
import projImg10 from "../assets/img/task1.png";
import projImg11 from "../assets/img/task2.png";
import projImg12 from "../assets/img/task3.png";

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
      title: "Landing Page",
      description: "This is what the user will see regardless if they are logged in or not",
      imgUrl: projImg10,
    },
    {
      title: "Board Page",
      description: "User will see this page when they select a board to view their tasks",
      imgUrl: projImg11,
    },
    {
      title: "Payment Portal Powered by Stripe",
      description: "Here is where the user is directed when they want to subscribe to gain unlimited board access",
      imgUrl: projImg12,
    },
  ];

  const project3 = [
    {
      title: "User Log In Page",
      description: "User will see this page when they want to log in or sign up",
      imgUrl: projImg7,
    },
    {
      title: "Home Page",
      description: "Users will be greeted by this page that displays an array of top anime series",
      imgUrl: projImg8,
    },
    {
      title: "Anime Details Page",
      description: "If a user is interested in a series, they can simply click on the series to read the synopsis and click on any stream link provided",
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
                  <p style={{letterSpacing: 'normal'}}>
                    Here are some of the projects that I have created,
                    both on my own and in partnership with skilled people. This
                    portfolio, represents my ongoing journey in software
                    development. In this comparatively short time, I've accepted
                    a lot of learning chances and have gained knowledge and
                    insight that have been quite helpful. Every project I worked
                    on is a major turning point in my journey through the world
                    of coding, and I have been incredibly satisfied with every
                    step of the way.
                    {' '}
                    <b style={{letterSpacing: 'normal'}}>Thank you</b>
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
                        <Nav.Link eventKey="second">Taskit</Nav.Link>
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
                            <b style={{marginRight: '10px'}}>Skills: JavaScript - React - TailwindCSS -</b>
                            <a href="https://github.com/jtran714/summary" style={{marginRight: '10px'}} alt='github link'>GitHub</a>
                            <a href="https://aquamarine-chimera-41f377.netlify.app/" alt='summary'>Link</a>
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey='second'>
                        <div className="animate-on-visible">
                          <Row>
                            {project2.map((project2, index) => {
                              return (
                                <ProjectCard key={index} {...project2} />
                              )
                            })}
                          </Row>
                          <div className="project-title">TaskIt</div>
                          <p>
                            A full-stack application that helps users manage their daily tasks just like trello
                          </p>
                        </div>
                        <div className="animate-on-visible">
                          <ul>
                            <li>Clerk Authentication: The app implements Clerk authentication for enhanced user security, ensuring that user accounts are protected and user data is kept safe.</li>
                            <li>Board, Lists, and Cards: Organize projects into boards, break them down into lists, and tasks into cards.</li>
                            <li>Drag-and-Drop Interface: Easily move cards between lists and boards to update task status or project progress.</li>
                            <li>Collaboration and Sharing: Using Clerk Authentication, you can share boards with team members or collaborators to work together in real-time.</li>
                            <li>Activity Tracking and History: Keep track of all changes, and updates made to tasks or projects.</li>
                            <li>Customizable Workflows: Adapt the workflow to fit specific project requirements or methodologies like agile, scrum, or kanban</li>
                          </ul>
                          <p>
                            <b style={{marginRight: '10px'}}>Skills: TypeScript - Next.js - TailwindCSS - PostgreSQL -</b>
                            <a href="https://github.com/jtran714/task" style={{marginRight: '10px'}} alt='github link'>GitHub</a>
                            <a href="https://task-jtran714.vercel.app/" alt='summary'>Link</a>
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey='third'>
                        <div className="animate-on-visible">
                          <Row>
                            {project3.map((project3, index)=> {
                              return (
                                <ProjectCard key={index} {...project3} />
                              )
                            })}
                          </Row>
                          <div className="project-title">Anime Reactor</div>
                          <p>A full-stack online platform and community for anime and manga enthusiasts. It provides users with the ability to create a personalized list of anime and manga they have watched or read, and track their progress</p>
                        </div>
                        <div className="animate-on-visible">
                          <ul>
                            <li>Anime and Manga Details: Users can access detailed information about anime and manga series, including titles, genres, episode or chapter counts, and release dates.</li>
                            <li>Search Functionality: The platform offers a robust search feature, allowing users to easily find specific anime or manga series by title or other criteria.</li>
                            <li>Detailed Series Pages: Users can view dedicated pages for each anime or manga series, containing essential details such as a synopsis, ratings, and related media</li>
                            <li>Streaming Links: For anime series, users can access streaming links to watch episodes directly from the series page, providing a convenient and integrated viewing experience.</li>
                            <li>Rating System: A rating system is in place, allowing users to rate anime and manga series on a scale from 1 to 10, with 10 being the highest rating and 1 indicating the lowest.</li>
                            <li>Watchlist and Favorites: Users have the ability to add series to their watchlist, making it easy to track shows they plan to watch or read in the future. Additionally, they can mark series as favorites to showcase their most beloved titles.</li>
                          </ul>
                          <p>
                            <b style={{marginRight: '10px'}}>Skills: Python - JavaScript - FastAPI - React - PostgreSQL - Docker -</b>
                            <a href="https://github.com/jtran714/anime-reactor" style={{marginRight: '10px'}} alt='github link'>GitHub</a>
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
