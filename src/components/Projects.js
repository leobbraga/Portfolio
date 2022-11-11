import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ComingSoonImg from "../assets/img/comingsoon.jpg";
import project1 from "../assets/img/Netflix_Site.jpg";
import project2 from "../assets/img/Snake_game.jpg";
import project3 from "../assets/img/Insta_Pag.png";
import project4 from "../assets/img/Face_pag.png"
import project5 from "../assets/img/Rps_Game.png"
import project6 from "../assets/img/Dog_manag.png"
import project7 from "../assets/img/Weather_IMG.png"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: <a href="https://github.com/leobbraga/netflix_Clone">Netflix Home</a>,
      description: "A project with css, bootstrap and html",
      imgUrl: project1,
    },
    {
      title: <a href="https://github.com/leobbraga/Snake_Game">Snake Game</a>,
      description: "A game with html, css and js",
      imgUrl: project2,
    },
    {
      title: <a href="https://github.com/leobbraga/Instagram_clone">Instagram inicial</a>,
      description: "A Website with html and css",
      imgUrl: project3,
    },
    {
      title: <a href="https://github.com/leobbraga/facebookClonePag">Facebook inicial</a>,
      description: "A Website with html, css and js",
      imgUrl: project4,
    },
    {
      title: <a href="https://github.com/leobbraga/RPS-Game">RPS game</a>,
      description: "A game with html, css and js",
      imgUrl: project5,
    },
    {
      title: <a href="https://github.com/leobbraga/Petshop_Desktop_Aplication">Petshop management</a>,
      description: "A project with java, mvc, sql and java swing. *In development*",
      imgUrl: project6,
    },
  ];

  const projects2 = [
    {
      title: <a href="https://github.com/leobbraga/WeatherApp">Weather</a>,
      description: "A website with API rest and react",
      imgUrl: project7,
    },
    {
      title: <a href="">Vilefood</a>,
      description: "A website to buy food with sql, reactjs and Java *In development*",
      imgUrl: ComingSoonImg,
    },
    {
      title: <a href="https://github.com/leobbraga/VileBank">VileBank</a>,
      description: "A bank with sql, reactjs and java *In development*",
      imgUrl: ComingSoonImg,
    },
    {
      title: <a href="">TechFormat</a>,
      description: "A project with java, mvc, sql and java swing. *In development*",
      imgUrl: ComingSoonImg,
    },
    {
      title: "Thinking...",
      description: "Thinking...",
      imgUrl: ComingSoonImg,
    },
    {
      title: "Thinking...",
      description: "Thinking...",
      imgUrl: ComingSoonImg,
    },
  ];
  
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <p>Click on the name of the project to go into the repository</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"> 
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <p>Click on the name of the project to go into the repository</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>It's coming soon, please come back later :)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
