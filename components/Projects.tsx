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

import GitHubIcon from "@mui/icons-material/GitHub";

const Projects: NextPage = () => {
  return (
    <>
      <Box className="mt-10 ml-23 text-heading font-body">
        <Card
          raised={true}
          className="bg-card w-11/12 mx-auto rounded text-white"
        >
          <CardContent className="text-white font-body">
            <Typography variant="h3">Projects</Typography>
            <Card raised={true} className="bg-primary w-9/10 mt-5 rounded">
              <CardContent className="font-body text-white">
                <Toolbar className="pl-0">
                  <Typography variant="h4" className="p-0 ml-0">
                    Strobo
                  </Typography>
                  <IconButton
                    href="https://github.com/strobosco/strobo"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    edge="start"
                    aria-label="menu"
                    className="absolute right-0"
                  >
                    <GitHubIcon className="text-icon text-white" />
                  </IconButton>
                </Toolbar>
                <Typography variant="body1" className="text-p font-body mt-2">
                  Strobo was a side-project that initially started as a YouTube
                  tutorial follow through. It started as a Reddit clone using
                  the latest technology available, both in frontend and backend
                  environments. After completing the tutorial I decide to
                  continue developing the idea into something new, of my own
                  creation. This is where the idea for a
                  {" transparent and responsible"} social media was born. After
                  extensive function development I decided to try and deploy the
                  product. This is where I furthered my knowledge with
                  Kubernetes, Docker, Nginx, and Google Cloud Platform. The
                  entire tech stack for the product is:
                  <br />
                  <br />
                  <h4>
                    <u>Frontend:</u>
                  </h4>
                  <ul>
                    <li>React frontend using TypeScript</li>
                    <li>Next.js framework</li>
                    <li>GraphQL query language for API calls</li>
                    <li>Apollo client</li>
                  </ul>
                  <br />
                  <h4>
                    <u>Backend:</u>
                  </h4>
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
            <Card raised={true} className="bg-primary w-9/10 mt-5 rounded">
              <CardContent className="text-white font-body">
                <Toolbar className="pl-0">
                  <Typography variant="h4" className="p-0 ml-0">
                    Boids
                  </Typography>
                  <IconButton
                    href="https://github.com/strobosco/boids"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    edge="start"
                    aria-label="menu"
                    className="absolute right-0"
                  >
                    <GitHubIcon className="text-icon text-white" />
                  </IconButton>
                </Toolbar>
                <Typography variant="body1" className="text-p font-body mt-2">
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
