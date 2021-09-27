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
      <Box
        sx={{
          mt: 8,
          mb: 6,
          mx: "auto",
          lineHeight: 8,
          color: "white",
          fontSize: 38,
          fontFamily: "Gill Sans",
        }}
      >
        <Card
          raised={true}
          sx={{ bgcolor: "#1b1b1b", width: "80%", mx: "auto", borderRadius: 5 }}
        >
          <CardContent sx={{ color: "white" }}>
            <Typography variant="h3" sx={{ fontFamily: "Gill Sans" }}>
              {"Let's connect!"}
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
                    sx={{ position: "absolute", right: 0 }}
                  >
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Toolbar>
              </CardContent>
            </Card>
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
                    GitHub
                  </Typography>
                  <IconButton
                    href="https://github.com/strobosco"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ position: "absolute", right: 0 }}
                  >
                    <GitHubIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Toolbar>
              </CardContent>
            </Card>
            <Card
              raised={true}
              sx={{ bgcolor: "#212121", width: "80%", mt: 5, borderRadius: 5 }}
            >
              <CardContent sx={{ color: "white" }}>
                <Toolbar>
                  <Box sx={{ position: "absolute", ml: 0 }}>
                    <IconButton
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 10 }}
                    >
                      <Typography variant="h4" sx={{ fontFamily: "Gill Sans" }}>
                        Resume
                      </Typography>
                    </IconButton>
                  </Box>
                </Toolbar>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Box>
    </footer>
  );
};

export default Footer;
