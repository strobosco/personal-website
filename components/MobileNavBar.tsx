import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

const MobileNavBar: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio for Niccolo Nobili, software developer studying Computer Science at the University of Pittsburgh. Skilled with React, Next.js, JavaScript, TypeScript, Java, Python, Node.js, Django."
        ></meta>
        <title>Niccolo Nobili</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{}}>
        <AppBar position="static" sx={{ height: 200, bgcolor: "#212121" }}>
          <Toolbar>
            <Box sx={{ mt: 5, mx: "auto" }}>
              <Typography
                sx={{
                  fontSize: 46,
                  fontFamily: "Gill Sans",
                }}
              >
                Niccolo Nobili
              </Typography>
              <Box sx={{ mx: "auto" }}>
                <IconButton
                  href="https://linkedin.com/in/niccolonobili"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  color="inherit"
                  aria-label="LinkedIn"
                  sx={{ ml: 5 }}
                >
                  <LinkedInIcon sx={{ fontSize: 60 }} />
                </IconButton>
                <IconButton
                  href="https://github.com/strobosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  color="inherit"
                  aria-label="GitHub"
                  sx={{ mr: 5 }}
                >
                  <GitHubIcon sx={{ fontSize: 60 }} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MobileNavBar;
