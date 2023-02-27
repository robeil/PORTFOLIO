import React from "react";

const experienceContent = [
  {
    year: "   2017 - 2021",
    position: " Backend Developer",
    companyName: "LWAM TECH",
    location: "Arlington VA, USA",
    details: `• Collaborated with cross-functional IT teams and implemented proven technologies to develop numerous
    software products while insuring scalability, reusability, and reliability in Agile environment.
    • Participated in a software development team in charge of development, testing and maintenance of a
    software project focusing on back-end components.
    • Participated in the development of:
    o A Modular monolith Custom School management system that can be implemented on different schools with minor modifications.
    o A Microservice based bank management system
    o A Microservice based Online Marketing system
    • Built, tested, and maintained software with Spring framework technologies.
    • Implemented and used microservices architecture for application development
    • Maintained software and documented programming tasks and procedures.`,
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
          <p className="open-sans-font">{val.details}</p>
          <h6 className="place open-sans-font">
            {val.technologies}
          </h6>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
