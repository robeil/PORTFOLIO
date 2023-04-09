import React from "react";

const experienceContent = [
  {
    year: "2017 - 2021",
    position: "Java Developer",
    companyName: "LWAM TECH SOLUTIONS LLC",
    location: "Alexandria VA, USA",
    details: `The Eri-root website began as a social platform, designed to bring together members of the Eritrean community. 
    Over time, the site evolved to include a dating platform, which allowed members to connect and build relationships based 
    on shared values and interests. In addition to the dating app, the site also launched an educational platform that offers 
    online courses and resources to help members develop new skills and pursue their educational goals.`,
    responsibilities: [
      `Collaborated with cross-functional IT teams and implemented proven technologies to develop numerous software products while insuring scalability, reusability, and reliability in Agile environment.`,
      `Participated in a software development team, testing and maintenance of a software project focusing on back-end components.`,
      `Involved in requirement gathering, analysis, design & development of the project.`,
      `Designed and develop application features that were outlined in the application requirements.`,
      `Proficient in developing service layer using Java.`,
      `Built and maintained software with Spring framework technologies and microservices architecture for application development.`,
      `Ensured it is scalable and performs well under different loads and usage scenarios.`,
      `Maintained software and documented programming tasks and procedures. `,
      `Designed and developed various abstract classes, interfaces, classes to construct the business logic.`,
      `Used Maven for Project building and Git for version control.`,
      `Implemented and used microservices architecture for application development.`,
      `Wrote clean, efficient, and maintainable code that follows industry best practice and coding standard.`
    ],
    technologies: ` Technologies Used: Java, Spring, Spring Boot, REST, JUnit, Mockito, IntelliJ, Maven, Kafka, Microservices technologies (Eureka, Feign, ConfigServer, Zipkin, Ribbon...)`,
  }
];

const Experience = () => {

  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <h5 className="poppins-font text-uppercase">
            <span className="place open-sans-font">{val.location}</span>
          </h5>
          <h5 className="poppins-font ">
            <span className="place open-sans-font">{val.details}</span>
          </h5>
          <h5 className="place open-sans-font">RESPONSIBILITIES
            {val.responsibilities.map((res, u) => (
                <li key={u}>{res}</li>
              ))}
              </h5>
          <h6 className="place open-sans-font">
            {val.technologies}
          </h6>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
