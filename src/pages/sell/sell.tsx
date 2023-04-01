import { useState, useCallback, useRef } from "react";
import { Box, Grid } from "@mui/material";
import React from "react";
import ApppBar from "../../layout/AppBar";
import Map from "../map/Map";
import Post from "../posts/PostsCard";
import SerachPlaces from "../map/SearchPlaceMap";

//import Images
import BgLogin from "../../assets/whitebg2.jpg";

//import components
import MapPage from "../map/MapPage";

const Sell = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={12}>
          <MapPage />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sell;
