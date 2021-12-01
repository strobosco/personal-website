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
          className="bg-card w-11/12 pb-5 mx-auto rounded text-white"
        >
          <h4>Projects</h4>
          <Container
            maxWidth="unset"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
            className="bg-primary w-9/10 mb-5 rounded"
          >
            <Flex align="center" justify="space-between" wrap="wrap">
              <h3>Spotify Clustering</h3>
              <IconButton
                aria-label="Spotify Clustering"
                as="a"
                href="https://github.com/strobosco/CSCHacks"
                rel="noopener noreferrer"
                target="_blank"
                color="white"
                icon={<Icon as={GrGithub} className="text-icon bg-primary" />}
              />
            </Flex>
            <Flex
              className="flex-col md:flex-row m-auto"
              justify="space-between"
            >
              <p className="text-p font-body w-1/1 md:w-1/2 float-left">
                Spotify Clustering web app that creates new playlists from a
                users songs. The user selects a series of their playlists and
                how many <u>new</u> playlists they wish to create.
              </p>
              <Flex flexDir="row" className="w-1/2">
                <div className="px-10 pb-5">
                  <p className="text-p">
                    <u>Frontend:</u>
                  </p>
                  <ul className="text-p">
                    <li>React</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div className="px-10 pb-5">
                  <p className="text-p">
                    <u>Backend:</u>
                  </p>
                  <ul className="text-p">
                    <li>Flask</li>
                  </ul>
                </div>
              </Flex>
            </Flex>
          </Container>
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
            <Flex
              className="flex-col md:flex-row m-auto"
              justify="space-between"
            >
              <p className="text-p font-body w-1/1 md:w-1/2 float-left">
                Reddit-like fullstack web app. Powered by React, Node.js,
                Kubernetes, and Docker. The project was also deployed to Google
                Cloud where it was available online before I stopped developing
                it.
              </p>
              <Flex flexDir="row" justify="space-between" className="w-1/2">
                <div className="p-5 md:px-10 py-0">
                  <p className="text-p">
                    <u>Frontend:</u>
                  </p>
                  <ul className="text-p">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>GraphQL</li>
                    <li>Apollo Client</li>
                  </ul>
                </div>
                <div className="p-5 md:px-10 py-0">
                  <p className="text-p">
                    <u>Backend:</u>
                  </p>
                  <ul className="text-p">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Apollo Server</li>
                    <li>TypeORM</li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <p className="text-p display">As well as</p>
                  <ul className="text-p pb-5">
                    <li>Redis caching</li>
                    <li>PostgreSQL</li>
                    <li>Kuberentes</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </Flex>
            </Flex>
          </Container>
          <Container
            maxWidth="unset"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
            className="bg-primary w-9/10 pb-5 rounded"
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
              as I am constantly trying to make improvements. Currently, I am
              trying to restrain the boids field of perception to increase
              realism.
            </p>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
