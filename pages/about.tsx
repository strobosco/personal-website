import type { NextPage } from "next";
import React from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";

const AboutMe: NextPage = () => {
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
        <Typography>
          <Link href="/">
            <Button
              variant="outlined"
              sx={{
                ml: 10,
                fontSize: 28,
                textAlign: "left",
                borderColor: "#FFF2E1",
                color: "#011627",
                width: "100%",
                p: 0,
              }}
            >
              Back
            </Button>
          </Link>
        </Typography>
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
          About Me
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
              <Typography>When I started coding</Typography>
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

export default AboutMe;
