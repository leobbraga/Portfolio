import { Container, Row, Col } from "react-bootstrap";
import mypic from "../assets/img/my_picture2.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {

  return (
    <section className="about" id="aboutme">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={mypic} alt="About me" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About me</h2>
                  <p>My work years and study teach me many things that I will take forever, such as creativity, communication, planning, and passion for programming!</p>
                  <p>I have experience in the area of database analyses, I did one course of administrative assistant by the Fundação Bradesco and two Bootcamps by the DIO!</p>
                  <p>At the moment I'm studying the second half of the Analysis and development of the system in the FAM, I'm studying the programming languages Java, Python, AWS, Data Base, spring, and Reactjs by the Dio and Udemy and the English language of Advanced to Fluency. </p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}