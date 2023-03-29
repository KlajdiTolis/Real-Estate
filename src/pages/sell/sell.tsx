import { Box, Grid } from "@mui/material";
import React from "react";
import ApppBar from "../../layout/AppBar";
import Map from "../map/Map";
import Post from "../posts/PostsCard";
import SerachPlaces from "../map/SearchPlaceMap";

//import Images
import BgLogin from "../../assets/whitebg2.jpg";

const Sell = () => {
  return (
    <Box sx={{ backgroundImage: `url(${BgLogin})` }}>
      <ApppBar />
      <Grid container spacing={0}>
        <Grid item xs={12} md={7}>
          <Map />
        </Grid>
        <Grid item xs={12} md={5}>
          <Post />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sell;
