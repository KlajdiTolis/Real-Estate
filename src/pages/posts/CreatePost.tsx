import React from "react";
import { Box, Grid, TextField } from "@mui/material";

const Create = () => {
  return (
    <>
      <Grid container sx={{}}>
        <Grid item md={12}>
          <Box
            sx={{
              pt: 3,
              pl: 7,
              pb: 5,
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Create New Property
          </Box>
        </Grid>
        <Grid item md={7} sx={{ height: "100vh" }}>
          <Grid container spacing={2} sx={{ pt: 3, pl: 7, pb: 5 }}>
            <Grid
              item
              md={10}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <TextField
                id="standard-basic"
                label="Property Name"
                variant="standard"
                placeholder="Enter Property Name"
                InputLabelProps={{ shrink: true }}
                // sx={{ m: 2 }}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                placeholder="Enter Description"
                InputLabelProps={{ shrink: true }}
                // sx={{ m: 2 }}
              />
              <TextField
                id="standard-basic"
                label="Location"
                variant="standard"
                placeholder="Enter Location"
                InputLabelProps={{ shrink: true }}
                // sx={{ m: 2 }}
              />
            </Grid>
            <Grid
              item
              md={10}
              sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}
            >
              <TextField
                id="standard-basic"
                label="Type"
                variant="standard"
                placeholder="Enter Type"
                InputLabelProps={{ shrink: true }}
                // sx={{ m: 2 }}
              />
              <TextField
                id="standard-basic"
                label="Price"
                variant="standard"
                placeholder="Enter Price"
                InputLabelProps={{ shrink: true }}
                // sx={{ m: 2 }}
              />
              <TextField
                id="standard-basic"
                label="Property Type"
                variant="standard"
                placeholder="Enter Property Type"
                InputLabelProps={{ shrink: true }}
                // sx={{ m: 2 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} spacing={3} sx={{ height: "100vh" }}>
          Map
        </Grid>
      </Grid>
    </>
  );
};

export default Create;
