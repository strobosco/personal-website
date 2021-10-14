import React from "react";

import { Box, Container, Flex, Center, Divider } from "@chakra-ui/react";

import type { NextPage } from "next";

const AboutMe: NextPage = () => {
  return (
    <>
      <Box className="pl-23 bg-primary font-body text-white">
        <Container
          maxWidth="unset"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
          className="bg-card w-11/12 mx-auto rounded p-4"
        >
          <h3 className="font-body text-heading">About Me</h3>
          <p className="mt-2 text-p font-body">
            I am a Pitt student who is looking to enter the world of software!
            My passions include:
          </p>
          <Flex flexDir="row" className="py-8 text-p text-center items-center">
            <Container>
              <p>Software Development</p>
            </Container>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Container>
              <p>Cloud Computing</p>
            </Container>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Container>
              <p>Cybersecurity</p>
            </Container>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Container>
              <p>Intelligent Systems</p>
            </Container>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default AboutMe;
