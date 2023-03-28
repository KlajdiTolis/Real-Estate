import { Grid } from "@mui/material";
import React from "react";
import ApppBar from "../../layout/AppBar";
import Map from "../map/Map";
import Post from "../posts/PostsCard";
import SerachPlaces from "../map/SearchPlaceMap";

const Sell = () => {
  return (
    <>
      <ApppBar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8.5}>
          <Map />
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Post />
        </Grid>
      </Grid>
    </>
  );
};

export default Sell;
