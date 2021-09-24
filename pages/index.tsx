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

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF2E1",
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
            color: "black",
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
            color: "black",
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
          <Card raised={true} sx={{ bgcolor: "#FFF2E1", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#FFF2E1" }}>
              <Typography>About</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#FFF2E1", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#FFF2E1" }}>
              <Typography>Projects</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#FFF2E1", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#FFF2E1" }}>
              <Typography>LinkedIn</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#FFF2E1", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#FFF2E1" }}>
              <Typography>Github</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#FFF2E1", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center", bgcolor: "#FFF2E1" }}>
              <Typography>Resume</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
