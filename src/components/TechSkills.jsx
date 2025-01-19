import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from '../components/Skills';
import image from '../resources/nams.jpeg'

const TechSkills = () => {
  return (
    <section className="techskills">
      <div className="techskills-container">
        <Carousel fade>
          <Carousel.Item interval={1500}>
            <Skills/>
            <Carousel.Caption>
              <h3>Developing</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={image} alt="Image" />
            <Carousel.Caption>
              <h3>Designing</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={image} alt="Image" />
            <Carousel.Caption>
              <h3>Management</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default TechSkills;
