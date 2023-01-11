import React, { useEffect, useState } from 'react';
import { Grid, TextField, Box, Button, IconButton, Typography } from '@mui/material';
import { Link,useNavigate } from "react-router-dom"

// import image
import Real from '../assets/buildingssss.jpg';
import Logo from '../assets/real-estate-logo.png';
import Real2 from '../assets/real-estate2.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import sds from '../assets/real-estate-business-building-technology.webp'

const App = () => {

  const navigate = useNavigate();

  return (
    <Grid container sx={{ height: '100vh', backgroundImage: "linear-gradient(to bottom, #aba290, #868b91)" }}>
      <Grid item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage: `url(${Real2})`,
          backgroundSize: 'cover',
          borderBottomRightRadius: 800,
          backgroundPosition: 'center'
        }}
      >
      </Grid>
      <Grid item md={4} sx={{ textAlign: "center", alignItems: "center" }}>
        <Box sx={{ pt: 5, color: "#3B81F1", fontWeight: "bold", fontSize: 22 }}> Welcome to</Box>
        <img src={Logo} width="180" />
        <Grid container spacing={3} sx={{ pt: 5, pl: 10, pr: 10, color: "white" }}>
          <Grid item md={12} >
            <TextField
              sx={{ input: { color: '#3B81F1' } }}
              fullWidth
              label="Name"
              placeholder='Name'
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              sx={{ input: { color: '#3B81F1' } }}
              fullWidth
              label="Password"
              placeholder='Password'
            />
          </Grid>
          <Grid item md={12}>
            <Button onClick={()=> navigate("/dashboard")} variant="contained" size="medium" sx={{ paddingInline: 7, paddingBlock: 1, borderRadius: 10, mt: 4 }}>
              Sign in
            </Button>
            <Box sx={{ pt: 3 }}>or continue with </Box>
            <IconButton sx={{ margin: 2, color: "black", bgcolor: "#fffeca" }} >
              <GoogleIcon />
            </IconButton>
            <Typography>
              Do not have any account?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
