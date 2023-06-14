import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p75", skillPercent: "85", skillName: "JAVASCRIPT" },
  { skillClass: "p85", skillPercent: "85", skillName: "CSS" },
  { skillClass: "p95", skillPercent: "95", skillName: "Java" },
  { skillClass: "p95", skillPercent: "95", skillName: "Spring Boot"},
  { skillClass: "p95", skillPercent: "95", skillName: "Spring"},
  { skillClass: "p80", skillPercent: "80", skillName: "JQUERY" },
  { skillClass: "p85", skillPercent: "85", skillName: "REACT" },
  { skillClass: "p85", skillPercent: "85", skillName: "SQL Mysql, SQL server" },
  { skillClass: "p85", skillPercent: "85", skillName: "No SQL, MongoDB" },
  { skillClass: "p85", skillPercent: "85", skillName: "AWS"},
  { skillClass: "p80", skillPercent: "80", skillName: "Design Pattern"},
  { skillClass: "p80", skillPercent: "80", skillName: "Kafka"},
  { skillClass: "p88", skillPercent: "88", skillName: "JUnit"},
  { skillClass: "p89", skillPercent: "89", skillName: "Microservices"},
  { skillClass: "p89", skillPercent: "70", skillName: "Docker"},
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
