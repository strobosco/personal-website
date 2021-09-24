import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import React from "react";

import styles from "../styles/Home.module.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#011627",
      }}
    >
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{ bgcolor: "#011627", height: 1 }}
        ></Toolbar>
      </AppBar>
      <Toolbar
        sx={{
          mt: 5,
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            color: "white",
            flexGrow: 1,
            textAlign: "center",
            fontStyle: "normal",
            fontFamily: "default",
          }}
        >
          Niccolo Nobili
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: "white",
            flexGrow: 1,
            textAlign: "center",
            fontStyle: "normal",
            fontFamily: "default",
            width: 4 / 10,
          }}
        >
          Hi, I am Niccolo! I am a Pitt student who is looking to enter the
          world
          <br />
          of software! My passions include Software Development, Cloud
          <br />
          Computing, Cybersecurity and Intelligent systems!
        </Typography>
      </Toolbar>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 10,
          width: 2 / 3,
          mx: "auto",
        }}
      >
        <Grid item xs={8}>
          <Card raised={true} sx={{ bgcolor: "#011627", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#011627" }}>
              <Link href="/about">
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#011627",
                    color: "white",
                    width: "100%",
                    p: 0,
                  }}
                >
                  About
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#011627", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#011627" }}>
              <Link href="/projects">
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#011627",
                    color: "white",
                    width: "100%",
                    p: 0,
                  }}
                >
                  Projects
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#011627", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#011627" }}>
              <a
                href="https://www.linkedin.com/in/niccolonobili/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#011627",
                    color: "white",
                    width: "100%",
                    p: 0,
                  }}
                >
                  LinkedIn
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#011627", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#011627" }}>
              <a
                href="https://github.com/strobosco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#011627",
                    color: "white",
                    width: "100%",
                    p: 0,
                  }}
                >
                  GitHub
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#011627", borderRadius: 2 }}>
            <CardContent
              sx={{ textAlign: "center", bgcolor: "#011627", color: "white" }}
            >
              <Typography>Resume</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
