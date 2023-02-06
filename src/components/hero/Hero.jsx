import React, { useState } from "react";
import Modal from "react-modal";
//import heroImg from "../../assets/img/hero/dark.jpg";
import heroImgMobile from "../../assets/img/hero/profileOne.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../about/index";
import profileOne from "../../assets/img/hero/profileOne.jpg";

const heroContent = {
  heroImage: profileOne,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Robeil Aregawi",
  heroDesignation: "Software Engineer",
  heroDescriptions: `Talented Java Software Engineer with 4 years of Hands-on back-end experience, 
  including latest experience in designing and improving microservices applications. Proven experience in optimizing 
  code readability and improving team performance by implementing best practices and ensuring industry standards. 
  Experienced in all stages of the software development lifecycle, with a valuable role in everything from requirements 
  gathering to analysis, design, development, testing, and deployment. Expertise in the development of back-end components, 
  as well as databases, algorithms, interfaces, APIs, and tools. Technological knowledge includes Java spring, spring boot and
  MS SQL, MySQL, MongoDB as well as a variety of design patterns. Just completed my master’s degree education in Computer Science 
  and awaiting my graduation ceremony this June 2023. Skilled in using technologies such as Java, TypeScript, GitHub, Spring, 
  Hibernate, Microservices using Agile Scrum through complete software development life cycle.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className=" poppins-font">
              I'm {heroContent.heroTitleName}
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
