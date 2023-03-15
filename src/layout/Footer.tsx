import { Box, Typography } from "@mui/material";
import React from "react";

//image
// import Footerbg from "../assets/footer/footerbg2.jpg"

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundImage: "linear-gradient(to right, #87a194 , #988da8)",
        // backgroundImage: `url(${Footerbg})`,
        color: "white",
        textAlign: "center",
        height: "20vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
    </Box>
  );
}

export default Footer;
