import React from "react";

import type { NextPage } from "next";
import { Typography, Box, Card, CardContent } from "@mui/material";

const AboutMe: NextPage = () => {
  return (
    <>
      <Box className="mt-10 ml-23">
        <Card raised={true} className="bg-card w-11/12 mx-auto rounded">
          <CardContent className="text-white">
            <Typography variant="h3" className="font-body text-heading">
              About Me
            </Typography>
            <Typography variant="body1" className="mt-2 text-p font-body">
              I am a Pitt student who is looking to enter the world of software!
              My passions include:
              <ul>
                <li>Software Development</li>
                <li>Cloud Computing</li>
                <li>Cybersecurity</li>
                <li>Intelligent Systems</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default AboutMe;
