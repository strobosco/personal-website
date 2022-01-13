const Projects = () => {
  return (
    <div className="section">
      <p className="heading">Projects</p>
      <div className="project-card">
        <div className="project-description">
          <p className="project-title">Spotify Clustering</p>
          <p className="project-text">
            Spotify Clustering web app that creates new playlists from a users
            songs. The user selects a series of their playlists and how many new
            playlists they wish to create.
          </p>
          <p className="project-tools">
            Tools: React, GraphQL, Express.js, Next.js
          </p>
        </div>
        <div className="button-div">
          <a
            href="https://github.com/strobosco/CSCHacks"
            rel="noopener noreferrer"
            target="_blank"
            className="code-button"
          >
            View code
          </a>
        </div>
      </div>
      <div className="project-card">
        <div className="project-description">
          <p className="project-title">Strobo</p>
          <p className="project-text">
            Reddit clone implemented using fullstack technologies. Deployed on
            Google Cloud using Kuberentes and Docker before it became obsolete.
          </p>
          <p className="project-tools">
            Tools: React, GraphQL, Express.js, Next.js, Redis, K8, Docker
          </p>
        </div>
        <div className="button-div">
          <a
            href="https://github.com/strobosco/strobo"
            rel="noopener noreferrer"
            target="_blank"
            className="code-button"
          >
            View code
          </a>
        </div>
      </div>
      <div className="project-card">
        <div className="project-description">
          <p className="project-title">Boids</p>
          <p className="project-text">
            Golang implementation of Craig Reynold's boids simulatio. Inspired
            by my father.
          </p>
          <p className="project-tools">Tools: Golang</p>
        </div>
        <div className="button-div">
          <a
            href="https://github.com/strobosco/boids"
            rel="noopener noreferrer"
            target="_blank"
            className="code-button"
          >
            View code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
