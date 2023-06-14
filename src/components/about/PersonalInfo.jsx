import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Robeil" },
  { meta: "last name", metaInfo: "Aregawi" },
  { meta: "Address", metaInfo: "Seattle, WA" },
  { meta: "phone", metaInfo: "206-602-5164" },
  { meta: "Email", metaInfo: "robeilfeb27@gmail.com" },
  { meta: "language", metaInfo: "English, Tigrinya, German" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
