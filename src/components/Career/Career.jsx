import React, { useState } from 'react';
import './Career.css';

function Career() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isOpenExperience, setIsOpenExperience] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  
  const educationOptions = [
    { value: 'btech', label: 'BTech' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'ssc', label: 'Schooling' },
  ];

  const educationDetails = [
    {
      value: 'btech',
      label: 'BTech',
      details: [
        { label: 'College :', value: 'VVIT' },
        { label: 'Branch :', value: 'CSE(AI-ML)' },
        { label: 'CGPA :', value: '8.3' },
        { label: 'Duration :', value: '2022-Present' },
      ],
    },
    {
      value: 'diploma',
      label: 'Diploma',
      details: [
        { label: 'College :', value: 'GPT-VJA' },
        { label: 'Branch :', value: 'EEE' },
        { label: 'CGPA :', value: '8.3' },
        { label: 'Duration :', value: '2019-2022' },
      ],
    },
    {
      value: 'ssc',
      label: 'Schooling',
      details: [
        { label: 'School :', value: 'Adarsh-EM School' },
        { label: 'CGPA :', value: '10' },
        { label: 'Board :', value: 'SSC' },
        { label: 'Duration :', value: '2010-2019' },
      ],
    },
  ];

  const experienceOptions = [
    { value: 'internship', label: 'Internship' },
    { value: 'fullTime', label: 'Full-Time' },
    { value: 'freelance', label: 'Freelance' },
  ];

  const experienceDetails = [
    {
      value: 'internship',
      label: 'Internship',
      details: [
        { label: 'Cohort-6 :', value: 'Paloalto Networks' },
        { label: 'Role :', value: 'Trainee' },
        { label: 'Duration :', value: '8 weeks' },
        { label: 'Mode :', value: 'Online' },
        { label: 'Cohort-4 :', value: 'Fortinet Networks' },
        { label: 'Role :', value: 'Trainee' },
        { label: 'Duration :', value: '8 weeks' },
        { label: 'Mode :', value: 'Online' },
      ],
    },
    {
      value: 'fullTime',
      label: 'Full-Time',
      details: [
        { label: 'Company : ', value: 'AP-TRANSCO' },
        { label: 'Role :', value: 'Industrial Trainee' },
        { label: 'Duration :', value: '6 Months' },
      ],
    },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (education) => {
    setSelectedEducation(education);
    setIsOpen(false);
  };

   const handleExperienceClick = () => {
    setIsOpenExperience(!isOpenExperience);
  };

  const handleExperienceSelect = (experience) => {
    setSelectedExperience(experience);
    setIsOpenExperience(false);
  }

  return (
    <div className="econtainer1">
      <div className="ec0">
        Career
      </div>
      <div className="lc1">
        *click on the section to get dropdowns!
      </div>
      <div className="ec1">
        <div className="ec11">
          <div className="ec12">
            <button onClick={handleClick}>Education</button>
            {isOpen && (
              <ul className="dropdown-menu">
                {educationOptions.map((education) => (
                  <li key={education.value}>
                    <button onClick={() => handleSelect(education)}>{education.label}</button>
                  </li>
                ))}
              </ul>
            )}
            {selectedEducation && (
              <div className="education-content">
                <p>✦{selectedEducation.label}</p>
                <ul>
                  {educationDetails
                    .filter((detail) => detail.value === selectedEducation.value)
                    .map((detail) => (
                      <li key={detail.value}>
                        {detail.details.map((item) => (
                          <li key={item.label}>
                            {item.label} {item.value}
                          </li>
                        ))}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <div className="ec13"></div>
        </div>
        <div className="ec2">
        <div className="ec23">
          <button onClick={handleExperienceClick}>Experience</button>
          {isOpenExperience && (
            <ul className="dropdown-menu">
              {experienceOptions.map((experience) => (
                <li key={experience.value}>
                  <button onClick={() => handleExperienceSelect(experience)}>{experience.label}</button>
                </li>
              ))}
            </ul>
          )}
          {selectedExperience && (
            <div className="experience-content">
              <p>✦ {selectedExperience.label}</p>
              <ul>
                {experienceDetails
                  .filter((detail) => detail.value === selectedExperience.value)
                  .map((detail) => (
                    <li key={detail.value}>
                      {detail.details.map((item) => (
                        <li key={item.label}>
                          {item.label} {item.value}
                        </li>
                      ))}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="ec22"></div>
    </div>
  </div>
 </div>
  );
}

export default Career;
