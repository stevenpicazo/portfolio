import React from "react";
import js from '../skills/js.png'
import python from '../skills/python.png'
import flask from '../skills/flask.png'
import express from '../skills/express.png'
import git from '../skills/git.png'
import html from '../skills/html.png'
import nodejs from '../skills/nodejs.png'
import postgres from '../skills/postgres.png'
import react from '../skills/react.png'
import redux from '../skills/redux.png'
import render from '../skills/render.png'
import sql from '../skills/sql.png'
import css from '../skills/css.png'
import sequelize from '../skills/sequelize.png'
import sqlalchemy from '../skills/sqlalchemy.png'
import socketio from '../skills/socketio.png'
import npm from '../skills/npm.png'
import Slider from "react-slick";
import './skills.css'
const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Dennis Jacques",
      position: "User from USA",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
      rating: 5,
    },
    {
      name: "Jay Shah",
      position: "Founder at Icomatic Pvt Ltd",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
      rating: 5,
    },
    {
      name: "Patrick Cary",
      position: "Freelancer from USA",
      src: "images/testimonial/client-sm-2.jpg",
      desc: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
      rating: 5,
    },
    {
      name: "Chris Tom",
      position: "User from UK",
      src: "images/testimonial/client-sm-4.jpg",
      desc: "I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. Excellent.",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            SKILLS
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            What I work with
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>

        <div className="skills">
          <div className="skills-row-1">
            <div className="skill-container">
              <img className="skill-img" src={js} />
              <div className="skill-text">Javascript</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={python} />
              <div className="skill-text">Python</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={nodejs} />
              <div className="skill-text">Node.js</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={sql} />
              <div className="skill-text">SQL</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={css} />
              <div className="skill-text">CSS</div>
            </div>
          </div>

          <div className="skills-row-2">
            <div className="skill-container">
              <img className="skill-img" src={react} />
              <div className="skill-text">React</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={redux} />
              <div className="skill-text">Redux</div>
            </div>


            <div className="skill-container">
              <img className="skill-img" src={socketio} />
              <div className="skill-text">Socket.IO</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={sequelize} />
              <div className="skill-text">Sequelize</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={html} />
              <div className="skill-text">HTML5</div>
            </div>

          </div>
          <div className="skills-row-2">
            <div className="skill-container">
              <img className="skill-img" src={postgres} />
              <div className="skill-text">PostgreSQL</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={git} />
              <div className="skill-text">Git</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={express} />
              <div className="skill-text">Express</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={render} />
              <div className="skill-text">Render</div>
            </div>
            <div className="skill-container">
              <img className="skill-img" src={npm} />
              <div className="skill-text">NPM</div>
            </div>
          </div>

          <div className="skills-row-3">
            <div className="skill-container">
              <img className="skill-img-row3" src={sqlalchemy} />
              <div className="skill-text">SQLAlchemy</div>
            </div>
            <div className="skill-container">
              <img className="skill-img-row3" src={flask} />
              <div className="skill-text">Flask</div>
            </div>
          </div>
        </div>

        {/* Heading end*/}

        {/* <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider> */}
      </div>
    </section>
  );
};

export default Testimonials;
