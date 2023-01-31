import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundImage: "linear-gradient(to right,#4a524f, #2c302f , #8c8f8e)",
        color: "white",
        textAlign: "center",
        height: "20vh",
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
