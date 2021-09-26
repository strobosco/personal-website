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

const NavBar: NextPage = () => {
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
      <Box sx={{ height: 20 }}>
        <AppBar position="static" sx={{ height: 80, bgcolor: "#212121" }}>
          <Toolbar>
            <Typography
              sx={{
                lineHeight: 8,
                ml: 20,
                fontSize: 38,
                fontFamily: "Gill Sans",
              }}
            >
              Niccolo Nobili
            </Typography>
            <Box sx={{ position: "absolute", right: 0, mr: 20 }}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="LinkedIn"
                sx={{ mr: 10 }}
              >
                <a
                  href="https://linkedin.com/in/niccolonobili"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </a>
              </IconButton>
              <IconButton
                href="https://github.com/strobosco"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                color="inherit"
                aria-label="GitHub"
                sx={{ mr: 10 }}
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
