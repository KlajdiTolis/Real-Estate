import { Grid } from "@mui/material";
import React from "react";
import ApppBar from "../../layout/AppBar";
import Map from "../map/MapSell";
import Post from "../posts/PostsCard";

function Sell() {
  return (
    <>
      <ApppBar />
      <Grid container>
        <Grid item xs={12} md={7.5}>
          <Map />
        </Grid>
        <Grid item xs={12} md={4.5}>
          <Post />
        </Grid>
      </Grid>
    </>
  );
}

export default Sell;
