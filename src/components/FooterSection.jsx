import React from "react";

const FooterSection = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <a href="#">
            {/* <img src={img} alt="" /> */}
            <h3>Namrata</h3>
          </a>
          <h4>Follow Me</h4>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/namm_rtaa/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/namrata-kanda/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/dashboard">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="footer-copyright">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This template is made with{" "}
            <i className="fa-regular fa-heart" aria-hidden="true"></i> by Namrata
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
