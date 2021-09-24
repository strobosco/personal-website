import type { NextPage } from "next";
import React from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Projects: NextPage = () => {
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
          Projects
        </Typography>
      </Toolbar>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 10,
          width: 1 / 1,
          mx: 10,
          mb: 10,
        }}
      >
        <Grid item xs={4}>
          <Card raised={true} sx={{ bgcolor: "#FFF2E1", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "left", bgcolor: "#FFF2E1" }}>
              <Typography>
                My project history starts in 2019, mainly building side-projects
                after following tutorials on YouTube. I built web servers,
                frontend webpages, anything that had to do with the world of web
                dev. <br />
                In 2020 however, I shifted my focus to Cloud Computing and
                Machine Learning. I discovered Coursera and Andrew Ngs Stanford
                ML Course.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card raised={true} sx={{ bgcolor: "#FFF2E1", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "left", bgcolor: "#FFF2E1" }}>
              <a
                href="https://github.com/strobosco/strobo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 28,
                    textAlign: "left",
                    borderColor: "#FFF2E1",
                    color: "#011627",
                    width: "100%",
                    p: 0,
                  }}
                >
                  Strobo
                </Button>
              </a>
              <Typography>
                Strobo was initially born from following a Ben Awad web
                tutorial. The objective was building a Reddit clone using an
                extensive and modern tech stack.
                <ul>
                  <li>React.js frontend using Typescript</li>
                  <li>Node.js backend server</li>
                  <li>Redis caching for sessions ids and cookies</li>
                  <li>PostgreSQL database for persistant storage</li>
                  <li>GraphQL query language for API requests</li>
                  <li>Apollo client and server</li>
                </ul>
                <br />
                However, once the tutorial finished I decided to go on upgrading
                what I had built. After adding some further funcionalities and
                improving the UI, I decided to deploy it for real life use. I
                decided to take a shot at the newest tech on the market,
                Kuberentes and Docker. After succesfully deploying a working
                product on my local machine, I decided to migrate my project to
                Google Cloud Platform, leveraging their existing Kuberentes
                infrastructure, exposing my product using Nginx ingress
                resources. After this deployment I decided to pursue other
                projects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card raised={true} sx={{ bgcolor: "#FFF2E1", borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "left", bgcolor: "#FFF2E1" }}>
              <a
                href="https://github.com/strobosco/boids"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 28,
                    textAlign: "left",
                    borderColor: "#FFF2E1",
                    color: "#011627",
                    width: "100%",
                    p: 0,
                  }}
                >
                  Boids
                </Button>
              </a>
              <Typography>
                This boids project was actually based on one of my fathers
                interests. One day he introduced to the concept of flocking and
                the famous boids which lead me to try and recreate them myself.
                <br />I managed to create a working model using a simple 2D game
                engine for Golang,
                <a
                  href="https://ebiten.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ebiten
                </a>
                . I am still trying to make improvements on the simulation, such
                as avoiding 360 degree perception from the boids perspective and
                adding interactive features such as sliders for adjusting the
                number of boids and their maximum speed.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
