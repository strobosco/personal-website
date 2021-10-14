import React from "react";

import { Box, Container, Flex, Divider } from "@chakra-ui/react";

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
          <Flex className="flex flex-col sm:flex-row py-8 text-p text-center items-center">
            <Container>
              <p>Software Development</p>
            </Container>
            <Divider />
            <Container>
              <p>Cloud Computing</p>
            </Container>
            <Divider />
            <Container>
              <p>Cybersecurity</p>
            </Container>
            <Divider />
            <Container>
              <p>
                Intelligent <br /> Systems
              </p>
            </Container>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default AboutMe;
