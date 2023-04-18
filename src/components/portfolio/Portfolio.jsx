import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG6,
      title: "Spotify Clone - Spotify But Better",
      github: "https://github.com/Rahul12Arora/Spotify-Master",
      demo: "https://superb-spotify.netlify.app/",
    },

    {
      id: 2,
      image: IMG3,
      title: "Admin DashBoard Planner",
      github: "https://github.com/Rahul12Arora/Admin-Dashboard-Fullstack-Master",
      demo: "https://admin-frontend-4xk1.onrender.com",
    },
    {
      id: 3,
      image: IMG2,
      title: "Disney HotStar Clone - Using JavaScript, HTML & CSS",
      github: "https://github.com/Rahul12Arora/Disney-Hotstar-clone",
      demo: "https://superlative-mandazi-0759f5.netlify.app/",
    }
    // {
    //   id: 4,
    //   image: IMG1,
    //   title: "Spotify Inspired Music Player - Using React.js And Redux Toolkit",
    //   github: "https://github.com/abhideepghosh/spotify-clone-react",
    //   demo: "https://spotify-clone-using-react.netlify.app/",
    // },
    // {
    //   id: 5,
    //   image: IMG5,
    //   title:
    //     "Admin Dashboard Using React.js, Material UI, Nevo And fullCalendar",
    //   github: "https://github.com/abhideepghosh/admin-dashboard",
    //   demo: "https://teslaadmindashboard.netlify.app/",
    // },
    // {
    //   id: 6,
    //   image: IMG4,
    //   title: "Forkify - Using JavaScript, MVC Architectural Pattern",
    //   github: "https://github.com/abhideepghosh/forkify-js",
    //   demo: "https://forkify-webapp-js.netlify.app/",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
