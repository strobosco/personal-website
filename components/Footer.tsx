import React from "react";

import type { NextPage } from "next";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Toolbar,
  IconButton,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer: NextPage = () => {
  return (
    <footer>
      <Box className="mt-8 mb-6 mx-auto text-white font-body text-footer">
        <Card raised={true} className="bg-card w-11/12 mx-auto rounded">
          <CardContent className="text-white font-body">
            <Typography variant="h3" className="text-center">
              {"Connect with me!"}
            </Typography>
            <a
              href="https://linkedin.com/in/niccolonobili"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                raised={true}
                className="w-11/12 mt-5 mx-auto rounded bg-primary text-white"
              >
                <CardContent color="inherit">
                  <Toolbar>
                    <Typography variant="h4" className="ml-0">
                      LinkedIn
                    </Typography>
                    <IconButton
                      href="https://linkedin.com/in/niccolonobili"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      className="absolute right-0"
                    >
                      <LinkedInIcon className="text-footerIcon" />
                    </IconButton>
                  </Toolbar>
                </CardContent>
              </Card>
            </a>
            <a
              href="https://github.com/strobosco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                raised={true}
                className="w-11/12 mt-5 mx-auto rounded bg-primary text-white"
              >
                <CardContent color="inherit">
                  <Toolbar>
                    <Typography variant="h4" className="ml-0">
                      GitHub
                    </Typography>
                    <IconButton
                      href="https://github.com/strobosco"
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      className="absolute right-0"
                    >
                      <GitHubIcon className="text-footerIcon" />
                    </IconButton>
                  </Toolbar>
                </CardContent>
              </Card>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Card
                raised={true}
                className="w-11/12 mt-5 mx-auto rounded bg-primary text-white"
              >
                <CardContent color="inherit">
                  <Toolbar>
                    <Typography variant="h4">Resume</Typography>
                  </Toolbar>
                </CardContent>
              </Card>
            </a>
          </CardContent>
        </Card>
      </Box>
    </footer>
  );
};

export default Footer;
