import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import Resume from "./components/Resume";
import ExperienceInfo from "./components/ExperienceInfo";
import "./App.css";

const App = () => {
  // Initialize state

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [dateOfGraduation, setDateOfGraduation] = useState("");
  const [school, setSchool] = useState({});

  const [schools, setSchools] = useState([]);

  const [workName, setWorkName] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [work, setWork] = useState({});

  const [works, setWorks] = useState([]);

  // Handlers for general info
  const handleName = (newName) => {
    setFullName(newName);
  };

  const handleEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePhone = (newPhone) => {
    setPhone(newPhone);
  };

  // Handlers for education info
  const handleSchoolName = (newSchoolName) => {
    setSchoolName(newSchoolName);
  };

  const handleFieldOfStudy = (newFieldOfStudy) => {
    setFieldOfStudy(newFieldOfStudy);
  };

  const handleDateOfGraduation = (newDateOfGraduation) => {
    setDateOfGraduation(newDateOfGraduation);
  };

  const handleSchools = (newSchool) => {
    setSchools(schools.concat(newSchool));
  };

  const handleSchoolSubmit = (newSchool) => {
    setSchool({
      schoolName: schoolName,
      fieldOfStudy: fieldOfStudy,
      dateOfGraduation: dateOfGraduation,
    });
    handleSchools(newSchool);
    console.log(schools);
  };

  // Handlers for work experience
  const handleWorkName = (newWorkName) => {
    setWorkName(newWorkName);
  };

  const handlePosition = (newPosition) => {
    setPosition(newPosition);
  };

  const handleTasks = (newTasks) => {
    setTasks(newTasks);
  };

  const handleStartDate = (newStartDate) => {
    setStartDate(newStartDate);
  };

  const handleEndDate = (newEndDate) => {
    setEndDate(newEndDate);
  };

  // TODO functions for work submit and work delete

  return (
    <div className="App">
      <div className="cv-input">
        <h1>CV Input</h1>
        <GeneralInfo
          fullName={fullName}
          email={email}
          phone={phone}
          handleName={handleName}
          handleEmail={handleEmail}
          handlePhone={handlePhone}
        />
        <EducationInfo
          schoolName={schoolName}
          fieldOfStudy={fieldOfStudy}
          dateOfGraduation={dateOfGraduation}
          schools={schools}
          handleSchoolName={handleSchoolName}
          handleFieldOfStudy={handleFieldOfStudy}
          handleDateOfGraduation={handleDateOfGraduation}
          handleSchools={handleSchools}
          handleSchoolSubmit={handleSchoolSubmit}
          // deleteSchool={deleteSchool}
        />
        <ExperienceInfo
          workName={workName}
          position={position}
          tasks={tasks}
          startDate={startDate}
          endDate={endDate}
          handleWorkName={handleWorkName}
          handlePosition={handlePosition}
          handleTasks={handleTasks}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          // handleWorkSubmit={handleWorkSubmit}
          // handleWorkDelete={handleWorkDelete}
        />
      </div>
      <div className="cv-output">
        <h1>CV Output</h1>
        <Resume />
      </div>
    </div>
  );
};

export default App;
