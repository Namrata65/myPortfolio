import React from "react";
import web from "../resources/techLogo/icons8-web-development-100.png";
import development from "../resources/techLogo/icons8-web-100.png";
import software from "../resources/techLogo/icons8-rocket-96.png";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>My Education</h2>
          {/* <p>Our services are designed to meet the needs of our clients Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, consequuntur.</p> */}
        </div>
        <div className="services-content">
          <ul>
            <li>
              <img src={software} alt="Services logo icon" />
              <h5>WMDD</h5>
              <p>Web and Mobile Development</p>
              <span>Langara College</span>
              <address>Vancouver, BC, Canada</address>
              <p>Jan 2024 - April 2025</p>
            </li>
            <li>
              <img src={web} alt="Services logo icon" />
              <h5>MCA</h5>
              <p>Master of Computer Applications</p>
              <span>Guru Nanak Dev University</span>
              <address>Amritsar, Punjab, India</address>
              <p>July 2017 - May 2020</p>
            </li>

            <li>
              <img src={development} alt="Services logo icon" />
              <h5>BCA</h5>
              <p>Bachelor of Computer Applications</p>
              <span>BBK DAV College</span>
              <address>Amritsar, Punjab, India</address>
              <p>April 2014 - May 2017</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
