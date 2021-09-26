import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
              <a
                href="https://github.com/strobosco"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/niccolonobili/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
