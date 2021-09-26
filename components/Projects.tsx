import React from "react";

import type { NextPage } from "next";
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  Toolbar,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Projects: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          mt: 10,
          lineHeight: 8,
          ml: 23,
          color: "white",
          fontSize: 38,
          fontFamily: "Gill Sans",
        }}
      >
        <Card
          raised={true}
          sx={{ bgcolor: "#1b1b1b", width: "80%", borderRadius: 5 }}
        >
          <CardContent sx={{ color: "white" }}>
            <Typography variant="h3" sx={{ fontFamily: "Gill Sans" }}>
              Projects
            </Typography>
            <Card
              raised={true}
              sx={{ bgcolor: "#212121", width: "80%", mt: 5, borderRadius: 5 }}
            >
              <CardContent sx={{ color: "white" }}>
                <Toolbar>
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "Gill Sans", ml: 0 }}
                  >
                    Strobo
                  </Typography>
                  <Box sx={{ position: "absolute", right: 0, mr: -5 }}>
                    <a
                      href="https://github.com/strobosco/strobo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 10 }}
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="1x"
                        ></FontAwesomeIcon>
                      </IconButton>
                    </a>
                  </Box>
                </Toolbar>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Gill Sans",
                    fontSize: 20,
                    mt: 2,
                  }}
                >
                  Strobo was a side-project that initially started as a YouTube
                  tutorial follow through. It started as a Reddit clone using
                  the latest technology available, both in frontend and backend
                  environments. After completing the tutorial I decide to
                  continue developing the idea into something new, of my own
                  creation. This is where the idea for a
                  {"transparent and responsible"} social media was born. After
                  extensive function development I decided to try and deploy the
                  product. This is where I furthered my knowledge with
                  Kubernetes, Docker, Nginx, and Google Cloud Platform. The
                  entire tech stack for the product is: <br />
                  <h4>Frontend</h4>
                  <ul>
                    <li>React frontend using TypeScript</li>
                    <li>Next.js framework</li>
                    <li>GraphQL query language for API calls</li>
                    <li>Apollo client</li>
                  </ul>
                  <br />
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Express framework</li>
                    <li>Apollo Server Express</li>
                    <li>TypeORM type generation</li>
                  </ul>
                  <h4>As well as</h4>
                  <ul>
                    <li>Redis caching for cookies and seesion ids</li>
                    <li>PostgreSQL for persistant storage</li>
                    <li>Kuberentes & Docker deployment on GCP</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
            <Card
              raised={true}
              sx={{ bgcolor: "#212121", width: "80%", mt: 5, borderRadius: 5 }}
            >
              <CardContent sx={{ color: "white" }}>
                <Toolbar>
                  <Typography variant="h4" sx={{ fontFamily: "Gill Sans" }}>
                    Boids
                  </Typography>
                  <Box sx={{ position: "absolute", right: 0, mr: -5 }}>
                    <a
                      href="https://github.com/strobosco/boids"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 10 }}
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="1x"
                        ></FontAwesomeIcon>
                      </IconButton>
                    </a>
                  </Box>
                </Toolbar>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Gill Sans",
                    fontSize: 20,
                    mt: 2,
                  }}
                >
                  Boids started out when my father introduced me to the concept
                  of flocking one afternoon. After that, I decided to try an
                  implement the algorithm in the Golang language. The project is
                  still ongoing as I am constantly trying to make improvements.{" "}
                  <br />
                  Currently, I am trying to restrain the boids field of
                  perception to increase realism.
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Projects;
