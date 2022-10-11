const Work = () => {
  return (
    <div className="section">
      <p className="heading">Work Experience</p>
      <div className="project-card">
        <div className="project-description">
          <p className="project-title">
            Proofpoint, Inc. - Sofware Engineering Intern
          </p>
          <p className="project-text">
            Worked as a SWE intern at Proofpoint as a part of the Business
            Applications team:
          </p>
          <p className="project-tools">
            <ul>
              <li>
                Restructured internal documentation and wrote new, extensive
                documentation for new applications
              </li>
              <li>
                Developed a new integration for React, allowing its use in the
                current development environment
              </li>
              <li>
                Developed an automation for alerts, reducing wait time from days
                to hours
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
