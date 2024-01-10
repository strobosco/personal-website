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
            Applications team. My internship lasted one calendar year.
            Throughout my internship I developed tools for internal usage. I was
            also introduced to the world of professional software development as
            well as the field of cybersecurity. I enjoyed my time working at
            Proofpoint, and it was an immense learning experience, both
            personally and professionaly. Some of my accomplishments during my
            year at the company are:
          </p>
          <ul className="project-tools">
            <li>
              Developed a real time querying application using MySQL, React,
              Node, Perl, DBI, DBIx while following basic design principles and
              ensuring the efficiency and reliability of the app.
            </li>
            <li>
              Restructured internal documentation concerning the team's work as
              well writing new, extensive documentation for the projects I was
              working on.
            </li>
            <li>
              Integrated my project into the company's CI/CD pipeline as well as
              oversaw its push to production
            </li>
            <li>
              Helped onboard new members of the team my creating helpful guides
              concerning team structure, tech stack, and helpful contacts
            </li>
          </ul>
        </div>
        <div className="button-div">
          <img
            src="./proofpoint-logo.svg"
            alt="Proofpoint Logo"
            className="proofpoint-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
