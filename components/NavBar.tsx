import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import React from "react";

import type { NextPage } from "next";

const NavBar: NextPage = () => {
  return (
    <>
      <Box className="bg-primary">
        <AppBar className="static bg-primary">
          <Toolbar>
            <Box className="flex flex-row m-auto mt-6 w-4/5">
              <Typography className="text-heading font-body">
                Niccolo Nobili
              </Typography>
              <Box className="absolute right-0 mr-20">
                <IconButton
                  href="https://linkedin.com/in/niccolonobili"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  color="inherit"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="text-icon" />
                </IconButton>
                <IconButton
                  href="https://github.com/strobosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  color="inherit"
                  aria-label="GitHub"
                  sx={{}}
                >
                  <GitHubIcon className="text-icon" />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
