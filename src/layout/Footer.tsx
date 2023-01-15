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
        bgcolor: "#4d594a",
        color: "white",
        textAlign: "center",
        height: "30vh",
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
