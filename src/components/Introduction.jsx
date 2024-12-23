import React from "react";
import img from "../resources/nams.jpeg";

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
          <img src={img} alt="Introduction image"></img>
        </div>
        <div className="about-area-right">
          <h2>
            Let's
            <br /> Introduce <br /> Myself
          </h2>
          <p>
            I am a passionate and dedicated software developer with a strong
            background in computer science and software engineering. I have a
            proven track record of delivering high-quality software solutions
            that meet and exceed customer expectations.
          </p>
          <p>
            I am a strong believer in the importance of teamwork and
            collaboration, and I have a proven ability to work effectively with
            cross-functional teams to deliver high-quality software solutions.
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
