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
import { useMediaQuery } from 'react-responsive';

// import image
import Real2 from "../assets/real-estate2.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import BGremoveLogo from "../assets/buildings-removebg-preview.png"
import BgLogin from "../assets/whitebg2.jpg"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import shadows from "@mui/material/styles/shadows";

const App = () => {
  const navigate = useNavigate();

  const [showHidePassword, setShowHidePassword] = useState<boolean>(true);

  const handleShowHide = (e: any) => {
    setShowHidePassword(!showHidePassword)
  }

  const bigScreen = useMediaQuery({
    query: '(min-width: 1300px)'
  })

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundImage: `url(${BgLogin})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Grid item md={bigScreen ? 3.5 : 4} xs={12} sx={{ textAlign: "center", alignItems: "center", justifyContent: "center", }}>
        <Box
          sx={{
            pt: 6,
            color: "black",
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "monospace",
            textShadow: "0.5px 1px #000000",
          }}
        >
          Welcome to
        </Box>
        <img src={BGremoveLogo} width={bigScreen ? 150 : 130} style={{ paddingTop: 9, }} />
        <Grid
          container
          spacing={3}
          sx={{ pt: 5, pl: bigScreen ? 10 : 7, pr: bigScreen ? 10 : 7, color: "white", display: "flex", justifyContent: "center", }}
        >
          <Grid item md={12}>
            <TextField
              sx={{ input: { color: "black" }, boxShadow: 1, }}
              fullWidth
              color="success"
              label="Name"
              placeholder="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              sx={{ input: { color: "black" }, boxShadow: 1, }}
              fullWidth
              color="success"
              label="Password"
              placeholder="Password"
              variant="outlined"
              type={showHidePassword ? "password" : "text"}
            />
            {showHidePassword ?
              <Button onClick={handleShowHide} sx={{ position: "relative", ml: -8.5, mt: 1.2, color: "#558381" }}><VisibilityOutlinedIcon /></Button>
              :
              <Button onClick={handleShowHide} sx={{ position: "relative", ml: -8.5, mt: 1.2, color: "#558381" }}><VisibilityOffOutlinedIcon /></Button>}
            <Box sx={{ display: "flex", justifyContent: "right", color: "black", pt: 1, fontSize: 15, textShadow: "0.5px 0px #000000", }}>
              Forget Password
            </Box>
          </Grid>
          <Grid item md={12}>
            <Button
              onClick={() => navigate("/")}
              variant="contained"
              size="medium"
              sx={{
                fontSize: 14,
                paddingInline: 3,
                paddingBlock: 1,
                borderRadius: 10,
                mt: 1,
                boxShadow: 5,
                bgcolor: "#558381",
                color: "black",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              Sign in
            </Button>
            <Box sx={{ pt: 4 }}>
              <IconButton
                sx={{
                  p: 1,
                  color: "black",
                  bgcolor: "gray",
                  boxShadow: 8,
                }}
              >
                <GoogleIcon />
              </IconButton>
            </Box>
            <Typography sx={{ fontFamily: "monospace", pt: 4, color: "black", fontWeight: "bold", textShadow: "0.5px 0px #000000", }}>
              Do not have any account?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={bigScreen ? 8.5 : 8}
        sx={{
          backgroundImage: `url(${Real2})`,
          backgroundSize: "cover",
          borderTopLeftRadius: bigScreen ? 600 : 300,
          backgroundPosition: "center",
          boxShadow: 20,
        }}
      ></Grid>
    </Grid>
  );
};

export default App;
