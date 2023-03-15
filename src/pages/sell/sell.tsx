import { Grid } from '@mui/material';
import React from 'react'
import ApppBar from '../../layout/AppBar'
import Map from './MapSell';
import Post from "../posts/PostsCard";

function Sell() {
  return (
    <>
      <ApppBar />
      <Grid container>
        <Grid item xs={12} md={6}>
        <Map />
        </Grid>
        <Grid item xs={12} md={6}>
        <Post />
        </Grid>
      </Grid>
    </>
  )
}

export default Sell;