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
                  Strobo was a side-project that initailly started a YouTube
                  tutorial follow through.
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
                  Boids was
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
