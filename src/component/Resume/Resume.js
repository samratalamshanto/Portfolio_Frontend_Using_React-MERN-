import React from "react";

import CardResume from "./CardResume";
import ResumeData from "./ResumeData";
import CardJobExperience from "./CardJobExperience";
import "./Resume.css";
import "../../App.css";

import company_img from "./resume photo/reddot.png";

const education =
  "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-education-translation-and-language-xnimrodx-lineal-color-xnimrodx.png";
const about_me = "https://img.icons8.com/officel/80/null/guest-male.png";
const Resume = () => {
  return (
    <>
      <section className="resume" id="resume">
        <div className="resume_container">
          <div className="heading_flex ">
            <img src={about_me} alt="" />
            <h1>My Profile</h1>
          </div>

          <div className="content-section resume_div">
            <div className="d_flex">
              <div className="heading1 d_flex1">
                <h1>Experience:</h1>
              </div>

              <div className="content ">
                <CardJobExperience
                  title={"Red.Digital Limited, Robi Axiata Limited."}
                  year={"Software Developer (Sept 2022-Present)"}
                  skills={"Spring Boot, Java, Angular"}
                  desc={""}
                  img={company_img}

                />


              </div>
            </div>
            <div className="br_div"></div>
            <div className="d_flex">
              <div className="heading d_flex1">
                <h1>Education:</h1>
              </div>

              <div className="content ">
                {ResumeData.map((val, index) => {
                  return (
                    <CardResume
                      key={index}
                      year={val.year}
                      title={val.title}
                      gpa={val.gpa}
                      img={val.img}
                      desc={val.desc}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
