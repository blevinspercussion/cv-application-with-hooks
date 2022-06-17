import React from "react";
import "./resume_styles.css";

const Resume = ({
  fullName,
  email,
  phone,
  schools,
  works,
  handleName,
  handleEmail,
  handlePhone,
}) => {
  return (
    <div className="resume-div">
      <h1>{fullName}</h1>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <hr />
      <h2>Education</h2>
      <ul>
        {schools?.map((index) => (
          <li key={index.schoolName} value={index.schoolName}>
            <strong>{index.schoolName}</strong> <br />
            Field of Study- {index.fieldOfStudy} <br />
            Date of Completion- {index.dateOfGraduation}
            <br />
            <br />
          </li>
        ))}
      </ul>
      <hr />
      <h2>Experience</h2>
      <ul>
        {works?.map((index) => (
          <li key={index.workName} value={index.workName}>
            <strong>{index.workName}</strong>
            <br />
            Position- {index.position}
            <br />
            Tasks- {index.tasks}
            <br />
            Start Date- {index.startDate}
            <br />
            End Date- {index.endDate}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
