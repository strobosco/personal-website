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
            Applications team for one year. During that time I was introduced to
            the world of professional software development as well as the realm
            of cybersecurity. I enjoyed my time at Proofpoint, and it was an
            immense learning experience, both personally and professionaly. Some
            of my accomplishments during my year at the company are:
          </p>
          <p className="project-tools">
            <ul>
              <li>
                Refactored a query-based app using MySQL, React, Node, Perl,
                DBI, DBIx
              </li>
              <li>
                Restructured internal documentation and wrote new, extensive
                documentation for new projects
              </li>
              <li>
                Integrated systems into an automated build process as to deploy
                it within a larger service
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
