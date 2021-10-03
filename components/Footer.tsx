import React from "react";

import { Box, Flex, Container, IconButton, Icon } from "@chakra-ui/react";

import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";

import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer>
      <Box className="bg-primary mb-10 ml-23 text-heading font-body">
        <Container
          maxWidth="unset"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
          className="bg-card w-11/12 pb-5 mx-auto rounded text-white"
        >
          <h4 className="text-center">Connect with me!</h4>
          <Container
            maxWidth="unset"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
            className="bg-primary w-9/10 mb-5 rounded"
          >
            <a
              href="https://github.com/strobosco/strobo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Flex align="center" justify="space-between" wrap="wrap">
                <h3>GitHub</h3>
                <IconButton
                  aria-label="GitHub"
                  as="a"
                  href="https://github.com/strobosco/strobo"
                  rel="noopener noreferrer"
                  target="_blank"
                  color="white"
                  icon={<Icon as={GrGithub} className="text-icon bg-primary" />}
                />
              </Flex>
            </a>
          </Container>
          <Container
            maxWidth="unset"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
            className="bg-primary w-9/10 mb-5 rounded"
          >
            <a
              href="https://linkedin.com/in/niccolonobili"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Flex align="center" justify="space-between" wrap="wrap">
                <h3>LinkedIn</h3>
                <IconButton
                  aria-label="LinkedIn"
                  as="a"
                  href="https://linkedin.com/in/niccolonobili"
                  rel="noopener noreferrer"
                  target="_blank"
                  color="white"
                  icon={
                    <Icon as={SiLinkedin} className="text-icon bg-primary" />
                  }
                />
              </Flex>
            </a>
          </Container>
          <Container
            maxWidth="unset"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
            className="bg-primary w-9/10 mb-5 rounded"
          >
            <a href="/resume.pdf" rel="noopener noreferrer" target="_blank">
              <Flex align="center" justify="space-between" wrap="wrap">
                <h3>Resume</h3>
              </Flex>
            </a>
          </Container>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
