import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bootstrap</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React Icons</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ant Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Material UI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Styled Components</p>
            </li>
          </ul>
        </article>

        {/* ======END OF UI/UX========= */}
        <article className="services">
          <div className="services__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React.js Library</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Express.js</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> MongoDB</p>
            </li>
          </ul>
        </article>
        {/* ===========END OF WEB DEVELOPMENT=============== */}
        <article className="services">
          <div className="services__head">
            <h3>Data Structures And Algorithms</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Good Problem Solving Skills</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Top 10 Performers Of The Newton Batch</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Part Of Newton Super 50.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
