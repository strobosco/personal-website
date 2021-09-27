import React from "react";

import type { NextPage } from "next";
import { Typography, Box, Card, CardContent } from "@mui/material";

const AboutMe: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          mt: 10,
          mx: "auto",
          lineHeight: 8,
          color: "white",
          fontSize: 38,
          fontFamily: "Gill Sans",
        }}
      >
        <Card
          raised={true}
          sx={{ bgcolor: "#1b1b1b", width: "90%", mx: "auto", borderRadius: 5 }}
        >
          <CardContent sx={{ color: "white" }}>
            <Typography variant="h3" sx={{ fontFamily: "Gill Sans" }}>
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2, fontFamily: "Gill Sans", fontSize: 20 }}
            >
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
