import React from "react";
import image from "../resources/girl.png";

const Introduction = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Namrata_Kanda.pdf";
    link.download = "Namrata_Kanda.pdf";
    link.click();
  };
  return (
    <section id="introduction" className="about-area">
      <div className="about-area-container">
        <div className="about-area-left">
          <img src={image} alt="Introduction image"></img>
        </div>
        <div className="about-area-right">
          <h2>
            Let's
            <br /> Introduce <br /> Myself
          </h2>
          <p>
            I’m a passionate and dedicated software developer who loves turning
            ideas into functional, user-focused digital experiences. Whether
            it’s building sleek interfaces or optimizing backend logic, I enjoy
            creating solutions that are both thoughtful and efficient.
          </p>
          <p>
            With hands-on experience across the full development stack, I’ve
            contributed to projects that balance technical precision with
            thoughtful design. I believe great software is built through
            collaboration — and I thrive in team environments where ideas are
            shared, problems are solved together, and growth is continuous.
          </p>
          <button className="purple-button" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
