import React from "react";

import { Box, Container, IconButton, Icon, Flex } from "@chakra-ui/react";

import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";

import type { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <>
      <Box className="bg-primary pt-10 pb-10 ml-23 text-heading font-body">
        <Container
          maxWidth="unset"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
          className="bg-card w-11/12 mx-auto rounded text-white"
        >
          <h4>Projects</h4>
          <Container
            maxWidth="unset"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
            className="bg-primary w-9/10 mb-5 rounded"
          >
            <Flex align="center" justify="space-between" wrap="wrap">
              <h3>Strobo</h3>
              <IconButton
                aria-label="Strobo"
                as="a"
                href="https://github.com/strobosco/strobo"
                rel="noopener noreferrer"
                target="_blank"
                color="white"
                icon={<Icon as={GrGithub} className="text-icon bg-primary" />}
              />
            </Flex>
            <p className="text-p font-body">
              Strobo was a side-project that initially started as a YouTube
              tutorial follow through. It started as a Reddit clone using the
              latest technology available, both in frontend and backend
              environments. After completing the tutorial I decide to continue
              developing the idea into something new, of my own creation. This
              is where the idea for a{" transparent and responsible"} social
              media was born. After extensive function development I decided to
              try and deploy the product. This is where I furthered my knowledge
              with Kubernetes, Docker, Nginx, and Google Cloud Platform. The
              entire tech stack for the product is:
            </p>
            <br />
            <p className="text-p">
              <u>Frontend:</u>
            </p>
            <ul className="text-p">
              <li>React using TypeScript</li>
              <li>Next.js</li>
              <li>GraphQL</li>
              <li>Apollo client</li>
            </ul>
            <br />
            <p className="text-p">
              <u>Backend:</u>
            </p>
            <ul className="text-p">
              <li>Node.js</li>
              <li>Express framework</li>
              <li>Apollo Server Express</li>
              <li>TypeORM type generation</li>
            </ul>
            <p className="text-p">As well as</p>
            <ul className="text-p pb-5">
              <li>Redis caching</li>
              <li>PostgreSQL</li>
              <li>Kuberentes</li>
              <li>Docker</li>
              <li>Google Cloud</li>
            </ul>
          </Container>
          <Container
            maxWidth="unset"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
            className="bg-primary w-9/10 mb-5 rounded"
          >
            <Flex align="center" justify="space-between" wrap="wrap">
              <h3>Boids</h3>
              <IconButton
                aria-label="Boids"
                as="a"
                href="https://github.com/strobosco/boids"
                rel="noopener noreferrer"
                target="_blank"
                color="white"
                icon={<Icon as={GrGithub} className="text-icon bg-primary" />}
              />
            </Flex>
            <p className="text-p font-body">
              Boids started out when my father introduced me to the concept of
              flocking one afternoon. After that, I decided to try an implement
              the algorithm in the Golang language. The project is still ongoing
              as I am constantly trying to make improvements. <br />
              Currently, I am trying to restrain the boids field of perception
              to increase realism.
            </p>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
