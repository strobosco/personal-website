import { Box, Flex, Text, IconButton, Icon } from "@chakra-ui/react";

import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";

import React from "react";

import type { NextPage } from "next";

const NavBar: NextPage = () => {
  return (
    <>
      <Box className="bg-primary">
        <Flex
          as="nav"
          className="w-1/1 p-8 bg-primary flex flex-col sm:flex-row"
          align="center"
          justify="space-between"
          wrap="wrap"
        >
          <Box>
            <Text className="text-heading text-white font-body">
              Niccolo Nobili
            </Text>
          </Box>
          <Box className="">
            <IconButton
              className="mx-4"
              aria-label="LinkedIn"
              as="a"
              href="https://linkedin.com/in/niccolonobili"
              rel="noopener noreferrer"
              target="_blank"
              color="white"
              icon={<Icon as={SiLinkedin} className="text-icon bg-primary" />}
            />
            <IconButton
              className="mx-4"
              aria-label="GitHub"
              as="a"
              href="https://github.com/strobosco"
              rel="noopener noreferrer"
              target="_blank"
              color="white"
              icon={<Icon as={GrGithub} className="text-icon bg-primary" />}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
