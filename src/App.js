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
  const [school, setSchool] = useState({
    schoolName: "",
    fieldOfStudy: "",
    dateOfGraduation: "",
  });

  const [schools, setSchools] = useState([]);

  const [workName, setWorkName] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [work, setWork] = useState({
    workName: "",
    position: "",
    tasks: "",
    startDate: "",
    endDate: "",
  });

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
    setSchool((school) => ({
      ...school,
      schoolName: newSchoolName,
    }));
  };

  const handleFieldOfStudy = (newFieldOfStudy) => {
    setFieldOfStudy(newFieldOfStudy);
    setSchool((school) => ({
      ...school,
      fieldOfStudy: newFieldOfStudy,
    }));
  };

  const handleDateOfGraduation = (newDateOfGraduation) => {
    setDateOfGraduation(newDateOfGraduation);
    setSchool((school) => ({
      ...school,
      dateOfGraduation: newDateOfGraduation,
    }));
    console.log(school);
  };

  const handleSchools = (newSchool) => {
    setSchools(schools.concat(newSchool));
  };

  const handleSchoolSubmit = (e) => {
    handleSchools(school);
    setSchool({
      schoolName: schoolName,
      fieldOfStudy: fieldOfStudy,
      dateOfGraduation: dateOfGraduation,
    });
    handleSchoolName(e);
    handleFieldOfStudy(e);
    handleDateOfGraduation(e);
    e.preventDefault();
  };

  const deleteSchool = (schoolName) => {
    setSchools(schools.filter((school) => school.schoolName !== schoolName));
  };

  // Handlers for work experience
  const handleWorkName = (newWorkName) => {
    setWorkName(newWorkName);
    setWork((work) => ({
      ...work,
      workName: newWorkName,
    }));
  };

  const handlePosition = (newPosition) => {
    setPosition(newPosition);
    setWork((work) => ({
      ...work,
      position: newPosition,
    }));
  };

  const handleTasks = (newTasks) => {
    setTasks(newTasks);
    setWork((work) => ({
      ...work,
      tasks: newTasks,
    }));
  };

  const handleStartDate = (newStartDate) => {
    setStartDate(newStartDate);
    setWork((work) => ({
      ...work,
      startDate: newStartDate,
    }));
  };

  const handleEndDate = (newEndDate) => {
    setEndDate(newEndDate);
    setWork((work) => ({
      ...work,
      endDate: newEndDate,
    }));
  };

  const handleWorks = (newWork) => {
    setWorks(works.concat(newWork));
  };

  const handleWorkSubmit = (e) => {
    handleWorks(work);
    setWork({
      workName: workName,
      position: position,
      tasks: tasks,
      startDate: startDate,
      endDate: endDate,
    });
    handleWorkName(e);
    handlePosition(e);
    handleTasks(e);
    handleStartDate(e);
    handleEndDate(e);
    e.preventDefault();
  };

  const handleWorkDelete = (workName) => {
    setWorks(works.filter((work) => work.workName !== workName));
  };

  return (
    <div className="App">
      <div className="cv-input">
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
          school={school}
          schools={schools}
          // handleSchool={handleSchool}
          handleSchoolName={handleSchoolName}
          handleFieldOfStudy={handleFieldOfStudy}
          handleDateOfGraduation={handleDateOfGraduation}
          handleSchools={handleSchools}
          handleSchoolSubmit={handleSchoolSubmit}
          deleteSchool={deleteSchool}
        />
        <ExperienceInfo
          workName={workName}
          position={position}
          tasks={tasks}
          startDate={startDate}
          endDate={endDate}
          work={work}
          works={works}
          handleWorkName={handleWorkName}
          handlePosition={handlePosition}
          handleTasks={handleTasks}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          handleWorkSubmit={handleWorkSubmit}
          handleWorkDelete={handleWorkDelete}
        />
      </div>
      <div className="cv-output">
        <Resume
          fullName={fullName}
          email={email}
          phone={phone}
          schools={schools}
          works={works}
          handleName={handleName}
          handleEmail={handleEmail}
          handlePhone={handlePhone}
        />
      </div>
    </div>
  );
};

export default App;
