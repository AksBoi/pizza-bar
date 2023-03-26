import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-container" id="footer">
        <div className="footer">
          <div className="about-footer">
            <div className="contactNo">
              <h1>PIZZA-BAR</h1>
            </div>
            <p>
              <a href="mailto:akshatsurana.work@gmail.com" rel="nofollow">
                {" "}
                pizza-bar@help
              </a>
            </p>
          </div>
          <div className="contact-number">
            <h2> Address </h2>{" "}
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum, veritatis dicta earum odio accusamus?
            </p>
          </div>
          <div className="quick-link">
            <h2> Reach Us </h2>{" "}
            <p>
              {" "}
              <br /> Twitter <br /> Instagram <br /> Facebook <br /> 
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; PIZZA-BAR</p>
        {<h3>
          Developed with &#x2764; by{" "}
          <a
            href="https://www.linkedin.com/in/akshat-surana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akshat Surana
          </a>
        </h3>}
      </div>
    </>
  );
}

export default Footer;
