import React from "react";
import img from "../resources/nams.jpeg";

const MainHeader = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Namrata_Kanda.pdf";
    link.download = "Namrata_Kanda.pdf";
    link.click();
  };
  const email = "namratakanda8@gmail.com"; 
  const subject = "Inviting to discuss the proposal";
  const body = "I would like to connect with you regarding...";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="main-header-section">
      <div className="main-header-container">
        <div className="main-header">
          <div className="main-header-left">
            <h3>Hello</h3>
            <h1>I AM NAMRATA KANDA</h1>
            <h5>FULL STACK DEVELOPER</h5>
            <div className="main-header-buttons">
              <button className="purple-button">
                <a href={mailtoLink}>Hire me</a>
              </button>
              <button className="purple-button" onClick={handleDownload}>
                Get CV
              </button>
            </div>
          </div>
          <div className="main-header-right">
            <img src={img} alt="Main Header Image"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
