import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage_1 = 80;
const percentage_2 = 50;
const percentage_3 = 30;
const percentage_4 = 70;
const percentage_5 = 40;
const percentage_6 = 60;


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p><br></br> </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <CircularProgressbar
                    value={percentage_1}
                    text={`${percentage_1}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>English Proeficient</h5>
                </div>

                <div className="item">
                  <CircularProgressbar
                    value={percentage_2}
                    text={`${percentage_2}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={percentage_3}
                    text={`${percentage_3}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={percentage_2}
                    text={`${percentage_2}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>Reactjs</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={percentage_4}
                    text={`${percentage_4}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>html, js and css</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={percentage_5}
                    text={`${percentage_5}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>Agile methodologies</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={percentage_6}
                    text={`${percentage_6}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>SQL, PostgreSQL and noSQL</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={percentage_5}
                    text={`${percentage_5}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={percentage_5}
                    text={`${percentage_5}%`}
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#151515",
                      textColor: "#fff",
                      pathColor: "purple",
                      trailColor: "#151515"
                    })}
                  />
                  <h5>Spring Boot</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
