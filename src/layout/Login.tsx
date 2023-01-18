import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// import image
import Real from "../assets/buildingssss.jpg";
import Logo from "../assets/real-estate-logo.png";
import Logo1 from "../assets/KT.png";
import Logo123 from "../assets/logo123.png";
import LogoBW from "../assets/logoBW.png";
import Real2 from "../assets/real-estate2.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import sds from "../assets/real-estate-business-building-technology.webp";

const App = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundImage: "linear-gradient(to bottom, #a1a383, #333232)",
      }}
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage: `url(${Real2})`,
          backgroundSize: "cover",
          borderBottomRightRadius: 800,
          backgroundPosition: "center",
          boxShadow: 20,
        }}
      ></Grid>
      <Grid item md={4} sx={{ textAlign: "center", alignItems: "center" }}>
        <Box
          sx={{
            pt: 5,
            color: "black",
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "monospace",
          }}
        >
          {" "}
          Welcome to
        </Box>
        <img src={LogoBW} width="150" style={{ paddingTop: 20 }} />
        <Grid
          container
          spacing={3}
          sx={{ pt: 2, pl: 15, pr: 15, color: "white" }}
        >
          <Grid item md={12}>
            <TextField
              sx={{ input: { color: "black" }, boxShadow: 1 }}
              fullWidth
              label="Name"
              placeholder="Name"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              sx={{ input: { color: "#black" }, boxShadow: 1 }}
              fullWidth
              label="Password"
              placeholder="Password"
            />
          </Grid>
          <Grid item md={12}>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="contained"
              size="medium"
              sx={{
                fontSize: 14,
                paddingInline: 3,
                paddingBlock: 1,
                borderRadius: 10,
                mt: 1,
                boxShadow: 5,
                bgcolor: "#fffeca",
                color: "black",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              Sign in
            </Button>
            <Box sx={{ pt: 2, pb: 1, fontFamily: "monospace" }}>
              or continue with{" "}
            </Box>
            <IconButton
              sx={{
                p: 1,
                color: "black",
                bgcolor: "#fffeca",
                boxShadow: 8,
              }}
            >
              <GoogleIcon />
            </IconButton>
            <Typography sx={{ fontFamily: "monospace", pt: 1 }}>
              Do not have any account?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
