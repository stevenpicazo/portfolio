

import React from "react";
import resumeFile from "../documents/resume.pdf";
import './resume.css'

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      // yearRange: "2019 - 2022",
      title: "App Academy",
      place: "Full Stack Software Engineering",
      desc: "Rigorous 80+ hour/week scrum-based web development bootcamp with 1000-hour curriculum and < 5% acceptance rate."
    },
    {
      // yearRange: "20 - 2008",
      title: "California Polytechnic State University",
      place: "Marketing Management",
      desc: "Because of my time here, I was able to gain the necessary skills to excel in my role as an operations manager at my previous job.",
    },
    // {
    //   yearRange: "2009 - 2012",
    //   title: "Master Degree",
    //   place: "Harvard University",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
  ];

  const experienceDetails = [
    {
      yearRange: "2019 - 2022",
      title: "Operations Manager",
      place: "Don Baja Grill",
      desc1: "- Successfully introduced online/mobile ordering for the company, delivering a 20% increase in sales which generated over 3500 new orders & counting.",
      desc2: "- Orchestrated the management of all point-of-sale (POS) systems leveraging data analytics to determine high-traffic-orders and improve overall customer experience.",
    },
    // {
    //   yearRange: "2018",
    //   title: "",
    //   place: "St. Margaret Mary",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
    // {
    //   yearRange: "2017 - 2019",
    //   title: "Product Designer",
    //   place: "Adobe",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
  ];

  const skills = [
    // {
    //   name: "Web Design",
    //   percent: 65,
    // },
    // {
    //   name: "HTML/CSS",
    //   percent: 95,
    // },
    // {
    //   name: "JavaScript",
    //   percent: 80,
    // },
    // {
    //   name: "React JS",
    //   percent: 70,
    // },
    // {
    //   name: "Angular Js",
    //   percent: 60,
    // },
    // {
    //   name: "Bootstrap",
    //   percent: 99,
    // },
  ];

  return (
    <section
      id="resume"
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc1}
                  </p>
                  <p className={"mb-0 desc2 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc2}
                  </p>

                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        {/* <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2> */}
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download Full Resume
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;