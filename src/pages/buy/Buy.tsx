import React from "react";
import { Grid, Box } from "@mui/material";
import ApppBar from "../../layout/AppBar";

// import components
import MapPage from "../map/MapPage";

const Buy = () => {
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

export default Buy;
