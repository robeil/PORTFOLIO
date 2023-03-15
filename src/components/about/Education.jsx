import React from "react";

const educationContent = [
  {
    year: "2023",
    degree: "MASTER DEGREE",
    institute: "Maharishi International University",
    details: `Computer Science`,
    grade : `GPA :- 3.8`
  },
  {
    year: "2020",
    degree: "Certificate",
    institute: "Washington University",
    details: `Full Stack Web Development`,
    grade : `Grade :- A`
  },
  {
    year: "2015",
    degree: "BACHELOR DEGREE ",
    institute: "Eritrean Institute Technology",
    details: `Computer Science`,
    grade : `GPA :- 3.6`
  },
  {
  
    degree: "AWS Cloud Computing Practitioner",
    institute: "AWS",
    details: `Certificate on Cloud Computing`
  },
  {
  
    degree: "Agile/Scrum Master",
    institute: "UDEMY",
    details: `Certificate on Agile/Scrum Master`
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <p className="open-sans-font">{val.grade}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
